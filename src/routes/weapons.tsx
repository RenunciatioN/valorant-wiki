import { WeaponsPage } from '@/components/_pages/weapons/WeaponsPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/weapons')({
    component: WeaponsPage,
})
