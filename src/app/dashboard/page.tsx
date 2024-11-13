'use client'

import {
    ChatCenteredDots,
    Heart,
    MapPinArea,
    AirplaneTilt
} from '@phosphor-icons/react/dist/ssr';

import { Button } from '@/components/ui/button';
import PackDialog from '@/components/custom/dashboard/pack';

const DashboardFeeds = () => {
    return (
        <div className = "bg-white w-full p-8 rounded-3xl flex flex-col gap-6">
            <h1 className = "text-3xl font-semibold text-qmaroon-500">Travelinspo</h1>

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
            <h1 className = "text-3xl font-semibold text-qmaroon-500">Alat</h1>

            <div className = "flex gap-4 items-start">
                <PackDialog/>
                
                <Button className = "flex flex-col p-0 gap-2" variant={'ghost'}>
                    <img className = "min-w-24 h-24 p-2 rounded-3xl bg-gradient-to-b from-lime-300 to-lime-400" src = "https://cdn3d.iconscout.com/3d/premium/thumb/travel-guide-book-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--instruction-tourist-adventure-pack-holidays-illustrations-3626605.png?f=webp"/>
                    <span className = "max-w-20">Newbie <br/>guide</span>
                </Button>

                <Button className = "flex flex-col p-0 gap-2" variant={'ghost'}>
                <img className = "min-w-24 h-24 rounded-3xl" src = "https://media.istockphoto.com/id/1451724167/vector/3d-vector-yellow-suitcase-summer-holiday-time-to-travel-concept.jpg?s=612x612&w=0&k=20&c=D-8GdSmOA7M2Mf511MVA-TDnrUjXCEeHws0zn93kFkU="/>
                    <span>Luggage <br/>Tracker</span>
                </Button>

                <div className = "w-full"></div>
            </div>
        </div>
    )
}

const News = () => {
    return (
        <div className = "bg-white rounded-3xl p-8 flex flex-col gap-6">
            <h1 className = "text-3xl font-semibold text-qmaroon-500">Promo</h1>

            <div className = "w-full flex flex-col rounded-2xl border border-slate-400/50 p-8 gap-8 items-center">
                <div className="text-3xl font-black">
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-qmaroon-600 to-qmaroon-400 uppercase word-break">
                        Beli 1 Gratis 1
                    </span>
                </div>

                <div className = "w-full flex flex-col gap-2">
                    <span>Dapatkan promo menarik </span>

                    <div className = "border border-slate-400/50 p-2 rounded-3xl">
                        <span className = "text-sm opacity-70">Kadaluarsa dalam</span>
                        <div className = "font-mono text-2xl">
                            20:00:00
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const DashboardPage = () => {
    return (
        <div className = "flex flex-col gap-6">
            <div className = "flex flex-col h-64 bg-zinc-900 rounded-3xl relative group overflow-hidden">
                <div className = "absolute w-full h-full top-o left-0 bg-gradient-to-r from-qmaroon-500 to-qmaroon-400 opacity-70 rounded-3xl"></div>
                <img className = "absolute w-full h-full object-cover top-o left-0 rounded-3xl opacity-60 group-hover:opacity-100 scale-100 group-hover:scale-125 transition duration-500" src = "https://deih43ym53wif.cloudfront.net/Bora-Bora-French-Polynesia-shutterstock_1400768336.jpg_3eb9ccf93e.jpg"/>
                <div className = "absolute bottom-8 left-8 flex flex-col text-slate-200 gap-1 opacity-100 group-hover:opacity-0">
                    <h1 className = "text-3xl font-semibold">Hai, Manu! 👋</h1>
                    <span className = "text-sm opacity-70 font-medium">Lorem ipsum dolor sit, re dolores unde quas quia distinctio?</span>
                </div>
                
                <div className = "flex flex-col absolute bottom-8 right-8 w-fit gap-1 items-end">
                    <span className = "text-xs text-slate-100 opacity-80 font-medium group-hover:opacity-100">Gambar sponsor</span>
                    <div className = "bg-slate-100 rounded-full px-4 py-2.5 w-fit text-sm gap-2 items-center group-hover:opacity-100 transition duration-500 opacity-70 font-semibold flex">
                        <MapPinArea size = {16} weight='bold'/>
                        <span>Florida, US</span>
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
