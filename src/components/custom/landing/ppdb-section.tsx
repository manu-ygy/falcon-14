import { Button } from "../../ui/button";
import Image from "next/image";

const PPDBSection = () => {
    return (
        <section className = "p-16 flex flex-col flex-row gap-4 items-center text-center">
            <div className='flex flex-col gap-2 items-center text-center max-md:px-8'>
                <span className="text-2xl font-bold mx-auto uppercase text-zinc-700">telah dibuka</span>
                <div className='bg-primary-gradient bg-clip-text'>
                    <h2 className="text-7xl font-black mx-auto thumbnail mb-4 text-transparent">PPDB 2025/2026</h2>
                </div>
            </div>

            <span className="text-lg lg:w-1/2 opacity-75 mb-12">Kami telah membuka PPDB tahun 2024/2025.</span>

            <Image src = "/images/poster-ppdb.jpeg" width = {512} height = {256} alt = {'Poster PPDB'}/>

            <div className = "flex max-md:flex-col justify-center items-center gap-2">
                <Button className = "lg:w-max">Informasi PPDB</Button>
                <Button className = "lg:w-fit">Kontak (Bu Jeje)</Button>
            </div>
        </section>
    )
}

export default PPDBSection;