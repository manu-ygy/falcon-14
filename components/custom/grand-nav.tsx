import { Sparkle } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import React from 'react'
const HeroCatalogItem = () => {
    return <div className="group max-md:aspect-video max-md:w-full hover:opacity-20 transition-all bg-white text-black w-full h-full rounded-lg rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden relative ">
        {/* <Image className="absolute top-0 bottom-0 left-0 right-0 object-center w-full h-full object-cover" src="/images/kegiatan/retret-2024.jpeg" alt="Retret 2024" width={500} height={500} /> */}
        {/* <div className='bg-gradient'></div> */}
        <h1 className='absolute bottom-8 left-8 font-medium text-xl'>Kurikulum</h1>
    </div>
}
const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-svh md:h-svh w-full md:p-24 p-8 relative bg-blue-950 text-white">
            <Image className="opacity-20 absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full" src="/images/gedung.jpg" alt="Gedung SMA Yos Sudarso Karawang" width={1280} height={720} />
            <div className="flex flex-col gap-8">
                <h1 className="font-black text-4xl px-4 tracking-wider uppercase w-[calc(50vw-14rem)]">Tentang Kami</h1>
                <HeroCatalogItem />
            </div>
            <HeroCatalogItem />
            <div className="flex flex-col w-full gap-6">
                <HeroCatalogItem />
                <HeroCatalogItem />
            </div>

        </div>
    )
}

export default Hero