import Footer from '@/components/custom/footer';
import Hero from '@/components/custom/landing/hero';

export default function Home() {
    return (
        <main className="">
            <Hero />

            <section className="rounded-[3.5rem] mx-auto flex flex-col py-16">
                <div className="rounded-[3.5rem] lg:p-16 max-md:p-8 flex flex-col gap-8">
                    <h1></h1>
                    <h2 className="text-5xl text-qmaroon-500 font-semibold text-center">Fitur</h2>
                    <h2 className="text-xl font-normal max-w-screen-lg mx-auto text-center opacity-75">
                      Airstra memiliki berbagai fitur yang siap membantumu.
                    </h2>
          
                    <div className = "flex grid lg:grid-cols-2 gap-4 w-full text-lg">
                        <div className="p-12 border border-slate-400/50 rounded-3xl w-full flex flex-col gap-4">
                          <div className='flex flex-col lg:flex-row gap-8'>
                              <img className = "min-w-24 w-fit h-24 p-2 rounded-3xl bg-gradient-to-b from-lime-300 to-lime-400" src = "https://cdn3d.iconscout.com/3d/premium/thumb/travel-guide-book-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--instruction-tourist-adventure-pack-holidays-illustrations-3626605.png?f=webp"/>

                              <div className = "flex flex-col gap-2">
                              <h3 className="text-3xl font-semibold text-zinc-800">Panduan Pemula</h3>
                              <span className="opacity-75">Tidak perlu bingung lagi karena tersedia panduan langkah demi langkah bagi kamu, mulai dari proses check-in hingga duduk nyaman di pesawat!
                              </span>
                              </div>
                          </div>
                        </div>

                        <div className="p-12 border border-slate-400/50 rounded-3xl w-full flex flex-col gap-4">
                          <div className='flex flex-col lg:flex-row gap-8'>
                          <img className = "min-w-24 w-fit h-24 rounded-3xl bg-gradient-to-b from-orange-400 to-orange-200" src = "https://cdn3d.iconscout.com/3d/premium/thumb/luggage-3d-icon-download-in-png-blend-fbx-gltf-file-formats--travel-baggage-trolley-bag-summer-beach-vacation-pack-island-icons-5043770.png?f=webp"/>

                              <div className = "flex flex-col gap-2">
                              <h3 className="text-3xl font-semibold text-zinc-800">Pelacak Koper</h3>
                              <span className="opacity-75">Tidak perlu khawatir koper tersesat! Kamu dapat memantau lokasi bagasi langsung dari aplikasi dan memastikan koper aman sampai tujuan.
                              </span>
                              </div>
                          </div>
                        </div>

                        <div className="p-12 border border-slate-400/50 rounded-3xl w-full flex flex-col gap-4">
                          <div className='flex flex-col lg:flex-row gap-8'>
                          <img className="min-w-24 w-fit h-24 rounded-3xl bg-gradient-to-b from-violet-300 to-violet-400" src="https://cdn3d.iconscout.com/3d/premium/thumb/open-luggage-3d-icon-download-in-png-blend-fbx-gltf-file-formats--hello-logo-bag-suitcase-halloween-travel-element-pack-icons-8904803.png?f=webp" alt="PackAI Icon" />

                              <div className = "flex flex-col gap-2">
                              <h3 className="text-3xl font-semibold text-zinc-800">PackAI</h3>
                              <span className="opacity-75">Agar tidak bingung, cukup tuliskan daftar barang yang ingin kamu bawa, dan AI AIRSTRA akan memberi tahu mana yang aman dibawa di kabin, mana yang harus masuk bagasi, serta barang-barang yang tidak boleh dibawa.
                              </span>
                              </div>
                          </div>
                        </div>

                        <div className="p-12 border border-slate-400/50 rounded-3xl w-full flex flex-col gap-4">
                          <div className='flex flex-col lg:flex-row gap-8'>
                              <img className = "min-w-24 w-fit h-24 p-2 rounded-3xl bg-gradient-to-b from-indigo-300 to-indigo-400" src = "https://static.vecteezy.com/system/resources/thumbnails/045/686/337/small/console-game-controller-3d-item-free-png.png"/>

                              <div className = "flex flex-col gap-2">
                              <h3 className="text-3xl font-semibold text-zinc-800">Permainan dalam Pesawat</h3>
                              <span className="opacity-75">Bosan selama penerbangan? Coba berbagai permainan seru tanpa memerlukan koneksi internet, dengan pilihan permainan yang akan membuat pengalaman penerbangan kamu lebih menyenangkan dan tidak membosankan!
                              </span>
                              </div>
                          </div>
                        </div>

                        <div className="p-12 border border-slate-400/50 rounded-3xl w-full flex flex-col gap-4">
                          <div className='flex flex-col lg:flex-row gap-8'>
                              <img className = "min-w-24 w-fit h-24 p-2 rounded-3xl bg-gradient-to-b from-yellow-500 to-yellow-400" src = "https://cdn3d.iconscout.com/3d/free/thumb/free-chat-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--message-communication-chatting-conversation-messaging-user-interface-pack-illustrations-4715767.png"/>

                              <div className = "flex flex-col gap-2">
                              <h3 className="text-3xl font-semibold text-zinc-800">Ruang Obrolan</h3>
                              <span className="opacity-75">Ingin mencari teman ngobrol? Cobalah untuk mengobrol bersama penumpang lain! AIRSTRA menyediakan ruang obrolan di pesawat untuk berinteraksi, berbagi pengalaman, atau sekadar menyapa.
                              </span>
                              </div>
                          </div>
                        </div>

                        <div className="p-12 border border-slate-400/50 rounded-3xl w-full flex flex-col gap-4">
                          <div className='flex flex-col lg:flex-row gap-8'>
                              <img className = "min-w-24 w-fit h-24 p-2 rounded-3xl bg-gradient-to-b from-indigo-300 to-indigo-400" src = "https://cdn3d.iconscout.com/3d/premium/thumb/travel-ticket-3d-icon-download-in-png-blend-fbx-gltf-file-formats--air-flight-pass-boarding-holiday-pack-holidays-icons-5843464.png?f=webp"/>

                              <div className = "flex flex-col gap-2">
                              <h3 className="text-3xl font-semibold text-zinc-800">Beli Tiket</h3>
                              <span className="opacity-75">Tidak perlu repot antre lama-lama! Kamu dapat memeriksa jadwal hingga memesan tiket langsung di AIRSTRA.
                              </span>
                              </div>
                          </div>
                        </div>

                        <div className="p-12 border border-slate-400/50 rounded-3xl w-full flex flex-col gap-4">
                          <div className='flex flex-col lg:flex-row gap-8'>
                              <img className = "min-w-24 w-fit h-24 p-2 rounded-3xl bg-gradient-to-b from-orange-300 to-orange-400" src = "https://cdn3d.iconscout.com/3d/premium/thumb/medal-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--badge-star-performance-award-education-pack-school-illustrations-4089421.png"/>

                              <div className = "flex flex-col gap-2">
                              <h3 className="text-3xl font-semibold text-zinc-800">Media Sosial dan Prestasi</h3>
                              <span className="opacity-75">Setiap penerbangan, kamu bisa mendapatkan medali daring dan membagikan pengalaman seru Anda di Travelinspo. Kumpulkan pencapaian, bagikan momen-momen menarik kamu agar perjalanan menjadi lebih berkesan!
                              </span>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
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