'use client'
import dynamic from 'next/dynamic'

import {
    ChatCenteredDots,
    Heart,
    MapPinArea,
    AirplaneTilt
} from '@phosphor-icons/react/dist/ssr';

import { useSession } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import PackDialog from '@/components/custom/dashboard/pack';
import LuggageDialog from '@/components/custom/dashboard/luggage';
import NewbieDialog from '@/components/custom/dashboard/newbie';
const SNSItem = dynamic(() => import('@/components/custom/dashboard/sns'), {ssr: false});

const DashboardFeeds = () => {
    return (
        <div className = "bg-white w-full p-8 rounded-3xl flex flex-col gap-6">
            <h1 className = "text-3xl font-semibold text-qmaroon-500">Travelinspo</h1>

            <SNSItem/>

            <div className = "flex gap-4">
            <a href = "" className = "w-full">
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZS1e0nTDhp3WWnJ8t2BzutaCVko3ulDSJw&s" className = "w-full h-32 rounded-3xl object-cover"/>
            </a>

            <a href = "" className = "w-full">
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZS1e0nTDhp3WWnJ8t2BzutaCVko3ulDSJw&s" className = "w-full h-32 rounded-3xl object-cover"/>
            </a>
            </div>
        </div>
    );
};

const ToolContainer = () => {
    return (
        <div className = "bg-white p-8 rounded-3xl w-full flex flex-col items-start gap-4 h-fit">
            <h1 className = "text-3xl font-semibold text-qmaroon-500">Alat</h1>

            <div className = "grid grid-cols-2 lg:flex gap-4 items-start">
                <PackDialog/>
                
                <NewbieDialog/>

                <LuggageDialog/>
            </div>
        </div>
    )
}

const News = () => {
    return (
        <div className = "bg-white rounded-3xl p-8 flex flex-col gap-6">
            <h1 className = "text-3xl font-semibold text-qmaroon-500">Promo</h1>

            <div className = "w-full flex flex-col rounded-2xl border border-slate-400/50 p-8 gap-8 items-center relative overflow-hidden">
                <div className="text-3xl font-semibold z-10">
                    Ngidam Ramen? Langsung ke Jepang aja!
                </div>

                <div className = "w-full flex flex-col gap-2">
                    <span className = "z-10 opacity-70">Jangan lewatkan kesempatan menikmati Ramen otentik dari Jepang dengan diskon 25% tiket sekarang! </span>

                    <span className = "text-sm opacity-80 mt-4">Berlaku sampai</span>
                    <div className = "">
                        20 Januari 2025
                    </div>
                </div>

                <img src = "https://cdn3d.iconscout.com/3d/premium/thumb/ramen-3d-icon-download-in-png-blend-fbx-gltf-file-formats--noodle-noodles-bowl-restaurant-japanese-pack-culture-religion-festivals-icons-4847159.png" className = "absolute mask-image-t mask-image-start-40 bottom-0 select-none right-0 translate-x-1/4 translate-y-1/4 -scale-x-100 -rotate-12"/>
            </div>

            <div className = "w-full flex flex-col rounded-2xl border border-slate-400/50 p-8 gap-8 items-center relative overflow-hidden">
                <div className="text-3xl font-semibold z-10">
                    Kapan lagi ke Korea berdua?
                </div>

                <div className = "w-full flex flex-col gap-2">
                    <span className = "z-10 opacity-80">Dapatkan promo beli satu gratis satu tiket perjalanan ke Korea! </span>

                    <span className = "text-sm opacity-70 mt-4">Berlaku sampai</span>
                    <div className = "">
                        20 Januari 2025
                    </div>
                </div>

                <img src = "https://cdn3d.iconscout.com/3d/premium/thumb/man-hanbok-3d-icon-download-in-png-blend-fbx-gltf-file-formats--korean-outfit-culture-clothing-cultural-dress-pack-religion-festivals-icons-7781475.png?f=webp" className = "absolute mask-image-t mask-image-start-40 bottom-0 select-none right-0 translate-x-1/4 translate-y-1/4 -scale-x-100 -rotate-12"/>
            </div>
        </div>
    )
}

