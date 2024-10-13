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
        <section className="flex flex-col md:flex-row gap-6 md:min-h-svh md:h-svh w-full md:p-24 p-8 relative bg-zinc-900 text-white -z-30">
            <div className = "w-full h-full absolute top-0 left-0 bg-primary-gradient opacity-50"></div>
            <Image className="opacity-50 blur-sm absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full -z-20" src="/images/gedung.jpg" alt="Gedung SMA Yos Sudarso Karawang" width={1280} height={720} />
            <div className="flex flex-col gap-8 z-50">
                <h1 className="font-black text-4xl px-4 tracking-wider uppercase w-[calc(50vw-14rem)]">Informasi lainnya</h1>
                <div className="group max-md:aspect-video max-md:w-full hover:opacity-20 transition-all bg-white text-black w-full h-full rounded-lg rounded-tl-[3rem] rounded-bl-[3rem] overflow-hidden relative ">
                    {/* <Image className="absolute top-0 bottom-0 left-0 right-0 object-center w-full h-full object-cover" src="/images/kegiatan/retret-2024.jpeg" alt="Retret 2024" width={500} height={500} /> */}
                    {/* <div className='bg-gradient'></div> */}
                    <h1 className='absolute bottom-8 left-8 font-medium text-xl'>Kurikulum</h1>
                </div>
            </div>

            <div className="group max-md:aspect-video max-md:w-full hover:opacity-20 transition-all bg-white text-black w-full h-full rounded-lg rounded-tl-[3rem] overflow-hidden relative ">
                {/* <Image className="absolute top-0 bottom-0 left-0 right-0 object-center w-full h-full object-cover" src="/images/kegiatan/retret-2024.jpeg" alt="Retret 2024" width={500} height={500} /> */}
                {/* <div className='bg-gradient'></div> */}
                <h1 className='absolute bottom-8 left-8 font-medium text-xl'>Kurikulum</h1>
            </div>
            
            <div className="flex flex-col w-full gap-6">
                <div className="group max-md:aspect-video max-md:w-full hover:opacity-20 transition-all bg-white text-black w-full h-full rounded-lg rounded-tr-[3rem] overflow-hidden relative ">
                    {/* <Image className="absolute top-0 bottom-0 left-0 right-0 object-center w-full h-full object-cover" src="/images/kegiatan/retret-2024.jpeg" alt="Retret 2024" width={500} height={500} /> */}
                    {/* <div className='bg-gradient'></div> */}
                    <h1 className='absolute bottom-8 left-8 font-medium text-xl'>Kurikulum</h1>
                </div>

                <div className="group max-md:aspect-video max-md:w-full hover:opacity-20 transition-all bg-white text-black w-full h-full rounded-lg rounded-br-[3rem] overflow-hidden relative ">
                    {/* <Image className="absolute top-0 bottom-0 left-0 right-0 object-center w-full h-full object-cover" src="/images/kegiatan/retret-2024.jpeg" alt="Retret 2024" width={500} height={500} /> */}
                    {/* <div className='bg-gradient'></div> */}
                    <h1 className='absolute bottom-8 left-8 font-medium text-xl'>Kurikulum</h1>
                </div>
            </div>

        </section>
    )
}

export default Hero