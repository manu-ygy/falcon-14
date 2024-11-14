import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
    return (
        <div className="relative shadow-lg flex gap-6 lg:h-[calc(100vh-3rem)] max-md:min-h-screen w-[calc(100%-3rem)] text-white md:px-8 overflow-hidden bg-slate-900 rounded-[3rem] ml-6 my-6">
            {/* Gradient and background */}
            {/*
                       <div className="absolute w-full h-[150svh] min-h-[20rem] -right-0 bottom-0 -z-20 bg-slate-900"></div>
            */}
            <img src="https://indoaviation.asia/wp-content/uploads/2023/07/QR.jpg" className="absolute h-[calc(100%+8px)] w-2/3 min-h-[20rem] -top-[4px] -left-[4px] blur-sm opacity-50 select-none mask-image-start-50 mask-image-r object-cover" alt="Background"/>
            <div className="absolute min-h-full w-screen min-w-[1000px] top-0 left-0 bg-gradient-to-r from-qmaroon-500 to-qmaroon-400 opacity-50"></div>

            <div className='flex flex-col justify-center z-10 md:w-2/3 w-full px-8 gap-2'>
                <div className='flex flex-col gap-2'>
                    <div className = "flex flex-wrap items-center flex gap-2 bg-white text-qmaroon-500 w-fit px-4 py-2 rounded-3xl mb-4">
                        <img src = "/images/icon.png" className = "h-16"/>
                        <h2 className='text-2xl font-semibold'>Airstra</h2>
                        <span className = "text-sm">dari</span>
                        <img className = "h-12" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Qatar_Airways_logo.svg/2560px-Qatar_Airways_logo.svg.png"/>
                    </div>

                    <h2 className='text-5xl font-semibold'>Dari terbang sampai mendarat.</h2>
                </div>
                <p className='text-lg max-w-2xl mb-6 opacity-70'>
                Airstra siap membantumu mewujudkan perjalanan bebas pusing dengan berbagai fitur dan alat-alat keren.
                </p>

                <a href = "/dashboard">
                    <Button className = "text-lg px-8">
                        Mulai
                    </Button>
                </a>
            </div>

            {/* Additional hero image */}
            <div className='flex-1 h-full relative'>
                <img src="https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-airline-stewardess-with-uniform-png-image_11624014.png" alt="Siswa" className="w-full h-full object-contain object-bottom z-10 absolute" width={250} height={250} />
            </div>
        </div>
    );
};

export default Hero;