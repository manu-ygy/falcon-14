"use client"
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { GearFine, HandsPraying, Lego, LightbulbFilament, Rocket, Smiley, Translate } from '@phosphor-icons/react/dist/ssr'
import React from 'react'
const cards = [
    {
        title: "Terampil",
        description: "Kami mengembangkan berbagai kegiatan intrakurikuler, kokurikuler dan ekstrakurikuler untuk melatih keterampilan siswa sehingga mereka memiliki kemampuan untuk bertindak dengan cekatan, gesit, lincah dan sistematis.",
        icon: GearFine,
        bgStyle: "bg-gradient-to-br from-blue-900 to-blue-950/70"
    },
    {
        title: "Edutaiment",
        description: "Kami menyelenggarakan pembelajaran berkualitas dan menyenangkan dengan memadukan muatan pendidikan (edukasi) dan hiburan (entertaiment) secara harmonis.",
        icon: Lego,
        bgStyle: "bg-gradient-to-br from-yellow-900 to-yellow-950/70"
    },
    {
        title: "Religius",
        description: "Kami menyelenggarakan pembelajaran berkualitas dan menyenangkan dengan memadukan muatan pendidikan (edukasi) dan hiburan (entertaiment) secara harmonis.",
        icon: HandsPraying,
        bgStyle: "bg-gradient-to-br from-red-900 to-red-950/70"
    },
    {
        title: "Bahasa Asing",
        description: "Kami memberikan pengalaman belajar kepada siswa untuk meningkatkan penguasaan bahasa asing selain bahasa inggris dengan harapan lulusan SMA Yos Sudarso dapat bersaing di kancah global.",
        icon: Translate,
        bgStyle: "bg-gradient-to-br from-blue-900 to-blue-950/70"
    },
    {
        title: "Aktif & Kreatif",
        description: "Kami mendorong siswa/i untuk terlibat dalam berbagai kegiatan yang mengembangkan kemampuan siswa-siswi dalam menciptakan ide atau gagasan baru, unik dan berbeda yang bermanfaat bagi masa depan.",
        icon: LightbulbFilament,
        bgStyle: "bg-gradient-to-br from-yellow-900 to-yellow-950/70"
    },
    {
        title: "Inovatif",
        description: "Kami memberikan ruang belajar yang luas untuk memperkuat kemampuan siswa-siswi dalam mewujudkan ide atau gagasan pembaharuan yang lebih baik dan bermanfaat bagi masa depan.",
        icon: Rocket,
        bgStyle: "bg-gradient-to-br from-red-900 to-red-950/70"
    },
    {
        title: "Karakter",
        description: "Kami tidak hanya membentuk siswa-siswi untuk memiliki kemampuan dalam bidang akademik saja, melainkan tetap mengutamakan agar siswa-siswi memiliki karakter yang baik meliputi: empati, adaptif, disiplin, jujur, tanggungjawab, mandiri dan berjiwa kepemimpinan.",
        icon: Smiley,
        bgStyle: "bg-gradient-to-br from-blue-900 to-blue-950/70"
    },
]


function TerbaikCarousel() {
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
        <div className="mx-auto w-full">
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {cards.map((e, index) =>
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 grid place-items-center">
                            <div className="w-full h-full rounded-2xl flex flex-col items-center justify-start relative">
                                <div className="bg-white border border-border shadow-md rounded-2xl w-max p-2 z-10">
                                    <e.icon className="w-16 h-16" weight="fill" />
                                </div>
                                <p className="z-10 text-center text-2xl font-bold mt-2 text-white">{e.title}</p>
                                <p className="z-10 text-base py-6 px-8 text-white">{e.description}</p>
                                <div className={cn("rounded-2xl bg-black absolute top-8 bottom-0 left-0 right-0", e.bgStyle)}>
                                </div>
                            </div>
                        </CarouselItem>
                    )}
                    {/* {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <Card className="bg-stone-600 rounded-[3.5rem]">
                                <CardContent className="flex aspect-video items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))} */}
                </CarouselContent>
                <CarouselPrevious className='disabled:opacity-0 transition-all -left-24 max-lg:-left-6' />
                <CarouselNext className='disabled:opacity-0 transition-all -right-24 max-lg:-right-6' />
            </Carousel>
        </div>
    )
}


const TerbaikSection = () => {
    return (
        <section className="min-h-svh bg-white rounded-[3.5rem] p-8 mx-auto flex flex-col items-center justify-center gap-8">
            {/* <h2 className="text-5xl font-black text-center"><span className="bg-blue-300 px-2">T</span><span className="bg-orange-300 px-2">E</span><span className="bg-yellow-300 px-2">R</span><span className="bg-green-300 px-2">B</span><span className="bg-purple-300 px-2">A</span><span className="bg-red-300 px-2">I</span><span className="bg-teal-300 px-2">K</span></h2> */}
            {/* <span className="text-5xl font-black bg-black text-white w-max p-4 text-center mx-auto">@smayossuka</span> */}
            <div className='flex flex-col gap-8 md:border rounded-[3.5rem] w-full h-full justify-center items-center md:py-16 py-8 border border-slate-300'>
                <div className='flex flex-col gap-2 items-center text-center'>
                    <span className="text-2xl font-bold mx-auto uppercase text-zinc-700">Kami percaya, kami</span>
                    <div className='bg-primary-gradient bg-clip-text w-1/2'>
                        <h2 className="text-7xl font-black mx-auto thumbnail mb-4 text-transparent">TERBAIK</h2>
                    </div>
                    <span className="text-lg lg:w-1/2 opacity-75">Bet brainrot rizz sus. Skibidi sigma noob npc vibe. Ratio mid bet lit no cap. Savage touch grass on god sigma mood. Brainrot snack fire slaps periodt.</span>
                </div>
                <div className='max-w-screen-lg w-full flex flex-col gap-4 rounded-2xl p-4 bg-slate-200/70'>
                    <TerbaikCarousel />
                </div>
            </div>
        </section>
    )
}

export default TerbaikSection