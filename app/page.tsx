import FeedCarousel from "@/components/custom/feed-carousel";
import Footer from "@/components/custom/footer";
import GrandNavigation from "@/components/custom/grand-nav";
import Hero from "@/components/custom/hero";
import ArticleSection from "@/components/custom/landing/articles-section";
import SocialSection from "@/components/custom/landing/social-section";
import TerbaikSection from "@/components/custom/landing/terbaik-section";
import WelcomeSection from "@/components/custom/landing/welcome-section";
import Navbar from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GearFine, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="-mt-28">
      <Navbar landing={true} />
      <Hero />
      <WelcomeSection />
      <Separator />
      <div className="bg-blue-950 py-16 p-8 mx-auto flex flex-row items-center justify-center relative">
        <div className="flex flex-col md:flex-row max-w-screen-xl items-center justify-center gap-16">
          <div className="flex flex-col items-center justify-center z-10 rounded-2xl overflow-clip">
            <div className="overflow-clip bg-white/20 backdrop-blur-sm">
              <Image src="/images/guru/suhenda.png" width={800} height={800} alt="Kepala Sekolah" className=" scale-150 -translate-y-24 h-96 aspect-square object-cover object-center w-full" />
              <div className="flex flex-col items-center justify-center p-4 bg-white w-full">
                <span className="text-xl font-bold">Suhenda, S.Pd</span>
                <span className="">Kepala Sekolah SMA Yos Sudarso Karawang</span>
              </div>
            </div>

          </div>
          <div className="flex flex-col flex-1 gap-4 z-10 bg-white p-10 rounded-3xl">
            <h2 className="text-3xl font-black text-start py-">Membangun Pribadi Berintegritas</h2>
            <p className="text-lg leading-relaxed">Kami membekali siswa dengan keterampilan, kreativitas, dan karakter unggul. Di SMA Yosuka, siswa dididik untuk terampil, menikmati pembelajaran edutaiment, menjunjung nilai religius, menguasai bahasa asing, serta aktif dan inovatif dalam menghadapi tantangan global.</p>
          </div>
        </div>
        <Image className="opacity-20 absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full" src="/images/gedung.jpg" alt="Gedung SMA Yos Sudarso Karawang" width={1280} height={720} />
      </div>
      <Separator />
      <TerbaikSection />
      <SocialSection />
      <GrandNavigation />
      <Footer />
    </main >
  );
}
