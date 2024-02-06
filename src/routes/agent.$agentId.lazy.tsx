import { createLazyFileRoute } from '@tanstack/react-router'
import { AgentPage } from '@/components/_pages/agent/AgentPage'

export const Route = createLazyFileRoute('/agent/$agentId')({
    component: AgentPage,
})
