import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { FacebookLogo, InstagramLogo, TiktokLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import React from 'react'

const socialLinks = [
    {
        title: "Yosuka Production",
        description: "Yosuka Production merupakan wadah kreativitas seluruh Siswa-siswi, Guru dan Karyawan SMA Yos Sudarso Karawang.",
        platform: "YouTube",
        platformIcon: YoutubeLogo,
        platformIconStyle: "text-red-600",
        action: "Subscribe"
    },
    {
        title: "@smayossuka",
        description: "Akun resmi SMA Yos Sudarso Karawang",
        platform: "Instagram",
        platformIcon: InstagramLogo,
        platformIconStyle: "text-pink-600",
        action: "Follow"
    },
    {
        title: "@osissmayosuka",
        description: "Akun resmi SMA Yos Sudarso Karawang",
        platform: "TikTok",
        platformIcon: TiktokLogo,
        platformIconStyle: "text-foregrounds",
        action: "Follow"
    },
    {
        title: "SMA Yos Sudarso Karawang",
        description: "Akun facebook yang akan memberikan berita, agenda acara dan foto-foto terbaru dari kegiatan SMA YOSUKA.",
        platform: "Facebook",
        platformIcon: FacebookLogo,
        platformIconStyle: "text-blue-600",
        action: "Follow"
    },
]
const SocialItem = ({ item }: any) => {
    return <div className="border border-border p-6 gap-8 flex flex-row items-center justify-center rounded-2xl">
        <div className="flex flex-col gap-2 flex-1 max-w-xl">
            <div className="flex flex-row gap-1">
                <item.platformIcon className={cn("w-6 h-6", item.platformIconStyle)} size={24} weight="fill" /><span className="font-medium">{item.platform}</span>
            </div>
            <h2 className="text-3xl font-black">{item.title}</h2>
            <p className="text-muted-foreground">{item.description}</p>
        </div>
    </div>
}
const SocialSection = () => {
    return (
        <div className="bg-white rounded-[3.5rem] py-12 mx-auto flex flex-col gap-16 items-center justify-center">
            <h2 className="text-5xl font-black text-center">Tetap terhubung dengan kami</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-8'>
                {socialLinks.map((e) => <SocialItem item={e} key={e} />)}
            </div>
            
            {/* <div className="grid grid-cols-4 gap-4 w-full">
          <div className="aspect-square w-full h-auto bg-green-400 rounded-2xl even:mt-20"></div>
          <div className="aspect-square w-full h-auto bg-green-400 rounded-2xl even:mt-20"></div>
          <div className="aspect-square w-full h-auto bg-green-400 rounded-2xl even:mt-20"></div>
          <div className="aspect-square w-full h-auto bg-green-400 rounded-2xl even:mt-20"></div>
        </div> */}
        </div>
    )
}

export default SocialSection