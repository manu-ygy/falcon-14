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
        <div className = "w-full h-screen flex p-8 items-center justify-center">
            <div className = "w-full h-full relative bg-gradient-to-b from-qmaroon-600 to-qmaroon-400 rounded-3xl">
                <img src = "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg" className = "rounded-3xl object-cover w-full h-full opacity-70 brightness-50"/>
                <div className = "absolute text-slate-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-1/4 lg:min-w-[400px] flex flex-col gap-4 bg-white rounded-3xl text-zinc-900 p-16">
                    <h1 className = "font-semibold text-2xl">Mulai liburan tanpa pusingmu!</h1>
                    <span className = "opacity-70">Airstra siap membantumu untuk mewujudkan liburan santaimu tanpa perlu pusing!</span>
                
                    <React.Suspense>
                        <LoginForm/>
                    </React.Suspense>
                </div>
            </div>
        </div>
    )
}