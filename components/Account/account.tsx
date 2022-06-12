import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import UploadAvatar from './upload-avatar';

export default function Account({ session }) {
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [website, setWebsite] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)
    const default_avatar_url = '../../public/stars.svg';

    useEffect(() => {
        getProfile()
    }, [session])

    async function getProfile() {
        try {
            setLoading(true)
            const user = supabase.auth.user()
            let { data, error, status } = await supabase
                .from('profiles')
                .select(`username, website, avatar_url`)
                .eq('id', user.id)
                .single()

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setUsername(data.username)
                setWebsite(data.website)
                setAvatarUrl(data.avatar_url)
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    async function updateProfile({ username, website, avatar_url }) {
        try {
            setLoading(true)
            const user = supabase.auth.user()

            const updates = {
                id: user.id,
                username,
                website,
                avatar_url,
                updated_at: new Date(),
            }

            let { error } = await supabase.from('profiles').upsert(updates, {
                returning: 'minimal', // Don't return the value after inserting
            })

            if (error) {
                throw error
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center items-center text-white">
            <div className="flex flex-col w-144 space-y-8 bg-gray-700 px-10 py-10 rounded-md">
                <h2 className="text-3xl">Profile Info</h2>
                <UploadAvatar
                    url={avatar_url ? avatar_url : default_avatar_url}
                    size={380}
                    onUpload={(url) => {
                        setAvatarUrl(url)
                        updateProfile({ username, website, avatar_url: url })
                    }}
                />
                <div className="flex items-center space-x-4">
                    <label htmlFor="email" className="w-20">Email</label>
                    <input
                        className="appearance-none border-2 border-gray-200 rounded w-64 py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-200"
                        id="email" type="text" value={session.user.email} disabled />
                </div>
                <div className="flex items-center space-x-4">
                    <label htmlFor="username" className="w-20">Name</label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-64 py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-200"
                        id="username"
                        type="text"
                        value={username || ''}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <label htmlFor="website" className="w-20">Website</label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-64 py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-200"
                        id="website"
                        type="website"
                        value={website || ''}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div className="flex space-x-4">
                    <div>
                        <button
                            className="flex text-white bg-purple-200 rounded-md py-1.5 px-4"
                            onClick={() => updateProfile({ username, website, avatar_url })}
                            disabled={loading}
                        >
                            {loading ? 'Loading ...' : 'Update'}
                        </button>
                    </div>

                    <div>
                        <button className="flex text-white bg-purple-200 rounded-md py-1.5 px-4" onClick={() => supabase.auth.signOut()}>
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}