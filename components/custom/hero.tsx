import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const HeroCatalogItem = () => {
    return (
        <div className="group hover:opacity-20 transition-all bg-black w-full h-full rounded-lg rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden relative">
            {/* <Image className="absolute top-0 bottom-0 left-0 right-0 object-center w-full h-full object-cover" src="/images/kegiatan/retret-2024.jpeg" alt="Retret 2024" width={500} height={500} /> */}
            {/* <div className='bg-gradient'></div> */}
            <h1 className='absolute bottom-8 left-8 font-medium text-xl'>Kurikulum</h1>
        </div>
    )
}

const Hero = () => {
    return (
        <div className="relative flex gap-6 h-screen w-full text-white pt-32 md:px-8 overflow-hidden bg-slate-900">
            {/* Gradient and background */}
            {/*
                       <div className="absolute w-full h-[150svh] min-h-[20rem] -right-0 bottom-0 -z-20 bg-slate-900"></div>
            */}
            <img src="/images/gedung.jpg" className="absolute h-[calc(100%+8px)] w-2/3 min-h-[20rem] -top-[4px] -left-[4px] blur-sm opacity-50 select-none mask-image-r" alt="Background"/>
            <div className="absolute h-screen w-screen min-w-[1000px] top-0 left-0 bg-primary-gradient opacity-50"></div>


            {/* Title and cover */}
            <div className='flex flex-col justify-center z-10 md:w-2/3 w-full px-8 gap-2 py-28'>
                <div className='flex flex-col'>
                    <h2 className='text-xl uppercase'>SMA Yos Sudarso Karawang</h2>
                    <h2 className='text-5xl uppercase font-black'>Innovative School</h2>
                </div>
                <p className='text-lg max-w-2xl mb-6 opacity-70'>
                    SMA Yosuka berkomitmen untuk membentuk Insan Pembelajar yang Cerdas & Berbudi Pekerti dengan pendidikan yang visioner, berlandaskan nilai-nilai Kristiani dan kemanusiaan universal. Kami percaya dalam mengembangkan pribadi yang utuh, yang tidak hanya cerdas secara akademis, tetapi juga berkomitmen untuk memperjuangkan dan menjaga martabat setiap manusia.
                </p>
                <Button variant={"default"} className='bg-white text-black hover:text-white text-lg p-6 rounded-2xl md:w-max gap-2'>
                    Lanjut <ArrowRight weight='bold' />
                </Button>
            </div>

            {/* Additional hero image */}
            <div className='flex-1 h-full mt-28 me-8 max-md:hidden'>
                <Image src="/images/hero.png" alt="Siswa" className="w-full h-full object-contain object-bottom lg:translate-y-1/4 scale-150" width={500} height={500} />
            </div>
        </div>
    )
}

export default Hero
