import { AgentService } from '@/services/agent.service'
import { useQuery } from '@tanstack/react-query'


export const useAgent = (agentId: string) => {


    const agentQuery = useQuery({
        queryKey: ['agent', agentId],
        queryFn: () => AgentService.getAgentById(agentId),
    })

    return agentQuery
}
