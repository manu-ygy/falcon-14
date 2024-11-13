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
            <img src="https://indoaviation.asia/wp-content/uploads/2023/07/QR.jpg" className="absolute h-[calc(100%+8px)] w-2/3 min-h-[20rem] -top-[4px] -left-[4px] blur-sm opacity-50 select-none mask-image-start-50 mask-image-r" alt="Background"/>
            <div className="absolute min-h-full w-screen min-w-[1000px] top-0 left-0 bg-primary-gradient opacity-50"></div>


            <div className='flex flex-col justify-center z-10 md:w-2/3 w-full px-8 gap-2'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl uppercase'>Airstra</h2>

                    <h2 className='text-6xl font-semibold'>From Takeoff to Touchdown</h2>
                </div>
                <p className='text-lg max-w-2xl mb-6 opacity-70'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. reprehenderit magni molestiae voluptas labore ab. Eius ratione unde doloremque rerum.
                </p>
                <Button variant={'default'} className='text-lg md:w-max gap-2'>
                    Lanjut <ArrowRight weight='bold' />
                </Button>
            </div>

            {/* Additional hero image */}
            <div className='flex-1 h-full relative'>
                <img src="https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-airline-stewardess-with-uniform-png-image_11624014.png" alt="Siswa" className="w-full h-full object-contain object-bottom z-10 absolute" width={250} height={250} />
            </div>
        </div>
    );
};

export default Hero;