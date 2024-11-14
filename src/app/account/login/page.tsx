'use client';

import { LoginForm } from './form';
import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export default function Login() {
    /*
        <div className="w-full h-screen bg-zinc-900/50 fixed flex">
            <div className = "w-full h-full bg-zinc-900/50 absolute top-0 left-0 -z-[10]"></div>
            <img src="/images/gedung.jpg" className="absolute h-[calc(100%+8px)] w-2/3 min-h-[20rem] -top-[4px] -left-[4px] blur-sm opacity-50 select-none mask-image-r -z-10" alt="Background"/>
            <div className="absolute w-full h-full bg-primary-gradient top-0 left-0 -z-[11]"></div>

            <div className = "bg-slate-100 p-16 ml-auto w-full flex flex-col gap-8">
                <div className="flex gap-8 items-center">
                    <h1 className="text-4xl font-semibold">Login</h1>
                    <hr className="border-slate-400/50 w-full h-fit"></hr>
                </div>

                <Suspense fallback={<>Loading...</>}>
                    <LoginForm />
                </Suspense>

            </div>
        </div>
    */

        const [api, setApi] = React.useState<CarouselApi>()
        const [current, setCurrent] = React.useState(0)
        const [count, setCount] = React.useState(0)
       
        React.useEffect(() => {
          if (!api) {
            return
          }
       
          setCount(api.scrollSnapList().length)
          setCurrent(api.selectedScrollSnap() + 1)
       
          api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
          })
        }, [api])
       
        return (
            <div className = "w-full h-full flex p-16 gap-8 items-center justify-center">
                <div className = "w-full h-full">
                    <Carousel setApi={setApi} className="w-full max-w-xs">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                                </Card>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                    <div className="py-2 text-center text-sm text-muted-foreground">
                        Slide {current} of {count}
                    </div>
                </div>

                <div className = "w-full flex flex-col gap-6 bg-slate-100 rounded-3xl p-16 my-auto">
                    <div className = "flex">
                        <h1 className = "text-3xl font-semibold">Masuk</h1>
                    </div>
                    <LoginForm/>
                </div>
            </div>
        )
}