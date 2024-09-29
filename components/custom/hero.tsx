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
        <div className="flex gap-6 min-h-svh h-svh w-full text-white pt-32  px-24">
            <img src="/images/gedung.jpg" className="absolute w-2/3 object-cover h-[150svh] min-h-svh -top-7 -left-7 opacity-80 blur-sm thumbnail brightness-50 select-none -z-10"></img>
            <div className='flex flex-col gap-2 justify-center z-10 w-2/3 px-12'>
                <h2 className='text-2xl'>SMA Yos Sudarso Karawang</h2>
                <h2 className='text-6xl uppercase font-black'>Innovative School</h2>
                <h2 className='text-base'>SMA Yosuka berkomitmen untuk membentuk Insan Pembelajar yang Cerdas & Berbudi Pekerti dengan pendidikan yang visioner, berlandaskan nilai-nilai Kristiani dan kemanusiaan universal. Kami percaya dalam mengembangkan pribadi yang utuh, yang tidak hanya cerdas secara akademis, tetapi juga berkomitmen untuk memperjuangkan dan menjaga martabat setiap manusia.</h2>
            </div>
            
            <Image src="/images/hero.png" alt="Siswa" className="w-1/3 h-full max-sm:hidden object-cover object-top" width={500} height={500} />
        </div>
    )
}

export default Hero