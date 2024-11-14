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

const LuggageDialog = () => {
  // Moved the state inside the component
  const [id, setId] = useState<string[]>([])
  const [result, setResult] = useState<string>()
  const [isChecking, setIsChecking] = useState<boolean>(false)

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
        <img className = "min-w-24 h-24 rounded-3xl bg-gradient-to-b from-orange-400 to-orange-200" src = "https://cdn3d.iconscout.com/3d/premium/thumb/luggage-3d-icon-download-in-png-blend-fbx-gltf-file-formats--travel-baggage-trolley-bag-summer-beach-vacation-pack-island-icons-5043770.png?f=webp"/>
            <span>Pelacak <br/>Koper</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full p-8">
        <DialogHeader className="w-full">
          <DialogTitle className="text-3xl font-semibold text-qmaroon-500">Pelacak koper</DialogTitle>
          <DialogDescription className = "flex flex-col gap-2">
            <span>Ketikkan ID koper yang akan dilacak untuk menemukan lokasi terkini koper.</span>

            <small>Catatan: Luggage Trackert tidak benar-benar memiliki backend. Koordinat yang ditampilkan hanyalah koordinat acak.</small>
          </DialogDescription>
        </DialogHeader>

        {(result) ? (
            <>
                <div className = "relative">
                    <img src = "/maps.png" className = "rounded-3xl"></img>

                    <div className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                        <div className = "px-4 py-2.5 bg-white rounded-full text-xs border shadow-md">{id}</div>
                        <MapPin className = "text-red-500" size = {32} weight="fill"/>
                    </div>
                </div>

                <DialogFooter>          
                    <Button onClick={() => {setId(''); setResult(false)}}>Lacak lagi</Button>
                </DialogFooter>
            </>
        ) : (
            <>
                <div className = "w-full rounded-3xl h-64 relative mt-2 bg-gradient-to-b from-orange-400 to-orange-200">
                    <img src = "https://cdn3d.iconscout.com/3d/premium/thumb/luggage-3d-icon-download-in-png-blend-fbx-gltf-file-formats--travel-baggage-trolley-bag-summer-beach-vacation-pack-island-icons-5043770.png?f=webp" className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px]"/>
                </div>

                <hr/>

                <Label>ID koper</Label>
                <Input onChange={(event) => setId(event.target.value)} value={id}/>

                <DialogFooter>          
                <Button type="submit" className = "flex gap-2" onClick={getLocation} disabled={id.length == 0 || isChecking}>
                    {isChecking && (
                    <SpinnerGap size = {20} className = "animate-spin"/>
                    )

                    }
                    Lacak</Button>
                </DialogFooter>
            </>
        )}

      </DialogContent>
    </Dialog>
  )
}

export default LuggageDialog;
