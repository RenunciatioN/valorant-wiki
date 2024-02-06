import { RootLayout } from '@/components/layouts/RootLayout'
import { Toaster } from '@/components/ui/sonner'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <RootLayout>
                <Outlet />
            </RootLayout>

            <TanStackRouterDevtools />
            <Toaster />
        </>
    ),
})
