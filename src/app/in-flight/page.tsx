'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Airplane,
    ListChecks,
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
        <div className = "absolute w-1/2 mt-4 flex justify-center left-1/2 -translate-x-1/2">
            <div className = "bg-white w-full flex flex-col items-center justify-center -gap-2 rounded-full px-6 py-1 bg-white">
                <span className = "text-xs whitespace-nowrap opacity-70">Estimasi sampai</span>
                <h1 className = "text-3xl font-bold">06.20</h1>
            </div>
        </div>
    )
}

const InFlightPage = () => {
    return (
        <div className = "w-full h-full relative">
            <PlaneOverlay/>

            <Notch/>

            <div className = "h-[40vh] w-full bg-red-100">
            </div>
        </div>
    );
};

export default InFlightPage;
