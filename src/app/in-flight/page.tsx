'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Airplane,
    CalendarBlank,
    Clock,
    ListChecks,
    ThermometerSimple,
} from '@phosphor-icons/react/dist/ssr';

import { Plane, TrendingUp, TrendingUpIcon } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Profile from '@/components/custom/dashboard/profile'
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

const DashboardHero = () => {
    return (
        <div className = "w-full p-16 bg-primary-gradient rounded-3xl text-slate-100">
   
        </div>
    );
};

const DashboardFeeds = () => {
    return (
        <Card className="rounded-3xl">
            <CardHeader className="flex flex-row space-x-4 items-center border-b">
                <ListChecks
                    className="w-10 h-10 p-2 bg-indigo-500 text-slate-100 rounded-full"
                    size={24}
                    weight="bold"
                />
                <div className="flex flex-col space-y-1.5">
                    <CardTitle>Yang baru dari kami</CardTitle>
                    <CardDescription>Cek konten keren dari kami!</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="space-y-4 p-4 flex gap-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/PM6-RdLRAN0?si=9l_OOvgZw4EINjj2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className = "rounded-2xl"></iframe>
            </CardContent>
        </Card>
    );
};

const PlaneOverlay = () => {
            {/**
                    <div className = "absolute z-50 top-0 left-0 w-full h-full">
            <motion.div className = "absolute left-1/2 bottom-0" animate={{ y: '-100vw' }} transition={{ duration: 1, ease: 'linear' }}>
                <Airplane className = "text-qmaroon-500 bottom-0 translate-y-full left-1/2 -translate-x-1/2 z-[60]" size={256} weight = {'fill'}/>
            </motion.div>

            <motion.div className = "absolute w-full h-full bottom-0 left-0" animate={{ y: '-100vw' }} transition={{ duration: 1, ease: 'linear' }}>
                <div className = "bg-white w-full h-full left-0 bottom-0">

                </div>
            </motion.div>
        </div>
            **/}
}

const StepItem = () => {
    return (
        <div className = "flex items-center gap-3 z-10">
            <h1 className = "w-10 h-10 rounded-full flex items-center justify-center bg-qmaroon-500 text-slate-100 font-bold">
                1
            </h1>

            <div className = "flex flex-col">
                <h2 className = "font-semibold">Datang ke bandara</h2>
                <span className = "opacity-70 text-sm">09.24</span>
            </div>
        </div>
    )
}

const Steps = () => {
    return (
        <div className = "flex relative flex-col gap-2 p-4 m-4 rounded-3xl w-full border border-slate-400/50">
            <div className = "absolute w-1 h-[calc(100%-3rem)] bg-qmaroon-500 top-1/2 -translate-y-1/2 left-[34px] z-[5]"></div>

            <StepItem/>
        </div>
    )
}

const Notch = () => {
    return (
        <div className = "w-full col-span-3 mt-4 flex justify-center">
            <div className = "bg-white w-full flex flex-col items-center justify-center -gap-2 rounded-full px-6 py-1 bg-white">
                <span className = "text-xs whitespace-nowrap opacity-70">Estimasi sampai</span>
                <h1 className = "text-3xl font-bold">06.20</h1>
            </div>
        </div>
    )
}

