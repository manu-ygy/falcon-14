import React from 'react';
import {
  ChatCenteredDots,
  Heart,
  Clock,
  Flag,
  Ruler,
  Download,
  Share
} from '@phosphor-icons/react/dist/ssr';;

import dynamic from 'next/dynamic';
import { MapPin, PlaneLanding } from 'lucide-react';

// Import komponen secara dinamis agar mendukung server-side rendering
const WorldMap = dynamic(() => import('@/components/custom/dashboard/map'), { ssr: false });

const ExplorationMap = () => {
  return (
    <div className = "w-full bg-white p-8 rounded-3xl flex">
      <div className = "flex flex-col gap-6 w-1/2">
          <div className = "w-full h-full p-8 border rounded-3xl border-slate-400/50 flex flex-col gap-6">
              <div className = "flex flex-col mb-4 gap-2">
                  <h1 className = "font-semibold text-3xl text-qmaroon-500">Statistik Perjalanan</h1>
                  <span className = "opacity-70 text-sm">Dihitung sejak 11 Januari 2024</span>
              </div>

              <div className = "flex items-center gap-4 text-lg">
                  <Clock className='opacity-70' size = {40}/>
                  <span className='opacity-70'>Time spent</span>
                  <span className = "font-semibold ml-auto">40 hours</span>
              </div>

              <div className = "flex items-center gap-4 text-lg">
                  <PlaneLanding className='opacity-70' size = {40}/>
                  <span className='opacity-70'>Trip done</span>
                  <span className = "font-semibold ml-auto">12</span>
              </div>

              <div className = "flex items-center gap-4 text-lg">
                  <Flag className='opacity-70' size = {40}/>
                  <span className='opacity-70'>Country visited</span>
                  <span className = "font-semibold ml-auto">8</span>
              </div>

              <div className = "flex items-center gap-4 text-lg">
                  <Ruler className='opacity-70' size = {40}/>
                  <span className='opacity-70'>Jarak ditempuh</span>
                  <span className = "font-bold ml-auto">50800 km</span>
              </div>

              <span className='mt-auto bg-qmaroon-500 text-slate-100 rounded-2xl p-4 font-medium text-sm'>Trivia: Time that you done for travels can be used for cooking 25 full-set dinner!</span>
          </div>
      </div>

      <div className = "flex flex-col w-1/2 items-center justify-center">
          <h1 className = "text-3xl font-semibold text-center text-qmaroon-500">Peta Eksplorasi</h1>

          <div className = "relative w-full h-full">
              <WorldMap/>

              <div className = "absolute bg-qmaroon-500 px-6 py-4 bottom-0 right-0 rounded-full flex text-slate-100 gap-4">
                  <Download size = {24}/>
                  <Share size = {24}/>
              </div>
          </div>
      </div>
  </div>
  )
}

const ProfilePage = () => {
    return (
      <div className='w-full h-full bg-white rounded-t-3xl'>
        <ExplorationMap/>
      </div>
    );
};

export default ProfilePage;
