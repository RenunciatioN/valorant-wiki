import { FC } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/shared/providers/theme-provider'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Link } from '@tanstack/react-router'

interface IProps {}

const NavBar: FC<IProps> = () => {
    const { setTheme } = useTheme()

    return (
        <div className="">
            <div className="py-4 max-w-[1400px] m-auto flex items-center justify-between ">
                <Link to="/" className=" font-bold text-4xl">
                    Valorant
                    <span className="text-accent"> Wiki </span>
                </Link>

                <div className="flex gap-16">
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link
                                to="/agents"
                                className="font-bold [&.active]:text-accent text-xl hover:opacity-60 [&.active]:opacity-100 transition-opacity"
                            >
                                Agents
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/weapons"
                                className="font-bold [&.active]:text-accent text-xl hover:opacity-60 [&.active]:opacity-100 transition-opacity"
                            >
                                Weapons
                            </Link>
                        </li>
                    </ul>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}

export { NavBar }
