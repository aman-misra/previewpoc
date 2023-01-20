import React from 'react'
import Button from "@mui/material/Button";
import { useSession, signIn, signOut } from "next-auth/react"

const LoginButton = () => {
    return (
        <div><Button variant="contained" onClick={() => signIn()}>Sign in</Button></div>
    )
}

export default LoginButton