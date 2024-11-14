'use client';

import { Button } from "@/components/ui/button";
import { Dot, PaperPlane } from "@phosphor-icons/react/dist/ssr";
import { Checkbox } from "@radix-ui/react-checkbox";
import { DE, ID } from "country-flag-icons/react/3x2";
import { Badge } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const GamePage = () => {
    return (
        <div className = "w-full h-full relative p-4 flex flex-col gap-4">
            <div className = "flex gap-2 items-center">
                <a className = "text-xs font-semibold bg-slate-100 py-2 px-4 w-fit rounded-3xl" href = "/in-flight">Kembali</a>
                <div className = "flex text-xs font-medium items-center gap-2 rounded-3xl py-2 px-4 bg-slate-100">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="ghost" className = "p-0 text-xs">Tampilkan preferensi</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>
                                <h2 className="text-3xl font-semibold text-qmaroon-500">Preferensi obrolan</h2>
                            </DialogTitle>
                        <DialogDescription>
                            Atur pengalaman mengobrolmu disini.
                        </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-2 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Tampilkan tujuan saya
                                </Label>
                                <Switch className = "ml-auto"/>
                            </div>

                            <div className="grid grid-cols-2 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Pasangkan saya dengan orang yang memiliki tujuan sama
                                </Label>
                                <Switch className = "ml-auto"/>
                            </div>
                        
                        <div className="grid grid-cols-2 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Izinkan pesan pribadi
                            </Label>
                            <div className = "w-full">
                            <Select defaultValue="apple">
                                <SelectTrigger className="w-full">
                                        <SelectValue/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                        <SelectItem value="apple" aria-selected>Hanya teman</SelectItem>
                                        <SelectItem value="banana">Dengan permintaan</SelectItem>
                                        <SelectItem value="blueberry">Izinkan</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        </div>
                        <DialogFooter>
                        <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                </div>
            </div>
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
                    <span className = "text-sm font-medium text-qmaroon">Penerbagan 404 Jakarta - Tokyo</span>
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
                            Good Morning! Nice to meet you all!
                        </div>
                    </div>
                </div>

                <div className = "flex items-center gap-2">
                    <img className = "min-w-12 h-12 rounded-full border border-slate-400/50 object-cover" src = "/devin.jpeg"/>
                    <div className = "flex mr-auto flex-col gap-1">
                        <div className = "flex gap-2 ml-2.5 text-xs items-center">
                            <span className = "font-semibold whitespace-nowrap">Devin Hong</span>
                            <ID className = "w-4 rounded"/>
                            <Dot/>
                            <span className = "opacity-70 whitespace-nowrap">Tujuan sama</span>
                        </div>
                        <div className = "rounded-3xl bg-white px-4 py-2.5 text-xs font-medium">
                            Halo! Aku dari Indonesia. Ada yang sama juga?
                        </div>
                    </div>
                </div>

                <div className = "rounded-full mt-auto flex gap-2">
                    <Input className = "w-full rounded-full bg-white" placeholder="Ketikkan sesuatu..."/>
                    <Button className = "rounded-3xl"><PaperPlane size = {20}/></Button>
                </div>
            </div>
        </div>
    );
};

export default GamePage;
