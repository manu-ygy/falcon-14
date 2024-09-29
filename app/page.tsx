import FeedCarousel from "@/components/custom/feed-carousel";
import Footer from "@/components/custom/footer";
import GrandNavigation from "@/components/custom/grand-nav";
import Hero from "@/components/custom/hero";
import TerbaikSection from "@/components/custom/landing/terbaik-section";
import Navbar from "@/components/custom/navbar";
import { Separator } from "@/components/ui/separator";
import { GearFine } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Home() {
  return (
    <main className="-mt-28">
      <Navbar landing={true} />
      <Hero/>
      <div className="absolute h-[150svh] min-h-svh top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/20  to-blue-950/80 bg-black -z-20"></div>
      <div className="min-h-svh bg-white rounded-[3.5rem] py-16 p-8 mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-5xl font-black text-center">FOLLOW US ON INSTAGRAM</h2>
        <div className="grid grid-cols-4 gap-4 w-full">
          <div className="aspect-square w-full h-auto bg-green-400 rounded-2xl even:mt-20"></div>
          <div className="aspect-square w-full h-auto bg-green-400 rounded-2xl even:mt-20"></div>
          <div className="aspect-square w-full h-auto bg-green-400 rounded-2xl even:mt-20"></div>
          <div className="aspect-square w-full h-auto bg-green-400 rounded-2xl even:mt-20"></div>
        </div>
      </div>
      <div className="rounded-[3.5rem] px-8 mx-auto flex flex-col gap-4">
        <Separator />
        <div className="rounded-[3.5rem] p-8">
          <h2 className="text-5xl font-black p-4 text-center mx-auto">Selamat Datang di YOSUKA</h2>
          <h2 className="text-xl font-normal max-w-screen-lg mx-auto text-center">
            Kami berkomitmen membentuk pribadi pembelajar yang cerdas dan berbudi pekerti luhur melalui pendidikan visioner yang berlandaskan nilai-nilai Kristiani dan kemanusiaan universal. Kami percaya dalam mengembangkan individu secara menyeluruh, bukan hanya cerdas secara akademis, tetapi juga berkomitmen untuk memperjuangkan dan menjaga martabat setiap manusia.</h2>
        </div>
        <Separator />
      </div>
      <div className="h-svh min-h-svh bg-white rounded-[3.5rem] py-16 p-8 mx-auto flex flex-row gap-4 items-center justify-center">
        <FeedCarousel />
        <div className="bg-red-300 w-1/3 h-full rounded-[3.5rem]"></div>
      </div>
      <Separator />

      <div className="bg-blue-200 py-16 p-8 mx-auto flex flex-row items-center justify-center relative">
        <div className="flex flex-row max-w-screen-xl items-center justify-center gap-16">
          <div className="flex flex-col items-center justify-center z-10">
            <div className="border-2 border-border border-dashed overflow-clip bg-white/20 backdrop-blur-sm">
              <Image src="/images/guru/suhenda.png" width={800} height={800} alt="Kepala Sekolah" className=" scale-150 -translate-y-24 h-96 aspect-square object-cover object-center w-full" />
              <div className="flex flex-col items-center justify-center p-4 bg-white w-full">
                <span className="text-xl font-bold">Suhenda, S.Pd</span>
                <span className="">Kepala Sekolah SMA Yos Sudarso Karawang</span>
              </div>
            </div>

          </div>
          <div className="flex flex-col flex-1 gap-4 z-10 bg-white p-10 rounded-3xl">
            <h2 className="text-3xl font-black text-start py-">Membangun Pribadi Berintegritas</h2>
            <p className="text-2xl leading-relaxed">Kami membekali siswa dengan keterampilan, kreativitas, dan karakter unggul. Di SMA Yosuka, siswa dididik untuk terampil, menikmati pembelajaran edutaiment, menjunjung nilai religius, menguasai bahasa asing, serta aktif dan inovatif dalam menghadapi tantangan global.</p>
          </div>
        </div>
        <Image className="opacity-20 absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full" src="/images/gedung.jpg" alt="Gedung SMA Yos Sudarso Karawang" width={1280} height={720} />
      </div>
      <Separator />
      <TerbaikSection />
      <GrandNavigation />
      <Footer />
    </main>
  );
}
