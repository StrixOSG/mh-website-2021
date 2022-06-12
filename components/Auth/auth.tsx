import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

export default function Auth() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

    const handleLogin = async (email) => {
        try {
            setLoading(true)
            const { error } = await supabase.auth.signIn({ email }, { redirectTo: `${window.location.origin}/can-you-guess-it` })
            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center">
            <div className="w-96 form-widget space-y-8">
                <h1 className="text-5xl text-sunglow-yellow">Can you Guess It?</h1>
                <div>
                    <p className="text-gray-300 mb-4">Sign in via magic link with your email below</p>
                    <div>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-200"
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            handleLogin(email)
                        }}
                        className="flex text-gray-800 font-semibold bg-sunglow-yellow rounded-md py-1.5 px-4"
                        disabled={loading}
                    >
                        <span>{loading ? 'Loading' : 'Send magic link'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}