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
import { Check, Cross, Spinner, SpinnerGap, X } from "@phosphor-icons/react/dist/ssr"

const PackDialog = () => {
  // Moved the state inside the component
  const [items, setItems] = useState<string[]>([])
  const [result, setResult] = useState<string[]>([])
  const [isChecking, setIsChecking] = useState<boolean>(false)

  const getResponse = async () => {
    try {
      setIsChecking(true)
      const response = await fetch('/api/pack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `Obat yang boleh dibawa:
Obat dengan resep. Jumlah: persediaan untuk 1 bulan atau kurang
Obat tanpa resep. Jumlah: persediaan untuk 2 bulan atau kurang
Vitamin. Jumlah: persediaan 2 bulan atau kurang
Kosmetik/perawatan bebas resep. Jumlah: 24 barang atau kurang (penggunaan obat luar)
Alat kesehatan (ex: inhaler untuk asma). Jumlah: 1 buah per orang

Obat yang tidak boleh dibawa:
Narkotika
Obat yang mengandung Pseudoephedrine atau Codeine
Opium, stimulan, termasuk obat-obatan tertentu untuk perawatan ADD / ADHD (seperti Adderall, Vyvanse dan Dexedrine)

Barang yang tidak boleh dibawa:
Kembang api dan petasan
Pemutih
Insektisida dan pestisida
Tabung oksigen olahraga
Yang harus dibawa:
Tiket Pesawat
Boarding Pass (jika sudah check-in online)
ID Card
Paspor
Visa Jepang (jika diperlukan)
ID Card 
Uang (maksimal 1 juta yen, kalo lebih harus lapor ke petugas bea cukai)
Barang yang Harus Masuk ke Bagasi:
Cairan, gel atau aerosol yang melebihi  100 ml
Peralatan olahraga dan alat berat
Barang tajam
Barang dengan aroma kuat atau mudah rusak

Barang yang harus masuk kabin:
Baterai cadangan dan power bank di bawah 20.000 mAh
Barang berharga
Obat-obatan dan alat medis yang diperlukan selama penerbangan
Gas atau bahan yang mudah terbakar (ex: butana, korek api besar, cat semprot, dll)

berdasarkan daftar barang-barang tersebut, dapatkan anda berperan menjadi seorang packing assistant yang membantu user dengan cara memberi tahu barang yang di inputkan oleh user tidak boleh bawa dan boleh dibawa, jika iya, lebih baik diletakkan di kabin atau di koper (bisa juga keduanya). berikan respon dalam bentuk json, yang strukturnya terdiri: {name: (nama item, string), allowed: (boolean), reason: (alasan, string)}, tanpa menggunakan linebreak "\n" dan escape character "\". meski item tunggal, tetap gunakan []., daftar barang yang akan dibawa: ${items}. anda tidak perlu memasukkan penejelasan barang-barang sebelumnya pada output.`,
        }),
      })
  
      const data = await response.json()
      setResult(JSON.parse(data.message[0].text.replaceAll('\\n', '').replaceAll('\\', '')))
      setIsChecking(false)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex flex-col p-0 gap-2" variant={'ghost'}>
          <img className="min-w-24 h-24 rounded-3xl bg-gradient-to-b from-violet-300 to-violet-400" src="https://cdn3d.iconscout.com/3d/premium/thumb/open-luggage-3d-icon-download-in-png-blend-fbx-gltf-file-formats--hello-logo-bag-suitcase-halloween-travel-element-pack-icons-8904803.png?f=webp" alt="PackAI Icon" />
          <span>PackAI</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full p-8 max-h-[calc(100%-2rem)] overflow-y-auto">
        <DialogHeader className="w-full">
          <DialogTitle className="text-3xl font-semibold text-qmaroon-500">PackAI</DialogTitle>
          <DialogDescription>
            Ketikkan barang yang mau kamu bawa, dan PackAI akan membantumu menentukan. Tekan Enter untuk menambahkan barang.
          </DialogDescription>
        </DialogHeader>


        {(!result || result.length == 0) && (
          <>
            <div className = "w-full rounded-3xl h-64 relative mt-2 bg-gradient-to-b from-violet-300 to-violet-400">
                <img src = "https://cdn3d.iconscout.com/3d/premium/thumb/open-luggage-3d-icon-download-in-png-blend-fbx-gltf-file-formats--hello-logo-bag-suitcase-halloween-travel-element-pack-icons-8904803.png?f=webp" className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px]"/>
            </div>

            <hr/>
          </>
        )}

        <div className="flex flex-col w-full gap-2">
            <span className="text-sm font-medium">Negara tujuan:</span>

            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="h-full border-slate-400/50">
                  <SelectValue placeholder="Pilih negara" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="jp">
                      <div className="flex gap-2 items-center">
                        <JP className="rounded h-6 border border-slate-400/50" /> <span>Jepang</span>
                      </div>
                    </SelectItem>

                    <SelectItem value="us">
                      <div className="flex gap-2 items-center">
                        <US className="rounded h-6 border border-slate-400/50" /> <span>Amerika Serikat</span>
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <hr/>

        <div className="flex items-center w-full">
          <span className = "font-medium text-sm mr-auto">Barangmu:</span>

          {result && result.length !== 0 && (
            <Button onClick={() => setResult([])}>Reset</Button>
          )}

        </div>

        {(result.length != 0) ? (
          <div className="bg-slate-100 p-4 rounded-3xl flex flex-col gap-2 max-h-[50vh] overflow-y-auto">
                      {result.map((item, index) => (
              <div key={index} className="p-4 border rounded-2xl bg-white flex flex-col gap-2">
                <div className = "flex gap-2 items-center">
                  {(item.allowed) ? (
                    <Check size = {20} className = "text-green-500" weight="bold"/>
                  ) : (
                    <X size = {20} className = "text-red-500" weight="bold"/>
                  )}
                  <h3 className = "font-semibold">{item.name}</h3>
                </div>
                {(item.reason) && (
                  <p className = "text-sm opacity-70">Alasan: {item.reason}</p>
                )}
              </div>

            ))}
          </div>
        ) : (
          <div className="w-full">
            <InputTags value={items} onChange={setItems} />
          </div>
        )}

        <DialogFooter>          
          <Button type="submit" className = "flex gap-2" onClick={getResponse} disabled={items.length == 0 || isChecking}>
            {isChecking && (
              <SpinnerGap size = {20} className = "animate-spin"/>
            )

            }
            Periksa</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default PackDialog;
