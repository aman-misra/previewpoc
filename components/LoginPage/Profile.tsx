import { useSession, signIn, signOut } from "next-auth/react"
import LoginButton from "./LoginButton"

export default function Profile() {
    const { data: session } = useSession()

    console.log(session, 'loggedinData');
    
    if (session) {
        return (
            <>
                Signed in as {session && session.user && session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>

            </>
        )
    }
    return (
        <>
            Not signed in <br />

            <LoginButton />
        </>
    )
}