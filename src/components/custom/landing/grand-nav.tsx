import React from 'react';

import Image from 'next/image';

const HeroItem = ({title, image}) => {
    return (
        <>
            <Image className="absolute top-0 bottom-0 left-0 right-0 object-center w-full h-full object-cover" src={image} alt="Retret 2024" width={500} height={500} />
            <div className="w-full h-full bg-zinc-900/50 absolute top-0 left-0"></div>
            <h1 className='absolute bottom-8 left-8 font-medium text-xl z-10 text-slate-100'>{title}</h1>
        </>
    );
};
const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row gap-6 md:min-h-svh md:h-svh w-full md:p-24 p-8 relative bg-zinc-900 text-white -z-30">
            <div className = "w-full h-full absolute top-0 left-0 bg-primary-gradient opacity-50"></div>
            <Image className="opacity-50 blur-sm absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full -z-20" src="/images/gedung.jpg" alt="Gedung SMA Yos Sudarso Karawang" width={1280} height={720} />
            <div className="flex flex-col gap-8 z-50">
                <h2 className="font-black text-5xl px-4 tracking-wider uppercase w-[calc(50vw-14rem)]">Informasi lainnya</h2>
                <div className="group max-md:aspect-video max-md:w-full hover:opacity-20 transition-all bg-white text-black w-full h-full rounded-lg rounded-tl-[3rem] rounded-bl-[3rem] overflow-hidden relative ">
                    <HeroItem title = "Fasilitas sekolah" image = "/images/fasilitas.jpeg"></HeroItem>
                </div>
            </div>

            <div className="group max-md:aspect-video max-md:w-full hover:opacity-20 transition-all bg-white text-black w-full h-full rounded-lg rounded-tl-[3rem] overflow-hidden relative ">
                <HeroItem title = "Kurikulum" image = "/images/kurikulum.jpg"></HeroItem>
            </div>
            
            <div className="flex flex-col w-full gap-6">
                <div className="group max-md:aspect-video max-md:w-full hover:opacity-20 transition-all bg-white text-black w-full h-full rounded-lg rounded-tr-[3rem] overflow-hidden relative ">
                    <HeroItem title = "Program & kegiatan" image = "/images/kegiatan/retret-2024.jpeg"></HeroItem>
                </div>

                <div className="group max-md:aspect-video max-md:w-full hover:opacity-20 transition-all bg-white text-black w-full h-full rounded-lg rounded-br-[3rem] overflow-hidden relative ">
                    <HeroItem title = "PPDB" image = "/images/poster-ppdb.jpeg"></HeroItem>
                </div>
            </div>

        </section>
    );
};

export default Hero;