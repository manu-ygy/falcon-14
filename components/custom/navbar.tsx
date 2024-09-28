"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Logo } from "@/components/custom/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { Basketball, CaretDown, Chalkboard, CreditCard, EnvelopeOpen, Globe, GraduationCap, Keyboard, Megaphone, PhoneCall, Scroll, Sparkle, Star, User, UsersThree } from "@phosphor-icons/react/dist/ssr"
import { Settings } from "lucide-react"
import { useMotionValueEvent, useScroll } from "framer-motion"

const navigationLinks = [
    {
        title: "Profil Sekolah",
        links: [
            {
                icon: EnvelopeOpen,
                title: "Sambutan Kepala Sekolah",
                href: "/sambutan",
            },
            {
                icon: Scroll,
                title: "Visi & Misi",
                href: "/visi-misi",
            },
            {
                icon: GraduationCap,
                title: "Kurikulum",
                href: "/kurikulum",
            },
            {
                icon: UsersThree,
                title: "Guru",
                href: "/guru",
            },
            {
                icon: Chalkboard,
                title: "Fasilitas sekolah",
                href: "/fasilitas",
            },
            {
                icon: PhoneCall,
                title: "Kontak",
                href: "/kontak",
            }
        ]
    },
    {
        title: "Siswa & Kegiatan",
        links: [
            {
                icon: Star,
                title: "OSIS",
                href: "/osis",
            },
            {
                icon: Basketball,
                title: "Ekstrakurikuler",
                href: "/ekstrakurikuler",
            },
            {
                icon: Sparkle,
                title: "Program Sekolah",
                href: "/program",
            },
        ]
    },
    {
        title: "PPDB",
        links: [
            {
                icon: Megaphone,
                title: "Informasi PPDB",
                href: "/ppdb",
            },
            {
                icon: Globe,
                title: "Daftar PPDB",
                href: "/https://psbyss.aimsis.com/",
            },
        ]
    },
]
interface INavbarProps {
    landing?: boolean;
}

const Navlogo = () => {

    return (
        <Link href="/" className="flex flex-row gap-4">
            <Logo />
            <div className="flex flex-col">
                <span className="text-lg font-bold">SMA Yos Sudarso</span>
                <span className="tracking-widest">Karawang</span>
            </div>
        </Link>
    )
}

const Navbar = ({ landing = false }: INavbarProps) => {
    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = React.useState(false)
    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 0)
    })
    const scrolledStyle = scrolled && "text-foreground bg-background/90 backdrop-blur-sm z-20 px-12"
    const landingStyle = cn(landing && "text-white", scrolledStyle)
    return (
        <header className={cn("sticky top-0 w-full flex flex-row justify-between items-center h-28 p-6 transition-all", landingStyle)}>
            <Navlogo />
            <NavigationList />
        </header>
    )
}
const NavigationList = () => {
    return <div className="flex flex-row gap-2 max-md:hidden">
        {navigationLinks.map(e => (
            <NavigationItems item={e} />
        ))}
    </div>
}

export function NavigationItems({ item }: any) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex flex-row gap-2 items-center justify-center outline-none uppercase text-base tracking-wider font-medium">{item.title}<CaretDown /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-98 rounded-2xl p-2 bg-background/80 backdrop-blur-sm">
                <DropdownMenuGroup>
                    {item.links.map((e: any) => (
                        <DropdownMenuItem className="font-semibold px-3 py-3 rounded-2xl gap-2 group hover:bg-transparent">
                            <e.icon size={48} className="w-10 h-10 p-[0.3rem] bg-background/40 border border-border rounded-lg " />
                            <span>{e.title}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Navbar

