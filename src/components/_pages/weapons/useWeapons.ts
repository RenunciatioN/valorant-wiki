import { WeaponsService } from '@/services/weapons.service'
import { useQuery } from '@tanstack/react-query'

export const useWeapons = () => {
    const agentsQuery = useQuery({
        queryKey: ['weapons'],
        queryFn: () => WeaponsService.getWeaponsAll(),
    })

    return agentsQuery
}
