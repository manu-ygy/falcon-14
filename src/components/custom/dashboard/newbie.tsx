// @ts-nocheck

import { useState } from "react"
import { Button } from "@/components/ui/button"
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
import { JP, US } from 'country-flag-icons/react/3x2'
import { InputTags } from "@/components/ui/input-tag"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Check, Cross, MapPin, Spinner, SpinnerGap, X } from "@phosphor-icons/react/dist/ssr"
import { Label } from "@/components/ui/label"

const NewbieDialog = () => {
  // Moved the state inside the component
    const [mode, setMode] = useState<string>('preview')
    const [article, setArticle] = useState<string>()

    const articleData = {
        'items': {
            title: 'Cara Menentukan Barang yang Harus Dibawa',
            content: `
Haii, Traveler!!! 🌟 
<br><br>
Merencanakan liburan pertama bisa jadi seru sekaligus bikin bingung, apalagi kalau kamu bingung, ‘barang apa saja yaa yang harus aku bawaaa?’ Kamu jangan khawatir! Airstra akan membantu kamu dalam menentukan barang yang boleh & tidak boleh kamu bawa. Yuk simak caranya!
<br>
<br>

<strong>Manfaatkan Fitur PACK AI 🤖</strong>
<br>
Setelah tiket sudah di tangan, saatnya untuk memikirkan apa saja yang harus kamu bawa. Di sinilah fitur PACK AI dari Airstra berperan penting. Cukup tuliskan daftar barang yang ingin kamu bawa, dan biarkan AI Airstra melakukan sisanya. Berikut adalah beberapa hal yang akan dibantu oleh PACK AI:
<br>
Barang yang Aman Dibawa di Kabin
<br>
Barang yang Harus Masuk Bagasi
<br>
Barang yang Dilarang Dibawa

<br>
<br>

<strong>Tips & Trik</strong>

<br>
<br>

<strong>Periksa Musim dan Ramalan Cuaca Sebelum Berangkat! ❄️☃️🌤️</strong>
<br>
Sebelum berangkat, pastikan untuk mengecek ramalan cuaca di lokasi tujuan. Lalu, kamu bisa memilih pakaian yang sesuai dan nyaman.
<br>
<br>

<strong>Bawa Barang-Barang Penting! 🧳🎒</strong>
<br>
Jangan lupa untuk membawa barang-barang penting seperti pengisi daya, obat-obatan pribadi, dan dokumen perjalanan!
<br>
<br>

<strong>Rencanakan Kegiatan!</strong>
<br>
Jika kamu sudah memiliki rencana kegiatan di tempat tujuan, sesuaikan barang bawaanmu dengan aktivitas tersebut. Misalnya, jika kamu berencana untuk berenang, pastikan kamu membawa pakaian renang dan perlengkapan lainnya.
<br>
<br>

Dengan memanfaatkan fitur-fitur canggih dari Airstra, perjalananmu akan menjadi lebih mudah dan menyenangkan. Selamat berlibur! ✈️✨`
    },
        'country': {
            title: 'Cara Menentukan Negara dan Destinasi Tujuan Wisata',
            content: `Halo, Traveler!! 🌍
<br>
<br>

Merencanakan liburan pertama bisa jadi seru sekaligus bikin bingung, apalagi kalau kamu ingin memilih negara yang cocok buat traveling pertama kali. Kamu jangan khawatir! Bersama Airstra, menentukan negara dan destinasi tujuan wisata jadi lebih mudah dan menyenangkan. Simak cara memilih destinasi wisata impian kamu dengan Airstra yang bisa bikin perjalanan lebih praktis!
<br>
<br>

<strong>Pertimbangkan Minat & Aktivitas Favorit Kamu!🌄🏙️</strong>
<br>
Tentukan dulu, apa yang paling kamu sukai? Pantai dengan suasana yang menenangkan atau suasana kota yang ramai? Melalui fitur Travelinspo, kamu bisa menjelajah foto-foto destinasi yang diunggah pengguna lain. Ini bisa jadi referensi kamu untuk mengenal berbagai negara, mulai dari suasana hingga budaya lokalnya. Setiap foto yang kamu lihat bisa membantumu mempersempit pilihan!
<br>
<br>

<strong>Lakukan Obrolan bersama di Fitur In-flight Chat Room 💬✨</strong>
<br>
Pilih destinasi yang direkomendasikan sesama traveler! Kamu bisa bergabung di ruang obrolan in-flight bersama pengguna lain untuk bertanya, berbagi rekomendasi destinasi, atau bahkan menemukan teman seperjalanan! 
<br>
<br>

Jadi, sudah siap liburan bersama Airstra? Dengan berbagai fitur Airstra, perjalanan pertama kamu akan terasa lebih seru dan asik! `
        },
        'safe': {
            title: 'Cara bepergian dengan aman',
            content: `
<strong>Rencanakan Perjalanan dengan Baik 🗺️📌</strong>
<br>
Sebelum berangkat, buatlah rencana perjalanan yang rinci. Tentukan destinasi wisata, akomodasi, dan kegiatan yang ingin dilakukan. Dengan ini, kamu tidak akan kebingungan setelah sampai di tempat tujuan.
<br>
<br>

<strong>Siapkan Dokumen Penting 📄🔗</strong>
<br>
Pastikan semua dokumen penting seperti tiket pesawat, paspor, dan visa (jika diperlukan) sudah siap. Simpan salinan dokumen penting ini di tempat terpisah sebagai antisipasi jika terjadi kehilangan.
<br>
<br>

<strong>Urus Paspor dan Visa Sejak Jauh-Jauh Hari</strong>
<br>
Jangan menunggu hingga mendekati tanggal keberangkatan untuk mengurus paspor dan visa. Mengurus paspor dan visa bisa memakan waktu. Jadi… pastikan semuanya sudah selesai jauh hari sebelum perjalanan!
<br>
<br>

<strong>Bawa Uang Tunai dan Kartu Pembayaran 💸💳</strong>
<br>
Tukarkan uang ke mata uang lokal sebelum berangkat dan bawa sedikit uang tunai untuk kebutuhan mendesak. Selain itu, pastikan kartu kredit atau debit kamu dapat digunakan di luar negeri.
<br>
<br>

<strong>Pelajari Bahasa Dasar 💬🌐</strong>
<br>
Mempelajari beberapa kata atau kalimat dasar dalam bahasa negara tujuan dapat sangat membantu. Ini akan memudahkan komunikasi antara kamu dan penduduk setempat!
<br>
<br>

<strong>Gunakan Aplikasi Navigasi 🧭🗺️</strong>
<br>
Unduh aplikasi navigasi yang dapat membantumu menemukan jalan atau arah di negara asing. Ini akan mengurangi risiko kamu tersesat!
<br>
<br>

<strong>Jaga Barang Berharga 💳📱</strong>
<br>
Simpan barang berharga seperti uang, paspor, dan gadget di tempat yang aman. Gunakan tas yang memiliki pengaman dan hindari menunjukkan barang berharga di tempat umum.
<br>
<br>

<strong>Kenali Budaya Setempat</strong>
<br>
Sebelum berangkat, lakukan eksplorasi mengenai budaya dan kebiasaan setempat. Ini akan membantu kamu beradaptasi dan menghindari tindakan yang dianggap tidak sopan.
<br>
<br>

<strong>Ikuti Aturan dan Peraturan yang Berlaku ❗</strong>
<br>
Setiap negara memiliki aturan dan peraturan yang berbeda. Pastikan untuk mematuhi semua hukum setempat untuk menghindari masalah hukum.
<br>
<br>

Dengan mengikuti tips dan trik ini, kamu dapat memastikan perjalananmu ke luar negeri berjalan dengan aman dan menyenangkan. Selamat berlibur! :earth_africa::airplane:`
        }
    }

const getLocation = () => {
    setIsChecking(true)
    setTimeout(() => {
        setResult('ok')
        setIsChecking(false)
    }, 3000);
}

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className = "flex flex-col p-0 gap-2" variant={'ghost'}>
            <img className = "min-w-24 h-24 p-2 rounded-3xl bg-gradient-to-b from-lime-300 to-lime-400" src = "https://cdn3d.iconscout.com/3d/premium/thumb/travel-guide-book-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--instruction-tourist-adventure-pack-holidays-illustrations-3626605.png?f=webp"/>
            <span className = "max-w-20">Panduan <br/>Pemula</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full p-8 max-h-[calc(100%-2rem)] overflow-y-auto">        
        {(mode === 'preview') ? (<>
            <DialogHeader className="w-full">
            <DialogTitle className="text-3xl font-semibold text-qmaroon-500">Panduan Pemula</DialogTitle>
            <DialogDescription className = "flex flex-col gap-2">
                <span>Berbagai tips dan trik keren yang sudah terkurasi siap buat bantu kamu jelajahi dunia!</span>
            </DialogDescription>
            </DialogHeader>

            <div className = "w-full rounded-3xl h-64 relative mt-2 bg-gradient-to-b from-lime-400 to-lime-200">
                <img className = "w-[200px] p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src = "https://cdn3d.iconscout.com/3d/premium/thumb/travel-guide-book-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--instruction-tourist-adventure-pack-holidays-illustrations-3626605.png?f=webp"/>
            </div>

            <hr/>

            <Label>Pilih topik:</Label>

            <div className = "flex flex-col gap-4">
                <Button variant={'ghost'} onClick={() => {setMode('article'); setArticle('items')}} className = "border border-slate-400/50">Menentukan barang yang harus dibawa</Button>
                <Button variant={'ghost'} onClick={() => {setMode('article'); setArticle('country')}} className = "border border-slate-400/50">Menentukan negara dan destinasi tujuan wisata</Button>
                <Button variant={'ghost'} onClick={() => {setMode('article'); setArticle('safe')}} className = "border border-slate-400/50">Cara bepergian dengan aman</Button>
            </div>
        </>) : (
            <>
                    <DialogHeader className="w-full">
          <DialogTitle className="text-3xl font-semibold text-qmaroon-500">{articleData[article].title}</DialogTitle>
        </DialogHeader>

                <div dangerouslySetInnerHTML={{ __html: articleData[article].content}}></div>

                <DialogFooter>
                    <Button onClick={() => {setMode('preview')}}>Kembali</Button>
                </DialogFooter>
            </>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default NewbieDialog;
