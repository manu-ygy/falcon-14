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
import { Label } from "@/components/ui/label"

const LuggageDialog = () => {
  // Moved the state inside the component

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className = "flex flex-col p-0 gap-2" variant={'ghost'}>
        <img className = "min-w-24 h-24 rounded-3xl" src = "https://media.istockphoto.com/id/1451724167/vector/3d-vector-yellow-suitcase-summer-holiday-time-to-travel-concept.jpg?s=612x612&w=0&k=20&c=D-8GdSmOA7M2Mf511MVA-TDnrUjXCEeHws0zn93kFkU="/>
            <span>Pelacak <br/>Koper</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full p-8 max-h-[calc(100%-2rem)] overflow-y-auto">
        <DialogHeader className="w-full">
          <DialogTitle className="text-3xl font-semibold text-qmaroon-500">Pesan tiket</DialogTitle>
          <DialogDescription>
            Pesan tiket dari Jakarta (CGK) ke Tokyo (NRT)
          </DialogDescription>
        </DialogHeader>

        <Label>ID koper</Label>
        <Input></Input>

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

export default LuggageDialog;
