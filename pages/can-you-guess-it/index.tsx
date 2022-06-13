import { useState, useEffect, Fragment } from 'react';
import { supabase } from '../../utils/supabaseClient';
import Auth from '../../components/Auth/auth';
import Link from 'next/link';
import dayjs from 'dayjs';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function CanYouGuessIt() {
    const [session, setSession] = useState(null);
    let [selectedGenre, setSelectedGenre] = useState(null);
    let [currentTrackPreview, setCurrentTrackPreview] = useState(null);
    const genres = [
        { name: 'Country', value: 'country' },
        { name: 'Pop', value: 'pop' },
        { name: 'Rock', value: 'rock' }
    ];
    let spotifyAccessKey: string;
    let trackPreviews: string[] = [];

    useEffect(() => {
        setSession(supabase.auth.session())
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
        setSpotifyAccessToken()
    }, [])


    async function setSpotifyAccessToken() {
        const spotifyAccessKeyObject = JSON.parse(localStorage.getItem('spotify-access-key'));
        if (spotifyAccessKeyObject?.value && !spotifyTokenExpired(spotifyAccessKeyObject?.timestamp)) {
            spotifyAccessKey = spotifyAccessKeyObject.value;
            await searchSpotify();
            return;
        }
        const spotifyAccessResp = await supabase.functions.invoke('spotify-get-token');
        if (!spotifyAccessResp.error && spotifyAccessResp.data?.access_token) {
            spotifyAccessKey = spotifyAccessResp.data?.access_token;
            localStorage.setItem('spotify-access-key', JSON.stringify({ value: spotifyAccessResp.data.access_token, timestamp: new Date().getTime() }));
            await searchSpotify();
        }
    }

    async function searchSpotify() {
        const allTracks = await supabase.functions.invoke('spotify-search', { body: JSON.stringify({ token: spotifyAccessKey, genre: selectedGenre.value }) });
        allTracks.data.tracks.items.forEach(track => {
            if (track?.preview_url) {
                trackPreviews.push(track.preview_url);
            }
        });
        if (trackPreviews?.length > 0) {
            setCurrentTrackPreview(trackPreviews.pop());
        }
    }

    function spotifyTokenExpired(expiryTime: number): boolean {
        return dayjs().diff(expiryTime, 'minutes') >= 60;
    }

    function GenreListbox() {
        if (!selectedGenre) {
            [selectedGenre, setSelectedGenre] = useState(genres[0]);
        }
        return (
            <Listbox value={selectedGenre.value} onChange={value => {
                selectedGenre = value;
                setSelectedGenre(value);
                setSpotifyAccessToken();
            }}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selectedGenre.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <SelectorIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {genres.map((genre, genreIdx) => (
                                <Listbox.Option
                                    key={genreIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={genre}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {genre.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>

        )
    }

    return (
        <div className="bg-gray-900 w-full h-full">
            {!session ?? <Auth />}
            <div className="absolute top-8 right-40 w-80">
                {GenreListbox()}
            </div>
            <div className="absolute top-10 right-10 text-white">
                <Link href="/can-you-guess-it/profile">Profile</Link>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <AudioPlayer autoPlay volume={0.5} src={currentTrackPreview} />
            </div>
        </div>
    )
}