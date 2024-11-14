'use client'

import Autoplay from "embla-carousel-autoplay"

import {
    AirplaneTilt,
    Bank,
    BowlFood,
    CalendarBlank,
    Cards,
    Dot,
    ListChecks,
    MagnifyingGlass,
    SpinnerGap,
    Storefront,
    SuitcaseRolling,
    Ticket,
    Users,
} from '@phosphor-icons/react/dist/ssr';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

import { TrendingUpIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"  

  import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';

const Recommendation = () => {
    const recommendations = [
        { city: 'Tokyo', country: 'Japan', code: 'NRT', thumbnailUrl: 'https://assets.editorial.aetnd.com/uploads/2013/07/gettyimages-1390815938.jpg' },
        { city: 'Beijing', country: 'China', code: 'PEK', thumbnailUrl: 'https://www.grandmercure.com/wp-content/uploads/2020/04/BEIJING_1_MAIN-shutterstock_1263558487__001-2200x1200.jpg' },
        { city: 'Port Moresby', country: 'Papua New Guinea', code: 'POM', thumbnailUrl: 'https://statemag.state.gov/wp-content/uploads/2021/04/0521POM-24.jpg' },
        { city: 'Sydney', country: 'Australia', code: 'SYD', thumbnailUrl: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/553000/553956-sydney-harbour-bridge.jpg' },
    ];

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="bg-white rounded-3xl relative"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}      
            >
            <CarouselContent>
                {recommendations.map((item, index) => (
                    <CarouselItem key={index} className="lg:basis-1/2">
                        <div className = "relative pb-16">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div role = "button">
                                        <RecommendationItem
                                            key={index}
                                            city={item.city}
                                            country={item.country}
                                            code={item.code}
                                            thumbnailUrl={item.thumbnailUrl}
                                        />
                                    </div>
                                </DialogTrigger>
                                <BookingPopup/>
                            </Dialog>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

const RecommendationItem = ({ city, country, code, thumbnailUrl }: { city: string; country: string; code: string; thumbnailUrl: string}) => {
    return (
        <div className = "flex flex-col gap-4 relative">
            <div className='relative group'>
                <div className = "rounded-2xl overflow-hidden">
                    <img className='rounded-2xl h-48 lg:h-64 w-full group-hover:scale-[1.1] transition duration-500' src = {thumbnailUrl}></img>
                    <div className = "w-full h-full absolute bg-gradient-to-r group-hover:opacity-0 from-qmaroon-600 to-qmaroon-400 opacity-30 top-0 left-0 rounded-2xl transition duration-500"></div>
                </div>

                <div className = "absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-full lg:w-[calc(100%-1rem)] -rotate-3 group-hover:opacity-0 transition duration-500">
                    <div className = "relative text-zinc-900 rounded-md flex w-full overflow-hidden">
                        <div className = "absolute w-full h-1/3 bg-slate-100 rounded-t-lg"></div>
                        <div className = "absolute w-full h-1/3 bottom-0 bg-slate-100 shadow-xl rounded-b-lg"></div>

                        <svg className="absolute inset-0 w-full h-1/2 top-1/2 -translate-y-1/2">
                            <defs>
                            <mask id="ticket-mask">
                                <rect width="100%" height="100%" fill="white" />

                                <circle cx="0" cy="50%" r="12" fill="black" />
                                <circle cx="100%" cy="50%" r="12" fill="black" />
                            </mask>
                            </defs>
                            <rect width="100%" height="100%" fill="#f1f5f9" mask="url(#ticket-mask)" />
                        </svg>

                        <div className="text-center border-r-4 border-dotted p-4 pl-6 z-10 [writing-mode:vertical-lr] font-bold font-mono">
                            CGK-{code}
                        </div>

                        <div className = "absolute top-1/2 -translate-y-1/2 right-0 opacity-50iya ">
                            <AirplaneTilt className = "text-qmaroon-500/50" size = {192} weight = "fill"/>
                        </div>

                        <div className = "flex flex-col pl-6 pr-8 py-8 z-10 justify-center">
                            <span><span className = "font-medium">{city}</span><span className = "opacity-70">, {country}</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SearchItem = ({ price, destination, date, time, tier }: { price: string, destination: string, date: string, time: string, tier: string }) => {
    return (
        <Button variant={'ghost'} className = "items-start w-full p-8 rounded-3xl border border-slate-400/50 flex flex-col gap-2">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Qatar_Airways_logo.svg/2560px-Qatar_Airways_logo.svg.png" className = "h-8 mb-4"/>
            <h2 className = "text-2xl font-medium flex gap-2 lg:items-center flex-col lg:flex-row">{time} <Badge className = "w-fit">{tier}</Badge></h2>
            <div className = "flex gap-2 opacity-70 items-center flex-wrap">
                <span>{destination}</span>

                <Dot/>

                <div className = "flex items-center gap-1">
                    <CalendarBlank size = {20}/>
                    <span>{date}</span>
                </div>
            </div>

            <span>Rp. {price}</span>
        </Button>
    )
}

const BookingPopup = () => {
    const [bookingState, setBookingState] = React.useState<string>('preview')

    return (
        <DialogContent className = "max-h-[90vh] overflow-y-auto">
            {(bookingState === 'preview') ? (
                <>
                    <DialogHeader>
                        <DialogTitle>
                            <h2 className = "text-3xl font-semibold">Jakarta-Tokyo</h2>
                        </DialogTitle>
                        <DialogDescription className = "flex gap-2 mt-2 items-center">
                            25 Januari 2025  
                            <Dot/>
                            10:10-15:30
                            <Dot/>
                            <Badge>Ekonomi</Badge>
                        </DialogDescription>
                    </DialogHeader>
            
                    <img src = "https://assets.editorial.aetnd.com/uploads/2013/07/gettyimages-1390815938.jpg" className = "rounded-3xl"/>
            
                    <hr/>

                    <h2 className = "font-semibold">Anda akan mendapatkan:</h2>

                    <ul className = "flex flex-col gap-4 opacity-70 ml-4">
                        <li className = "flex items-center gap-2 text-sm">
                            <Ticket size = {24}/>
                            <span>1 tiket ekonomi sekali jalan</span>
                        </li>

                        <li className = "flex items-center gap-2 text-sm">
                            <BowlFood size = {24}/>
                            <span>1 kali makan</span>
                        </li>

                        <li className = "flex items-center gap-2 text-sm">
                            <SuitcaseRolling size = {24}/>
                            <span>Bagasi gratis seberat 20kg</span>
                        </li>
                    </ul>

                    <DialogFooter>
                        <Button onClick={() => {setBookingState('identity')}}>Lanjut</Button>
                    </DialogFooter>
                </>
        ) : (
            <>{(bookingState === 'identity') ? (
                <>
                    <DialogHeader>
                        <DialogTitle>
                            <h1 className = "text-3xl font-semibold">Pemesanan</h1>
                        </DialogTitle>
                        <DialogDescription>
                            Harap pastikan detail-detail Anda benar.
                        </DialogDescription>
                    </DialogHeader>

                    <div className = "w-full rounded-3xl h-64 relative mt-2 bg-gradient-to-b from-blue-600 to-blue-400">
                        <img src = "https://cdn3d.iconscout.com/3d/premium/thumb/personal-information-3d-icon-download-in-png-blend-fbx-gltf-file-formats--data-resume-database-security-pack-appliances-icons-6137036.png?f=webp" className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px]"/>
                    </div>

                    <hr/>
            
                    <div className = "w-full grid grid-cols-3 gap-4 items-center">
                        <Label>Nama lengkap </Label>
                        <Input className = "col-span-2" placeholder = 'Lindawati Sutejo'/>
            
                        <Label>E-mail </Label>
                        <Input className = "col-span-2" placeholder = 'lindawati@mymail.com'/>
                        
                        <Label>No. Telp. </Label>
                        <Input className = "col-span-2" placeholder = "+62 111-2222-3333"/>
                        
                        <Label>Alamat </Label>
                        <Input className = "col-span-2" placeholder = "Jalan Melati no. 20"/>
                    </div>
            
                    <DialogFooter>
                        <Button onClick={() => {setBookingState('preview')}} variant={'secondary'}>Kembali</Button>
                        <Button onClick={() => {setBookingState('checkout')}}>Lanjut</Button>
                    </DialogFooter>
                </>
            ) : (
                <>{(bookingState === 'checkout') ? (
                    <>
                    <DialogHeader>
                        <DialogTitle>
                            <h1 className = "text-3xl font-semibold">Pembayaran</h1>
                        </DialogTitle>
                        <DialogDescription>
                            Silakan pilih salah satu dari metode pembayaran berikut.
                        </DialogDescription>
                    </DialogHeader>
            
                    <div className = "w-full rounded-3xl h-64 relative mt-2 bg-gradient-to-b from-green-600 to-green-400">
                        <img src = "https://cdn3d.iconscout.com/3d/premium/thumb/payment-method-3d-icon-download-in-png-blend-fbx-gltf-file-formats--credit-card-debit-atm-wallet-and-cash-pack-business-icons-4841895.png?f=webp" className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px]"/>
                    </div>

                    <hr/>

                    <div className = "flex flex-col gap-4">
                        <Button className = "border rounded-3xl border-slate-400/50 gap-4" variant={'ghost'}>
                            <Bank size = {20}/> <span>Transfer bank</span>
                        </Button>

                        <Button className = "border rounded-3xl border-slate-400/50 gap-4" variant={'ghost'}>
                            <Cards size = {20}/> <span>Kartu kredit</span>
                        </Button>

                        <Button className = "border rounded-3xl border-slate-400/50 gap-4" variant={'ghost'}>
                            <Storefront size = {20}/> <span>Minimarket</span>
                        </Button>
                    </div>

                    <DialogFooter>
                        <Button onClick={() => {setBookingState('preview')}} variant={'secondary'}>Kembali</Button>
                        <Button onClick={() => {setBookingState('checkou')}}>Lanjut</Button>
                    </DialogFooter>
                    </>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle>
                                <h1 className = "text-3xl font-semibold">Selesai!</h1>
                            </DialogTitle>
                            <DialogDescription>
                                Terima kasih telah melakukan booking di Airstra!
                            </DialogDescription>

                            <div className = "w-full rounded-3xl h-64 relative mt-2 bg-gradient-to-b from-indigo-600 to-indigo-400">
                                <img src = "https://img.pikbest.com/png-images/20220113/3d-icon-payment-successful-illustration-object_6214541.png!sw800" className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px]"/>
                            </div>

                            <hr/>

                            <span className = "text-sm opacity-70">Bukti pembayaran telah dikirim ke e-mailmu. Jika tidak terkirim, silakan tekan tombol "Unduh bukti".</span>
                        </DialogHeader>
                
                        <DialogFooter>
                            <Button>Unduh bukti</Button>
                        </DialogFooter>
                    </>
                )}
                </>
            )}</>
        ) }
        </DialogContent>
    )
}

const SearchResult = () => {
    const searchResult = [
        {price: '1.500.000,00', date: '25 Januari 2025', time: '10:00-15:30', tier: 'Ekonomi', destination: 'Jakarta-Tokyo'},
        {price: '1.500.000,00', date: '25 Januari 2025', time: '17:00-22:30', tier: 'Ekonomi', destination: 'Jakarta-Tokyo'},
        {price: '2.500.000,00', date: '25 Januari 2025', time: '08:30-10:30', tier: 'Bisnis', destination: 'Jakarta-Tokyo'},
        {price: '4.000.000,00', date: '26 Januari 2025', time: '10:20-13:50', tier: 'Eksekutif', destination: 'Jakarta-Tokyo'}
    ];

    return (
        <div className = "bg-white p-8 rounded-3xl w-full flex flex-col gap-6">
            <div className = "flex flex-col gap-2">
                <h2 className = "text-3xl font-semibold text-qmaroon-500">Hasil Pencarian</h2>
                <span className = "opacity-70">Jakarta-Tokyo</span>
            </div>

            <div className = "grid lg:grid-cols-2 gap-4">
                {searchResult.map((item, index) => (
                    <Dialog>
                        <DialogTrigger asChild>
                            <div role = "button">
                                <SearchItem
                                    key={index}
                                    destination={item.destination}
                                    price={item.price}
                                    date={item.date}
                                    time={item.time}
                                    tier={item.tier}
                                />
                            </div>
                        </DialogTrigger>
                        <BookingPopup/>
                    </Dialog>
                ))}
            </div>
        </div>
    )
}

const TicketPage = () => {
    const [isSearching, setIsSearching] = React.useState<boolean>(false);
    const [destination, setDestination] = React.useState<string>('');
    const [result, setResult] = React.useState<boolean>(false);

    const search = () => {
        setIsSearching(true)
        setTimeout(() => {
            setIsSearching(false)
            setResult(true)
        }, 3000);
    }

    return (
        <div className = "w-full h-full flex flex-col gap-6">
            <div className = "w-full p-4 lg:p-8 bg-white rounded-3xl">
                <div className = "flex flex-col">
                    <div className = "flex flex-col lg:flex-row lg:gap-8 gap-4 items-center p-4 lg:p-0">
                        <h1 className = "text-3xl font-semibold text-qmaroon-500">Mau terbang kemana?</h1>
                        <div className = "flex flex-col gap-2 w-full lg:min-w-3/4 items-start">
                            <div className = "bg-white w-full rounded-full flex items-center pl-4 border border-slate-400/50 p-2">
                                <MagnifyingGlass size = {24} className = "text-slate-400/70"/>
                                <Input onChange={(event) => setDestination(event.target.value)} value={destination} className = "bg-transparent shadow-none border-0 w-full rounded-full text-zinc-900 text-base outline-none focus:!ring-0" placeholder = "Tokyo"/>
                                <Button type="submit" className = "flex gap-2 rounded-3xl" onClick={search} disabled={destination.length == 0 || isSearching}>
                                    {isSearching && (
                                        <SpinnerGap size = {20} className = "animate-spin"/>
                                    )

                                    }
                                    Cari</Button>
                            </div>

                            <div className = "flex flex-col lg:flex-row gap-4 mx-4">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className = "flex gap-2 text-sm p-0 opacity-70 hover:opacity-100 transition hover:underline">
                                        <CalendarBlank size = {20}/>
                                        10 Januari
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className = "select-none">
                                        <Calendar/>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <DropdownMenu>
                                    <DropdownMenuTrigger className = "flex gap-2 text-sm p-0 opacity-70 hover:opacity-100 transition hover:underline">
                                        <Users size = {20}/>
                                        1 penumpang
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className = "py-4 px-6">
                                        <DropdownMenuLabel>Jumlah penumpang</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <Input type = "number"/>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>

                    {(!result) && (
                        <motion.div initial={{opacity: 0}} animate={{ opacity: 1 }}>
                            <div className="mt-4 flex gap-2 opacity-70 mb-4">
                            <span>Sedang tren</span>

                            <TrendingUpIcon></TrendingUpIcon>
                        </div>
                        </motion.div>
                    )}
                </div>

                {(!result) && (
                    <motion.div initial={{opacity: 0}} animate={{ opacity: 1 }}>
                        <Recommendation/>
                    </motion.div>
                )}
            </div>

            {(result) && (
                <motion.div initial={{opacity: 0}} animate={{ opacity: 1 }}>
                    <SearchResult/>
                </motion.div>
            )}
        </div>
    );
};

export default TicketPage;
