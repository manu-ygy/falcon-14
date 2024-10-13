import { Button } from '@/src/components/ui/button';
import { cn } from '@/src/lib/utils';
import { FacebookLogo, InstagramLogo, TiktokLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import React from 'react';

const socialLinks = [
    {
        title: 'Yosuka Production',
        description: 'Yosuka Production merupakan wadah kreativitas seluruh Siswa-siswi, Guru dan Karyawan SMA Yos Sudarso Karawang.',
        platform: 'YouTube',
        platformIcon: YoutubeLogo,
        platformIconStyle: 'text-red-600',
        action: 'Subscribe'
    },
    {
        title: '@smayossuka',
        description: 'Akun resmi SMA Yos Sudarso Karawang',
        platform: 'Instagram',
        platformIcon: InstagramLogo,
        platformIconStyle: 'text-pink-600',
        action: 'Follow'
    },
    {
        title: '@osissmayosuka',
        description: 'Akun resmi SMA Yos Sudarso Karawang',
        platform: 'TikTok',
        platformIcon: TiktokLogo,
        platformIconStyle: 'text-foregrounds',
        action: 'Follow'
    },
    {
        title: 'SMA Yos Sudarso Karawang',
        description: 'Akun facebook yang akan memberikan berita, agenda acara dan foto-foto terbaru dari kegiatan SMA YOSUKA.',
        platform: 'Facebook',
        platformIcon: FacebookLogo,
        platformIconStyle: 'text-blue-600',
        action: 'Follow'
    },
];
const SocialItem = ({ item }: any) => {
    return <div className="w-full border border-slate-300/70 p-6 gap-4 flex flex-row items-center justify-center rounded-2xl">
        <item.platformIcon className={cn('', item.platformIconStyle)} size={32} weight="fill"/>
        <h2 className="text-xl font-semibold">{item.title}</h2>
    </div>;
};
const SocialSection = () => {
    return (
        <div className = "w-full h-auto relative flex flex-col items-center max-md:p-8">
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC3LkZwfdPNfCLlY8AWxwUtT6HXPqm3NU6Pw&s" className="w-full lg:w-1/3 h-auto mask-image-b mask-image-start-80 translate-y-1/4 -z-10 select-none" width={312} height={312} alt = "Icon"/>

            <div className="rounded-[3.5rem] py-12 mx-auto flex flex-col gap-16 items-center justify-center">
                <h2 className="text-5xl font-black text-center uppercase">Tetap terhubung</h2>
                <div className='flex flex-row max-md:flex-col gap-4 lg:px-8'>
                    {socialLinks.map((e) => <SocialItem item={e} key={e} />)}
                </div>
            </div>

        </div>
    );
};

export default SocialSection;