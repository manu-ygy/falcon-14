import { Sparkle } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import React from 'react'
const HeroCatalogItem = () => {
    return <div className="group hover:opacity-20 transition-all bg-black w-full h-full rounded-lg rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden relative ">
        {/* <Image className="absolute top-0 bottom-0 left-0 right-0 object-center w-full h-full object-cover" src="/images/kegiatan/retret-2024.jpeg" alt="Retret 2024" width={500} height={500} /> */}
        {/* <div className='bg-gradient'></div> */}
        <h1 className='absolute bottom-8 left-8 font-medium text-xl'>Lorem Ipsum</h1>
    </div>
}
const Hero = () => {
    return (
        <div className="flex flex-col min-h-svh h-svh text-white pt-28">
            <div className='grid grid-cols-2 w-full h-full max-w-screen-xl gap-4 p-8 pb-16 mx-auto'>
                <div className='ps-16 flex flex-col gap-4'>
                    <h1 className='text-end font-black text-5xl px-4 tracking-wider'>YOSUKA EMAS</h1>
                    <HeroCatalogItem />
                </div>
                <HeroCatalogItem />
                <HeroCatalogItem />
                <div className='pe-16 flex flex-col gap-4'>
                    <HeroCatalogItem />
                    <h1 className='font-medium text-3xl px-4 flex flex-row gap-2 tracking-wider'>BE PRECIOUS FOR ALL <Sparkle className='text-orange-300' weight='fill' /></h1>
                </div>
            </div>

        </div>
    )
}

export default Hero