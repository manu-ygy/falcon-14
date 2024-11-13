import Footer from '@/components/custom/footer';
import Hero from '@/components/custom/landing/hero';

export default function Home() {
    return (
        <main className="">
            <Hero />

            <section className="rounded-[3.5rem] mx-auto flex flex-col py-16">
                <div className="rounded-[3.5rem] lg:p-16 max-md:p-8 flex flex-col gap-8">
                    <h1></h1>
                    <h2 className="text-5xl font-black text-center mx-auto uppercase text-zinc-800">Airstra</h2>
                    <h2 className="text-xl font-normal max-w-screen-lg mx-auto text-center opacity-75">
                  Kami berkomitmen membentuk pribadi pembelajar yang cerdas dan berbudi pekerti luhur melalui pendidikan visioner yang berlandaskan nilai-nilai Kristiani dan kemanusiaan universal. Kami percaya dalam mengembangkan individu secara menyeluruh, bukan hanya cerdas secara akademis, tetapi juga berkomitmen untuk memperjuangkan dan menjaga martabat setiap manusia.</h2>
          
                    <div className = "flex flex-row max-md:flex-col gap-4 w-full text-lg">
                        <div className="p-12 border border-slate-300/70 rounded-3xl w-full flex flex-col gap-4">
                            <h3 className="text-3xl font-black uppercase text-zinc-800">Visi</h3>
                            <span className="opacity-75">Insan Pembelajar Yang Cerdas & Berbudi Pekerti. </span>
                        </div>

                        <div className="p-12 border border-slate-300/70 rounded-3xl w-full flex flex-col gap-4">
                            <h3 className="text-3xl font-black uppercase text-zinc-800">Misi</h3>
                            <ul className="opacity-75 flex flex-col gap-4">
                                <li>1. Mengembangkan pendidikan yang visioner berdasarkan nilai-nilai kristiani dan nilai kemanusiaan universal</li>
                                <li>2. Mengembangkan pribadi utuh yang memperjuangkan dan mengembangkan martabat manusia.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}

const HeadMasters = () => {
    return (
        <section className = "relative flex flex-col lg:flex-row h-fit">
            <img src="/images/guru/suhenda.png" width={312} height={312} alt = "Suhenda, S.Pd"/>

            <div className = "flex flex-col text-slate-500">
                <h2 className="text-3xl text-start py-">Membangun Pribadi Berintegritas</h2>
                <p className="text-lg leading-relaxed">Kami membekali siswa dengan keterampilan, kreativitas, dan karakter unggul. Di SMA Yosuka, siswa dididik untuk terampil, menikmati pembelajaran edutaiment, menjunjung nilai religius, menguasai bahasa asing, serta aktif dan inovatif dalam menghadapi tantangan global.</p>
            </div>
        </section>
    );

    {/*
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
    </div>
    */}
};