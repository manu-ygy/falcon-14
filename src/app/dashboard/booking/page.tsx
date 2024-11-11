import {
    AirplaneTilt,
    CalendarBlank,
    ListChecks,
    MagnifyingGlass,
    Users,
} from '@phosphor-icons/react/dist/ssr';

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

const Recommendation = () => {
    const recommendations = [
        { city: 'Tokyo', country: 'Japan', code: 'NRT', thumbnailUrl: 'https://assets.editorial.aetnd.com/uploads/2013/07/gettyimages-1390815938.jpg' },
        { city: 'Beijing', country: 'China', code: 'PEK', thumbnailUrl: 'https://www.grandmercure.com/wp-content/uploads/2020/04/BEIJING_1_MAIN-shutterstock_1263558487__001-2200x1200.jpg' },
        { city: 'Seoul', country: 'South Korea', code: 'ICN', thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWDbhqTkjqyyZbpd49gCs5xNzBc72VqZP6w&s' }
    ];

    return (
        <div className = "w-full p-4 lg:p-16 bg-qmaroon-500 rounded-3xl text-slate-100 lg:pb-24">
            <div className = "flex flex-col">
                <div className = "flex flex-col lg:flex-row lg:gap-8 gap-4 items-center mb-4 p-4 lg:p-0">
                    <h1 className = "text-3xl font-semibold">Mau terbang kemana?</h1>
                    <div className = "flex flex-col w-full lg:min-w-3/4 items-start">
                        <div className = "bg-white w-full rounded-full flex items-center px-4 border border-slate-400/50">
                            <MagnifyingGlass size = {24} className = "text-slate-400/70"/>
                            <Input className = "bg-transparent border-0 w-full rounded-full text-zinc-900 text-base outline-none focus:!ring-0" placeholder = "Tokyo"/>
                        </div>

                        <div className = "flex gap-4 mx-4 mt-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger className = "flex gap-2 text-sm">
                                    <CalendarBlank size = {20}/>
                                    10 Januari
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className = "select-none">
                                    <Calendar/>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger className = "flex gap-2 text-sm">
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

                <div className="flex gap-2 opacity-70 mb-4">
                    <span>Sedang tren</span>

                    <TrendingUpIcon></TrendingUpIcon>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 lg:gap-4 gap-12 bg-white rounded-3xl p-4">
                {recommendations.map((item, index) => (
                    <RecommendationItem
                        key={index}
                        city={item.city}
                        country={item.country}
                        code={item.code}
                        thumbnailUrl={item.thumbnailUrl}
                    />
                ))}
            </div>
        </div>
    );
};

const RecommendationItem = ({ city, country, code, thumbnailUrl }: { city: string; country: string; code: string; thumbnailUrl: string}) => {
    return (
        <div className = "flex flex-col gap-4 relative">
            <div className='relative'>
                <img className='rounded-2xl h-48 lg:h-64 w-full' src = {thumbnailUrl}></img>
                <div className = "w-full h-full absolute bg-zinc-900/20 top-0 left-0 rounded-2xl"></div>

                <div className = "absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[calc(100%+1rem)] lg:w-[calc(100%-1rem)] -rotate-3">
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
                        <AirplaneTilt className = "text-qgold-500/70" size = {192}/>
                    </div>

                    <div className = "flex flex-col pl-6 pr-8 py-8 z-10 justify-center">
                        <span><span className = "font-medium">{city}</span><span className = "opacity-70">, {country}</span></span>
                        <span className= "text-sm">Rp. 1.500.000,00</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

const BookingInformation = () => {
    return (
        <div className = "w-full flex">
            <div className = "bg-white p-8 rounded-3xl">
                <h2 className = "text-3xl font-semibold text-qmaroon-500">Jakarta-Tokyo</h2>
                <span>10 January 2025</span>
            </div>
        </div>
    )
}

const TicketPage = () => {
    return (
        <div className = "flex flex-col gap-6">
            <Recommendation/>

            <BookingInformation></BookingInformation>
        </div>
    );
};

export default TicketPage;