const DashboardPage = () => {
    const { data } = useSession({
        required: true
    });

    return (
        <div className = "flex flex-col gap-6">
            <div className = "flex flex-col h-64 bg-zinc-900 rounded-3xl relative group overflow-hidden">
                <div className = "absolute w-full h-full top-o left-0 bg-gradient-to-r from-qmaroon-500 to-qmaroon-400 opacity-70 rounded-3xl"></div>
                <img className = "absolute w-full h-full object-cover top-o left-0 rounded-3xl opacity-60 group-hover:opacity-100 scale-100 group-hover:scale-125 transition duration-500" src = "https://cdn.idntimes.com/content-images/post/20221015/marc-kargel-qb3z5bfiagg-unsplash-e5ad7e4fae1ec269f84ada6c1591b4ac.jpg"/>
                <div className = "absolute bottom-8 left-8 flex flex-col text-slate-200 gap-1 opacity-100 group-hover:opacity-0">
                    <h1 className = "text-3xl font-semibold">Hai, {data?.user?.name} 👋</h1>
                    <span className = "text-sm font-medium">Sudah siap untuk nikmati liburan tanpa rasa pusing?</span>
                </div>
                
                <div className = "flex-col absolute bottom-8 right-8 w-fit gap-1 items-end hidden lg:flex">
                    <span className = "text-xs text-slate-100 opacity-80 font-medium group-hover:opacity-100">Gambar sponsor</span>
                    <div className = "bg-slate-100 rounded-full px-4 py-2.5 w-fit text-sm gap-2 items-center group-hover:opacity-100 transition duration-500 opacity-70 font-semibold flex">
                        <MapPinArea size = {16} weight='bold'/>
                        <span>Alpen, Swiss</span>
                    </div>
                </div>
            </div>

            <div className = "lg:grid lg:grid-cols-4 flex flex-col gap-6">
                <div className = "col-span-3">
                    <ToolContainer />
                </div>

                <a className = "lg:h-full lg:col-span-1 group w-full h-64 bg-gradient-to-r from-qmaroon-500 to-qmaroon-400 rounded-3xl p-8 text-slate-100 relative items-start" href = "/dashboard/booking">
                    <h1 className = "text-3xl font-semibold z-10 word-break">Pesan tiket</h1>

                    <div className = "absolute bottom-0 left-0 overflow-hidden w-64 h-64 rounded-bl-3xl">
                        <div className = "w-56 h-28 bg-slate-200 absolute bottom-[8px] -left-8 -rotate-[24deg] rounded-xl group-hover:scale-125 transition duration-250">
                            
                        </div>

                        <div className = "absolute -left-4 bottom-0 w-56 -rotate-12 group-hover:scale-125 transition duration-250">
                            <div className = "relative text-zinc-900 rounded-md flex w-full overflow-hidden">
                                <div className = "absolute w-full h-1/3 bg-white rounded-t-lg"></div>
                                <div className = "absolute w-full h-1/3 bottom-0 bg-white shadow-2xl rounded-b-lg"></div>

                                <svg className="absolute inset-0 w-full h-1/2 top-1/2 -translate-y-1/2">
                                    <defs>
                                    <mask id="ticket-mask">
                                        <rect width="100%" height="100%" fill="white" />

                                        <circle cx="0" cy="50%" r="12" fill="black" />
                                        <circle cx="100%" cy="50%" r="12" fill="black" />
                                    </mask>
                                    </defs>
                                    <rect width="100%" height="100%" fill="white" mask="url(#ticket-mask)" />
                                </svg>

                                <div className="text-center border-r-4 border-dotted p-4 pl-6 z-10 [writing-mode:vertical-lr]">
                                    
                                </div>

                                <div className = "absolute top-1/2 -translate-y-1/2 right-0 opacity-50iya ">
                                    <AirplaneTilt className = "text-qgold-500/70" size = {192}/>
                                </div>

                                <div className = "flex flex-col pl-6 pr-8 py-8 z-10 justify-center opacity-0 select-none">
                                    <span>Lorem ipsum</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className = "grid lg:grid-cols-2 gap-6">
                <div className = "flex flex-col gap-6">
                    <DashboardFeeds/>
                </div>

                <News/>
            </div>
        </div>
    );
};

export default DashboardPage;
