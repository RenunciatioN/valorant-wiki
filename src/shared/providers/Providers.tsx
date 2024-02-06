import { FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface IProps {
    children: React.ReactNode
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
        },
    },
})

const Providers: FC<IProps> = ({ children }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export { Providers }
