import { useParams } from '@tanstack/react-router'
import { FC } from 'react'
import { useAgent } from './useAgent'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

interface IProps {}

const AgentPage: FC<IProps> = () => {
    const { agentId } = useParams({ strict: false, experimental_returnIntersection: true })

    if (!agentId) return

    const { data } = useAgent(agentId)

    if (!data) return

    return (
        <div>
            <div className="flex gap-20 py-10 bg-black">
                <div className="w-1/2">
                    <h2 className="font-bold text-4xl -mb-10 text-center text-color-invert font-oswald">
                        {data.displayName}
                    </h2>

                    <div className="animate-fade-right animate-once animate-duration-[4000ms] animate-ease-out ">
                        <img src={data.fullPortrait} alt={data.displayName} />
                    </div>

                    <p className="text-color-invert w-2/3 mx-auto text-xl">{data.description}</p>
                </div>

                <div className="w-1/2 ">
                    <Tabs defaultValue={data.abilities[0].displayName} className="max-w-[600px] p-8 ">
                        <h4 className="text-2xl text-center mb-16">Способности</h4>
                        <TabsList className="bg-backround mb-12 justify-center flex">
                            {data.abilities.map((item, index) => (
                                <TabsTrigger
                                    key={index}
                                    value={item.displayName}
                                    className="data-[state=active]:bg-transparent data-[state=active]:outline-accent data-[state=active]:outline data-[state=active]:outline-1"
                                >
                                    <div className="p-2 ">
                                        <img src={item.displayIcon} alt={item.displayName} width={30} height={30} />
                                    </div>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {data.abilities.map((item, index) => (
                            <TabsContent key={index} value={item.displayName} className="animate-fade-up">
                                <div className="flex justify-center mb-8 max-w-[256px] mx-auto">
                                    <img src={item.displayIcon} alt="" />
                                </div>
                                <p className="text-2xl text-center text-yellow-300 mb-6">{item.displayName}</p>

                                <p className="text-center text-accent"> {item.description}</p>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export { AgentPage }
