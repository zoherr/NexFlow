import { requireUnAuth } from '@/lib/auth-utils'
import React from 'react'

const layout = async ({ children }: { children: React.ReactNode }) => {
    await requireUnAuth();
    return (
        <div>
            {children}
        </div>
    )
}

export default layout