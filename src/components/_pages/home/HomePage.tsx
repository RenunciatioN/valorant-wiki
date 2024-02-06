import { FC } from 'react'

import homeBg from '@/assets/img/bg/VALORANT_VIPER_2.jpg'

interface IProps {}

const HomePage: FC<IProps> = () => {
    return (
        <div className="p-2 h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${homeBg})` }}>
            <h3>Welcome Home!</h3>
        </div>
    )
}

export { HomePage }
