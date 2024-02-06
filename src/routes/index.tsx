import { HomePage } from '@/components/_pages/home/HomePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: HomePage,
})
