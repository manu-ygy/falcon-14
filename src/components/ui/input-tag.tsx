import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input, InputProps } from "@/components/ui/input";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { XIcon } from "lucide-react";
import { Dispatch, SetStateAction, forwardRef, useState } from "react";

type InputTagsProps = InputProps & {
  value: string[];
  onChange: Dispatch<SetStateAction<string[]>>;
};

export const InputTags = forwardRef<HTMLInputElement, InputTagsProps>(
  ({ value, onChange, ...props }, ref) => {
    const [pendingDataPoint, setPendingDataPoint] = useState("");

    const addPendingDataPoint = () => {
      if (pendingDataPoint) {
        const newDataPoints = new Set([...value, pendingDataPoint]);
        onChange(Array.from(newDataPoints));
        setPendingDataPoint("");
      }
    };

    return (
      <>
        <div className="rounded-xl min-h-16 flex overflow-y-auto p-4 flex gap-2 flex-wrap items-center bg-slate-100 mb-4">
          {value.map((item, idx) => (
            <Badge key={idx} className = "!bg-white shadow-none text-zinc-900">
              {item}
              <button
                type="button"
                className="w-3 ml-2"
                onClick={() => {
                  onChange(value.filter((i) => i !== item));
                }}
              >
                <XIcon className="w-3" />
              </button>
            </Badge>
          ))}

          {
            value.length == 0 && (
              <span className = "opacity-70 text-center w-full text-sm">Belum ada barang. Ketik untuk tambahkan...</span>
            )
          }
        </div>

        <div className="flex gap-2">
          <Input
            value={pendingDataPoint}
            onChange={(e) => setPendingDataPoint(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addPendingDataPoint();
              }
            }}
            {...props}
            ref={ref}
            placeholder="Ketik barang disini..."
          />
          <Button
            type="button"
            onClick={addPendingDataPoint}
            className = "flex gap-2"
          >
            <Plus/>
            Tambah
          </Button>
        </div>
      </>
    );
  }
);