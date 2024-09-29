import { Sparkle } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import React from 'react'
const HeroCatalogItem = () => {
    return <div className="group hover:opacity-20 transition-all bg-black w-full h-full rounded-lg rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden relative ">
        {/* <Image className="absolute top-0 bottom-0 left-0 right-0 object-center w-full h-full object-cover" src="/images/kegiatan/retret-2024.jpeg" alt="Retret 2024" width={500} height={500} /> */}
        {/* <div className='bg-gradient'></div> */}
        <h1 className='absolute bottom-8 left-8 font-medium text-xl'>Kurikulum</h1>
    </div>
}
const Hero = () => {
    return (
        <div className="flex gap-6 min-h-svh h-svh w-full text-white p-24">
            <div className="flex flex-col gap-8">
                <h1 className="font-black text-4xl px-4 tracking-wider uppercase w-[calc(50vw-14rem)]">Tentang Kami</h1>
                <HeroCatalogItem/>
            </div>
            
            <HeroCatalogItem/>

            <div className = "flex flex-col w-full gap-6">
                <HeroCatalogItem/>
                <HeroCatalogItem/>
            </div>
    
            {/*
            <div className='grid grid-cols-2 w-full h-full max-w-screen-xl gap-4 p-8 pb-16 mx-auto'>
                <div className='ps-16 flex flex-col gap-4'>
                    <h1 className='text-end font-black text-5xl px-4 tracking-wider uppercase'>Tentang Kami</h1>
                    <HeroCatalogItem content="Kurikulum" />
                </div>
                <HeroCatalogItem />
                <HeroCatalogItem />
                <HeroCatalogItem />
            </div>
            */}
        </div>
    )
}

export default Hero