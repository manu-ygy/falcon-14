'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/src/lib/utils';
import Icons from '@/src/components/custom/icons';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import {
    CaretDown,
} from '@phosphor-icons/react/dist/ssr';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const navigationLinks = [
    {
        title: 'Profil Sekolah',
        links: [
            {
                title: 'Sambutan Kepala Sekolah',
                href: '/sambutan',
            },
            {
                title: 'Visi & Misi',
                href: '/visi-misi',
            },
            {
                title: 'Kurikulum',
                href: '/kurikulum',
            },
            {
                title: 'Guru',
                href: '/guru',
            },
            {
                title: 'Fasilitas sekolah',
                href: '/fasilitas',
            },
            {
                title: 'Kontak',
                href: '/kontak',
            },
        ],
    },
    {
        title: 'Siswa & Kegiatan',
        links: [
            {
                title: 'OSIS',
                href: '/osis',
            },
            {
                title: 'Ekstrakurikuler',
                href: '/ekstrakurikuler',
            },
            {
                title: 'Program Sekolah',
                href: '/program',
            },
        ],
    },
    {
        title: 'PPDB',
        links: [
            {
                title: 'Informasi PPDB',
                href: '/ppdb',
            },
            {
                // Icon is not present for this link
                title: 'Daftar PPDB',
                href: 'https://psbyss.aimsis.com/',
            },
        ],
    },
];
interface INavbarProps {
  landing?: boolean;
}

const Navlogo = () => {
    return (
        <Link href="/" className="flex flex-row gap-4 ">
            <Icons />
            <div className="flex flex-col max-md:hidden -gap-1">
                <span className="text-lg font-bold">SMA Yos Sudarso</span>
                <span className = "opacity-70 text-sm">Karawang</span>
            </div>
        </Link>
    );
};

const Navprofile = () => {
    return (
        <div className="flex flex-row">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    );
};

const Navbar = ({ landing = false }: INavbarProps) => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = React.useState(false);
    useMotionValueEvent(scrollY, 'change', (latest) => {
        setScrolled(latest > 0);
    });
    const scrolledStyle =
    scrolled &&
    'text-foreground bg-background/90 backdrop-blur-sm z-20 border-b border-border';
    const landingStyle = cn(landing && 'text-white px-16 z-20', scrolledStyle);

    return (
        <header
            className={cn(
                'fixed top-0 w-full flex flex-row justify-between border-b border-transparent items-center h-28 px-8 py-8 transition-all',
                landingStyle
            )}
        >
            <Navlogo />
            <NavigationList />
            <Link href={'/dashboard'}>
                <Button
                    variant={'default'}
                    className="ml-4 bg-indigo-500 hover:bg-indigo-600">
            Dashboard
                </Button>
            </Link>
        </header>
    );
};
const NavigationList = () => {
    return (
        <div className="flex flex-row gap-2 max-md:hidden ml-auto">
            {navigationLinks.map((e, index) => (
                <NavigationItems key={index} item={e} />
            ))}
        </div>
    );
};

export function NavigationItems({ item }: any) {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <button className="flex flex-row gap-2 px-2 items-center justify-center outline-none font-semibold">
                    {item.icon && <item.icon size={28} />}
                    {item.title}
                    <CaretDown className="mx-2" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-98 rounded-2xl bg-background backdrop-blur-sm p-2 mt-4">
                <DropdownMenuGroup>
                    {item.links.map((e: any, index: number) => (
                        <DropdownMenuItem
                            key={index}
                            className="font-medium py-3 px-4 rounded-xl gap-2 group hover:!bg-indigo-500 hover:!text-slate-100 text-base"
                        >
                            {/* Only show the icon if it exists */}
                            {e.icon && (
                                <e.icon
                                    size={48}
                                    className="w-10 h-10 p-[0.3rem] bg-background/40 border border-border rounded-lg"
                                />
                            )}
                            <span>{e.title}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Navbar;
