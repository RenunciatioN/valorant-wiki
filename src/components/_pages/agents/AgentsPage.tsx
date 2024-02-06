import { FC } from 'react'
import { Link } from '@tanstack/react-router'
import { useAgents } from './useAgents'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Skeleton } from '@/components/ui/skeleton'
import { Input } from '@/components/ui/input'

interface IProps {}

const AgentsPage: FC<IProps> = () => {
    const { functions, data } = useAgents()

    return (
        <div className="py-10">
            <div className="mb-10">
                <Input onChange={(e) => functions.setSearchValue(e.target.value)} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4  justify-items-center gap-10 max-w-[1416px] m-auto px-4">
                {!!data.agents?.length
                    ? data.agents.map((agent) => (
                          <Link key={agent.uuid} to="/agent/$agentId" params={{ agentId: agent.uuid }}>
                              <Card className="hover:shadow-slate-400 w-[300px] h-[388px] transition-shadow duration-200 cursor-pointer ">
                                  <CardHeader>
                                      <CardTitle className="-mb-4 text-center">{agent.displayName}</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                      <div className="mb-4">
                                          <img
                                              src={agent.fullPortrait}
                                              alt={agent.displayName}
                                              height={227}
                                              width={250}
                                          />
                                      </div>

                                      <div className="flex justify-between mb-4">
                                          {agent.abilities.map(
                                              (item, index) =>
                                                  item.displayIcon && (
                                                      <TooltipProvider key={index} delayDuration={2}>
                                                          <Tooltip>
                                                              <TooltipTrigger>
                                                                  <div className="hover:outline hover:outline-1 outline-white/20 p-2 rounded-md bg-accent">
                                                                      <img
                                                                          src={item.displayIcon}
                                                                          alt=""
                                                                          width={30}
                                                                          height={30}
                                                                      />
                                                                  </div>
                                                              </TooltipTrigger>
                                                              <TooltipContent>
                                                                  <p>{item.displayName}</p>
                                                              </TooltipContent>
                                                          </Tooltip>
                                                      </TooltipProvider>
                                                  )
                                          )}
                                      </div>
                                  </CardContent>
                              </Card>
                          </Link>
                      ))
                    : Array.from({ length: 8 }).map((_, index) => (
                          <Skeleton key={index} className="w-[300px] h-[388px] rounded-lg bg-accent" />
                      ))}
            </div>
        </div>
    )
}

export { AgentsPage }
