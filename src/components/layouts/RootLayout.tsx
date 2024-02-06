import { FC } from 'react'

import { ThemeProvider } from '@/shared/providers/theme-provider'
import { NavBar } from '../navbar/NavBar'


interface IProps {
    children: React.ReactNode
}

const RootLayout: FC<IProps> = ({ children }) => {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <NavBar />
                {children}
            </ThemeProvider>
        </>
    )
}

export { RootLayout }
