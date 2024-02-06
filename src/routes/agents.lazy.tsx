import { createLazyFileRoute } from '@tanstack/react-router'
import { AgentsPage } from '@/components/_pages/agents/AgentsPage'

export const Route = createLazyFileRoute('/agents')({
    component: AgentsPage,
})
