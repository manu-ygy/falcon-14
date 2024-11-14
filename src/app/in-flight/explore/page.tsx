'use client';

import { Button } from "@/components/ui/button";
import { Dot, PaperPlane } from "@phosphor-icons/react/dist/ssr";
import { Checkbox } from "@radix-ui/react-checkbox";
import { DE, ID } from "country-flag-icons/react/3x2";
import { Badge } from "@/components/ui/badge";
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
            </div>

            <div className = "relative rounded-3xl min-h-64 bg-gradient-to-b from-qmaroon-600 to-qmaroon-400 flex items-center justify-center">
                <img className = "absolute rounded-3xl w-full h-full top-0 left-0 object-cover opacity-50" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZT9vv4bU7okqvE-GXWfcsB55dj3QAmwXNRw&s"/>
                <h2 className = "text-2xl font-semibold text-slate-100 z-20">Jelajahi Jepang!</h2>
            </div>

            <span className = "text-sm opacity-70">Jepang memiliki segudang rahasia menarik yang akan buatmu penasaran!</span>

            <div className = "w-full h-max mb-8 p-4 bg-slate-100 rounded-3xl flex flex-col gap-6">
                <div className = "flex flex-col gap-2">
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Osaka_Castle_Nishinomaru_Garden_April_2005.JPG/1200px-Osaka_Castle_Nishinomaru_Garden_April_2005.JPG" className = "rounded-3xl mb-4"/>
                    <span className = "font-semibold">Kastil Osaka</span>
                    <span className = "opacity-70 text-sm">Istana Osaka merupakan bangunan peninggalan budaya yang dilindungi oleh pemerintah Jepang. Menara utama Istana Osaka yang menjulang tinggi merupakan simbol kota Osaka.</span>
                </div>

                <div className = "flex flex-col gap-2">
                    <img src = "https://awsimages.detik.net.id/community/media/visual/2021/03/12/mengenal-yatai-di-jepang-1.png?w=600&q=90" className = "rounded-3xl mb-4"/>
                    <div className = "flex gap-2">
                        <span className = "font-semibold">Ramen Nigiri</span>
                        <Badge>Bersponsor</Badge>
                    </div>
                    <span className = "opacity-70 text-sm">Kedai Ramen Nigiri merupakan kedai ramen yang telah buka dari tahun 1950 dan terkenal akan kelezatan ramennya.</span>
                </div>
            </div>
        </div>
    );
};

export default GamePage;
