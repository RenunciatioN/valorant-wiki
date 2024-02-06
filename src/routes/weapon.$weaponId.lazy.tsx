
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/weapon/$weaponId')({
    component: function() {
        return <div></div>
    },
})
