import { ArrowArcRight, ArrowRight, Sparkle } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
const HeroCatalogItem = () => {
    return <div className="group hover:opacity-20 transition-all bg-black w-full h-full rounded-lg rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden relative ">
        {/* <Image className="absolute top-0 bottom-0 left-0 right-0 object-center w-full h-full object-cover" src="/images/kegiatan/retret-2024.jpeg" alt="Retret 2024" width={500} height={500} /> */}
        {/* <div className='bg-gradient'></div> */}
        <h1 className='absolute bottom-8 left-8 font-medium text-xl'>Kurikulum</h1>
    </div>
}
const Hero = () => {
    return (
        <div className="flex gap-6 min-h-[20rem] md:min-h-svh md:-mt-28 w-full text-white pt-32 md:px-24 overflow-clip">
            <div className="absolute w-full object-cover h-[150svh] min-h-[20rem] md:min-h-svh -top-12 -right-0 bottom-0 blur-sm thumbnail select-none bg-pink-400 -z-10 opacity-40"></div>
            <img src="/images/gedung.jpg" className="absolute w-3/3 object-cover h-[150svh] w-full min-h-[20rem] md:min-h-svh top-0 bottom-0 right-0 left-0 blur-sm thumbnail brightness-50 select-none -z-20"></img>
            <div className='flex flex-col justify-center z-10 md:w-2/3 w-full px-8 gap-8 py-28'>
                <div className='flex flex-col'>
                    <h2 className='text-xl uppercase'>SMA Yos Sudarso Karawang</h2>
                    <h2 className='text-5xl uppercase font-black'>Innovative School</h2>
                </div>
                <p className='text-base max-w-2xl'>SMA Yosuka berkomitmen untuk membentuk Insan Pembelajar yang Cerdas & Berbudi Pekerti dengan pendidikan yang visioner, berlandaskan nilai-nilai Kristiani dan kemanusiaan universal. Kami percaya dalam mengembangkan pribadi yang utuh, yang tidak hanya cerdas secara akademis, tetapi juga berkomitmen untuk memperjuangkan dan menjaga martabat setiap manusia.</p>
                <Button variant={"default"} className='bg-white text-black hover:text-white text-lg p-6 rounded-2xl md:w-max gap-2'>Lanjut <ArrowRight weight='bold' /></Button>
            </div>
            <div className="absolute w-full object-cover h-[150svh] min-h-[20rem] md:min-h-svh -top-12  -right-0 bottom-0 blur-sm thumbnail brightness-50 select-none -z-10  bg-gradient-to-l from-blue-600 via-blue-600 to-transparent opacity-80"></div>
            <div className='flex-1 h-full object-clip mt-28 me-8 max-sm:hidden'>
                <Image src="/images/hero.png" alt="Siswa" className="w-full h-full max-sm:hidden object-contain object-bottom translate-y-1/3 scale-150" width={500} height={500} />
            </div>
        </div>
    )
}

export default Hero