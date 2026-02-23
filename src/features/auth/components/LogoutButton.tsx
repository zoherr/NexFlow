"use client"
import { Button } from '@/components/ui/button'
import { auth } from '@/lib/auth'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import React from 'react'

const LogoutButton = () => {
    const router = useRouter()
    return (
        <Button onClick={() => authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                }
            }
        })}>Logout</Button>
    )
}

export default LogoutButton
