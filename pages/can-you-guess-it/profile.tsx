import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import Auth from '../../components/Auth/auth';
import Account from '../../components/Account/account';

export default function CanYouGuessItProfile() {
    const [session, setSession] = useState(null)

    useEffect(() => {
        setSession(supabase.auth.session())
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    return (
        <div className="bg-gray-900 w-full h-full flex justify-center items-center">
            {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
        </div>
    )
}