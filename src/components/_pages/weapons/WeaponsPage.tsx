import { FC } from 'react'
import { Link } from '@tanstack/react-router'
import { useWeapons } from './useWeapons'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
// import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip'

interface IProps {}

const WeaponsPage: FC<IProps> = () => {
    const { data } = useWeapons()

    return (
        <div className="py-10">
            <div className="mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-10 max-w-[1416px] m-auto px-4">
                {data?.length
                    ? data.map((weapon) => (
                          <Link key={weapon.uuid} to="/weapon/$weaponId" params={{ weaponId: weapon.uuid }}>
                              <Card className="hover:shadow-slate-400 w-[300px] h-[200px] transition-shadow duration-200 cursor-pointer ">
                                  <CardHeader>
                                      <CardTitle className="mb-4 text-center">{weapon.displayName}</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                      <div className="mb-4">
                                          <img
                                              src={weapon.displayIcon}
                                              alt={weapon.displayName}
                                              className="max-h-[74px] mx-auto"
                                          />
                                      </div>

                                      <div className="flex justify-between mb-4">
                                          {/* {weapon.abilities.map(
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
                                          )} */}
                                      </div>
                                  </CardContent>
                              </Card>
                          </Link>
                      ))
                    : Array.from({ length: 8 }).map((_, index) => (
                          <Skeleton key={index} className="w-[300px] h-[200px] rounded-lg bg-accent" />
                      ))}
            </div>
        </div>
    )
}

export { WeaponsPage }
