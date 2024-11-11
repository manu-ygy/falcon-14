'use client'

import {
    ChatCenteredDots,
    Clock,
    Download,
    Flag,
    Heart,
    ListChecks,
    Ruler,
    Share,
    Speedometer,
} from '@phosphor-icons/react/dist/ssr';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Profile from '@/components/custom/dashboard/profile'

import { Button } from '@/components/ui/button';

import dynamic from 'next/dynamic';
import { PlaneLanding } from 'lucide-react';

// Import komponen secara dinamis agar mendukung server-side rendering
const WorldMap = dynamic(() => import('@/components/custom/dashboard/map'), { ssr: false });

const DashboardFeeds = () => {
    return (
        <div className = "bg-white w-full p-8 rounded-3xl flex flex-col gap-6">
            <h1 className = "text-3xl font-semibold">Travelinspo</h1>

            <div className = "flex flex-col rounded-3xl relative gap-4">
                <div className = "flex gap-4 items-center ml-4">
                    <img className = "w-16 h-16 rounded-full border border-slate-400/50" src = "https://i.pinimg.com/474x/68/b1/35/68b13553903740a875342bfa4518b228.jpg"></img>

                    <div className = "z-20 flex flex-col -gap-1">
                        <span className = "font-semibold">Lindawati Suparman</span>
                        <span className = "text-sm opacity-70">at Labuan Bajo, Manggarai</span>
                    </div>
                </div>

                <img className = "rounded-3xl z-10" src = "https://linebank.co.id/blog/wp-content/uploads/2022/12/5_shutterstock_1041475570-1-jpg-webp.webp"></img>

                <div className = "z-20 px-4 py-2.5 flex gap-2.5 items-center">
                    <ChatCenteredDots size={24}/>
                    <span className='font-medium mr-4'>50</span>

                    <Heart size={24}/>
                    <span className='font-medium'>1.2k</span>

                    <div className = "flex ml-auto gap-2">
                        <button className = "w-4 h-4 rounded-full border border-slate-400/50"></button>
                        <button className = "w-4 h-4 rounded-full border bg-qmaroon-500"></button>
                        <button className = "w-4 h-4 rounded-full border border-slate-400/50"></button>
                        <button className = "w-4 h-4 rounded-full border border-slate-400/50"></button>
                        <button className = "w-4 h-4 rounded-full border border-slate-400/50"></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ToolContainer = () => {
    return (
        <div className = "bg-white p-8 rounded-3xl w-full flex flex-col items-start gap-4 h-fit">
            <h1 className = "text-3xl font-semibold">Tools</h1>

            <div className = "grid grid-cols-2 md:grid-cols-4 gap-2">
                <Button className = "flex flex-col p-0 gap-2" variant={'ghost'}>
                    <img className = "w-24 h-24 rounded-3xl bg-gradient-to-b from-violet-300 to-violet-400" src = "https://cdn3d.iconscout.com/3d/premium/thumb/open-luggage-3d-icon-download-in-png-blend-fbx-gltf-file-formats--hello-logo-bag-suitcase-halloween-travel-element-pack-icons-8904803.png?f=webp"/>
                    <span>PackAI</span>
                </Button>

                <Button className = "flex flex-col p-0 gap-2" variant={'ghost'}>
                    <img className = "w-24 h-24 p-2 rounded-3xl bg-gradient-to-b from-lime-300 to-lime-400" src = "https://cdn3d.iconscout.com/3d/premium/thumb/travel-guide-book-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--instruction-tourist-adventure-pack-holidays-illustrations-3626605.png?f=webp"/>
                    <span>Newbie guide</span>
                </Button>

                <Button className = "flex flex-col p-0 gap-2" variant={'ghost'}>
                <img className = "w-24 h-24 rounded-3xl" src = "https://media.istockphoto.com/id/1451724167/vector/3d-vector-yellow-suitcase-summer-holiday-time-to-travel-concept.jpg?s=612x612&w=0&k=20&c=D-8GdSmOA7M2Mf511MVA-TDnrUjXCEeHws0zn93kFkU="/>
                    <span>Luggage Tracker</span>
                </Button>
            </div>
        </div>
    )
}

const News = () => {
    return (
        <div className = "bg-white rounded-3xl p-8 flex flex-col gap-6">
            <h1 className = "text-3xl font-semibold">Promo</h1>

            <div className = "relative text-slate-100 rounded-md flex w-full h-64">
                <div className = "absolute w-full h-1/3 bg-qmaroon-500 rounded-t-lg"></div>
                <div className = "absolute w-full h-1/3 bottom-0 bg-qmaroon-500 rounded-b-lg"></div>

                <svg className="absolute inset-0 w-full h-1/2 top-1/2 -translate-y-1/2">
                    <defs>
                    <mask id="ticket-mask">
                        <rect width="100%" height="100%" fill="white" />

                        <circle cx="0" cy="50%" r="12" fill="black" />
                        <circle cx="100%" cy="50%" r="12" fill="black" />
                    </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="#9e1b32" mask="url(#ticket-mask)" />
                </svg>

                <div className="p-6 pl-12 z-10 w-2/3 flex flex-col justify-center gap-2">
                    <h2 className = "text-lg font-semibold">Beli tiket gratis Devin</h2>
                    <span className = "text-sm opacity-70">Kapan lagi beli tiket pesawat dapat bonus Devin?!?!?!??!?!</span>
                
                    <span>Kadaluarsa dalam</span>
                    <div className = "bg-white px-4 py-2.5 w-fit rounded-2xl">
                        <h1 className = "text-zinc-900 text-lg font-bold">08:00</h1>
                    </div>
                </div>

                <div className = "relative overflow-hidden w-1/3 rounded-lg pr-8">
                    <img src = "devin.jpeg" className = "w-full" style={{clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);'}}></img>
                </div>
            </div>
        </div>
    )
}

const DashboardPage = () => {
    return (
        <div className = "flex flex-col gap-6">

            <div className = "w-full bg-white p-8 rounded-3xl flex">
                <div className = "flex flex-col gap-6 w-1/2">
                    <Profile></Profile>
                
                    <div className = "w-full h-full p-8 border rounded-3xl border-slate-400/50 flex flex-col gap-6">
                        <div className = "flex flex-col mb-4 gap-2">
                            <h1 className = "font-semibold text-3xl text-qmaroon-500">Travel Statistics</h1>
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

                        <span className='mt-auto bg-qmaroon-500 text-slate-100 rounded-2xl p-4 font-medium text-sm'>Quick trivia: Time that you done for travels can be used for cooking 25 full-set dinner!</span>
                    </div>
                </div>

                <div className = "flex flex-col w-1/2 items-center justify-center">
                    <h1 className = "text-3xl font-semibold text-center text-qmaroon-500">Expoloration Map</h1>

                    <div className = "relative w-full h-full">
                        <WorldMap/>

                        <div className = "absolute bg-qmaroon-500 px-6 py-4 bottom-0 right-0 rounded-full flex text-slate-100 gap-4">
                            <Download size = {24}/>
                            <Share size = {24}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "grid lg:grid-cols-2 gap-6">
                <div className = "flex flex-col gap-6">
                    <ToolContainer/>
                </div>

                <div className = "flex flex-col gap-6">
                    <DashboardFeeds/>

                    <News/>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
