import { api } from '@/utils/api/instance'

import { Weapon } from '@/@types/weapons'

const language = 'language=ru-RU'

export const WeaponsService = {
    async getWeaponsAll(params?: RequestConfig) {
        const { data } = await api.get<BaseResponse<Weapon[]>>(`/weapons?${language}`, params?.config)

        return data.data
    },
}
