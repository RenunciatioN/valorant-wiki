import { Agent } from '@/@types/agent'
import { useQuery } from '@tanstack/react-query'
import { useDebounce } from '@uidotdev/usehooks'
import { AgentService } from '@/services/agent.service'

import { useEffect, useState } from 'react'

export const useAgents = () => {
    const [agents, setAgents] = useState<Agent[]>([])
    const [searchValue, setSearchValue] = useState('')

    const debouncedSearchTerm = useDebounce(searchValue, 300)

    const agentsQuery = useQuery({
        queryKey: ['agents'],
        queryFn: () => AgentService.getAgentsAll(),
    })

    useEffect(() => {
        const agents = agentsQuery.data?.filter((agent) => {
            return agent.displayName.toLowerCase().includes(searchValue.toLowerCase())
        })
        agents && setAgents([...agents])
    }, [debouncedSearchTerm])

    return {
        queriesData: {
            agentsQuery,
        },
        functions: {
            setSearchValue,
        },
        data: {
            searchValue,
            agents: !!agents.length ? agents : agentsQuery.data,
        },
    }
}
