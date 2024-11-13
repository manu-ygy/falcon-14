'use client';

import { Button } from "@/components/ui/button";
import { Dot } from "@phosphor-icons/react/dist/ssr";
import { DE, ID } from "country-flag-icons/react/3x2";
import { Badge } from "lucide-react";

const GamePage = () => {
    return (
        <div className = "w-full h-full relative p-4 flex flex-col gap-4">
            <a className = "text-sm" href = "/">Kembali</a>
            
            <div className = "w-full p-4 rounded-3xl border border-slate-400/50 flex items-center">
                <div className = "relative w-40 h-12">
                    <img src = "/devin.jpeg" className = "absolute left-0 top-1/2 -translate-y-1/2 border-4 border-white w-12 h-12 rounded-full object-cover">
                    </img>
                    <img src = "/devin.jpeg" className = "absolute left-6 top-1/2 -translate-y-1/2 border-4 border-white w-12 h-12 rounded-full object-cover">
                    </img>
                    <img src = "/devin.jpeg" className = "absolute left-12 top-1/2 -translate-y-1/2 border-4 border-white w-12 h-12 rounded-full object-cover">
                    </img>
                </div>

                <div className = "flex flex-col gap-1">
                    <span className = "text-sm font-medium">Penerbagan 404 Jakarta - Tokyo</span>
                    <span className = "text-xs opacity-70">45 orang</span>
                </div>
            </div>

            <div className = "w-full h-full p-4 flex flex-col bg-slate-100 rounded-3xl gap-4">
                <div className = "flex flex-row-reverse items-center gap-2 ml-auto">
                    <img className = "w-12 h-12 rounded-full border border-slate-400/50" src = "https://i.pinimg.com/474x/68/b1/35/68b13553903740a875342bfa4518b228.jpg"></img>
                    <div className = "flex flex-col gap-1 items-end">
                        <span className = "font-semibold text-sm mr-2.5 text-xs">Anda</span>
                        <div className = "rounded-3xl bg-qmaroon-500 px-4 py-2.5 text-xs font-medium text-slate-100">
                            Apa kabar?
                        </div>
                    </div>
                </div>

                <div className = "flex items-center gap-2">
                    <img className = "w-12 h-12 rounded-full border border-slate-400/50" src = "https://i.pinimg.com/474x/68/b1/35/68b13553903740a875342bfa4518b228.jpg"></img>
                    <div className = "flex mr-auto flex-col gap-1">
                        <span className = "font-semibold text-sm ml-2.5 text-xs flex items-center gap-2">Anthony Kazvek <DE className = "w-4 rounded"/></span>
                        <div className = "rounded-3xl bg-white px-4 py-2.5 text-xs font-medium">
                            Lorem ipsum lololololol
                        </div>
                    </div>
                </div>

                <div className = "flex items-center gap-2">
                    <img className = "w-12 h-12 rounded-full border border-slate-400/50 object-cover" src = "/devin.jpeg"/>
                    <div className = "flex mr-auto flex-col gap-1">
                        <div className = "flex gap-2 ml-2.5 text-xs items-center">
                            <span className = "font-semibold whitespace-nowrap">Devin Hong</span>
                            <ID className = "w-4 rounded"/>
                            <Dot/>
                            <span className = "opacity-70 whitespace-nowrap">Tujuan sama</span>
                        </div>
                        <div className = "rounded-3xl bg-white px-4 py-2.5 text-xs font-medium">
                            Halo aku devin honk honk
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePage;