const InFlightPage = () => {
    return (
        <div className = "w-full h-full relative p-4 flex flex-col gap-4">
            <div className = "w-full bg-slate-100 p-4 rounded-3xl flex text-xs gap-2 opacity-80">
                <div className = "w-full flex items-center justify-center gap-2 border-r border-slate-400/50">
                    <span>25 Jan</span>
                </div>

                <div className = "w-full flex border-r border-slate-400/50 justify-center items-center gap-2">
                    <span>14:50</span>
                </div>

                <div className = "w-full flex justify-center items-center gap-2">
                    <span>26° C</span>
                </div>
            </div>

            <div className = "w-full h-full bg-white relative rounded-3xl">
                <div className = "w-full h-full rounded-3xl bg-gradient-to-b from-qgold-600 to-qgold-300">
                    <img src = "https://png.pngtree.com/png-vector/20221223/ourmid/pngtree-top-view-white-airplane-with-four-engines-png-image_6531214.png" className = "p-4 plane drop-shadow-xl select-none absolute top-1/2 z-10"/>
                    
                    <div className = "w-full h-full relative overflow-hidden select-none">
                        <img src = "/cloud/1.png" className = "absolute right-0 translate-x-1/2 -translate-y-full cloud z-20"/>
                        <img src = "/cloud/2.png" className = "absolute left-0 top-1/2 -translate-x-1/2 -translate-y-full cloud-2"/>
                        <img src = "/cloud/4.png" className = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full cloud"/>
                    </div>

                    <div className = "z-20 absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-white shadow-lg text-xs font-medium text-center p-4">
                        Jakarta (CGY) Tokyo (NRT)
                    </div>

                    <div className = "absolute left-1/2 bottom-4 shadow-lg -translate-x-1/2 rounded-3xl px-6 py-4 flex flex-col bg-white w-3/4 gap-1 items-center z-20">
                        <span className = "text-sm opacity-70">Estimasi sampai</span>

                        <div className = "flex items-center gap-1">
                            <h2 className = "text-3xl font-semibold text-qmaroon-500">2</h2>
                            <span className = "mr-2 text-sm opacity-70">j</span>

                            <h2 className = "text-3xl font-semibold text-qmaroon-500">30</h2>
                            <span className = "text-sm opacity-70">m</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "grid grid-cols-4 justify-center gap-4">
                <a href = "/in-flight/game">
                    <Button className = "flex flex-col p-0 gap-2" variant={'ghost'}>
                        <img className = "min-w-16 h-16 p-2 rounded-3xl bg-gradient-to-b from-violet-400 to-violet-300" src = "https://static.vecteezy.com/system/resources/thumbnails/045/686/337/small/console-game-controller-3d-item-free-png.png"/>
                        <span className = "text-xs">Permainan</span>
                    </Button>
                </a>

                <a href = "/in-flight/chat">
                    <Button className = "flex flex-col p-0 gap-2" variant={'ghost'}>
                        <img className = "min-w-16 h-16 p-2 rounded-3xl bg-gradient-to-b from-yellow-500 to-yellow-300" src = "https://cdn3d.iconscout.com/3d/free/thumb/free-chat-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--message-communication-chatting-conversation-messaging-user-interface-pack-illustrations-4715767.png"/>
                        <span className = "text-xs">Obrolan</span>
                    </Button>
                </a>

                <Button className = "w-full col-span-2 flex flex-col p-0 gap-2" variant={'ghost'}>
                    <a className = "w-full h-full rounded-3xl bg-gradient-to-b from-pink-500 to-pink-300 relative" href = "/in-flight/explore">
                        <div className = "absolute w-full h-32 bottom-0 overflow-hidden rounded-3xl">
                            <img src = "https://cdn3d.iconscout.com/3d/premium/thumb/torii-gate-3d-icon-download-in-png-blend-fbx-gltf-file-formats--bonzai-japan-asian-pack-holidays-icons-8878357.png&s" className = "-bottom-5 absolute left-1/2 -translate-x-1/2 w-[105px]"/>
                            <img src = "/images/daruma.png" className = "absolute z-10 w-[80px] -bottom-4 right-2 -scale-x-100"/>
                            <img src = "https://cdn3d.iconscout.com/3d/premium/thumb/sushi-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--roll-japanese-food-pack-drink-illustrations-3895631.png?f=webp" className = "absolute -bottom-6 w-[70px] left-2 -scale-x-100"></img>
                        </div>
                    </a>
                    <span className = "text-xs">Kenali Jepang!</span>
                </Button>
            </div>

            <style jsx>{`
                .cloud {
                    position: absolute;
                    top: 0;
                    animation: moveClouds 5s linear infinite;
                }

                .cloud-2 {
                    position: absolute;
                    top: 0;
                    animation: moveClouds 7s linear infinite;
                }

                .plane {
                    animation: movePlane 5s linear infinite alternate;
                }

                @keyframes moveClouds {
                    0% {
                        top: 0;
                    }
                    100% {
                        top: 150%;
                    }
                }

                @keyframes movePlane {
                    0% {
                        transform: scale(1.05) translateY(-50%);
                    }
                    100% {
                        transform: scale(0.95) translateY(-50%);
                    }
                }
            `}</style>
        </div>
    );
};

export default InFlightPage;
