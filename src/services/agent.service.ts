import { api } from '@/utils/api/instance'

import { Agent } from '@/@types/agent'

const language = 'language=ru-RU'

export const AgentService = {
    async getAgentsAll(params?: RequestConfig) {
        const { data } = await api.get<BaseResponse<Agent[]>>(
            `/agents?isPlayableCharacter=true&${language}`,
            params?.config
        )

        return data.data
    },
    async getAgentById(id: string, params?: RequestConfig) {
        const { data } = await api.get<BaseResponse<Agent>>(`/agents/${id}?${language}`, params?.config)

        return data.data
    },
}
