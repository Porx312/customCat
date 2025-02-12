"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import html2canvas from "html2canvas";
import SelectItemsCat from "./Items/SelectItems";
import PushItem from "./Items/PushItem";
/* 
const accessories = [
  "Balloons",
  "Handlebar",
  "Mustache",
  "Sunglasses",
  "Glasses",
  "Mascara",
  "Eyelashes",
  "Skateboard",
  "Tattoo",
  "Fangs",
  "Ferris",
]; */


export default function CatCustomizer() {
  const [isSaving, setIsSaving] = useState(false);
  const dinoRef = useRef<HTMLDivElement>(null);

  /*   const handleAccessoryToggle = (accessory: string) => {
    setSelectedAccessories((prev) =>
      prev.includes(accessory) ? prev.filter((a) => a !== accessory) : [...prev, accessory],
    )
  }
 */
  /*  const handleRandomize = () => {
    setSelectedHat("macdonal")
    setSelectedBowtie("lentes")
    setSelectedAccessories(["Balloons"])
    setSelectedColor(colors[Math.floor(Math.random() * colors.length)])
  }

  const handleClear = () => {
    setSelectedHat("")
    setSelectedBowtie("")
    setSelectedAccessories([])
    setSelectedColor(colors[0])
  }
 */
  const saveDino = async () => {
    if (!dinoRef.current) return;

    try {
      setIsSaving(true);

      // Capturar el área del dinosaurio
      const canvas = await html2canvas(dinoRef.current, {
        backgroundColor: null,
        scale: 2, // Mayor calidad
      });

      // Convertir a blob
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob(
          (blob) => {
            resolve(blob!);
          },
          "image/png",
          1.0,
        );
      });

      // Crear URL y link de descarga
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "my-custom-cat.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error saving dino:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="   max-w-4xl w-full flex-wrap justify-center flex gap-8">
        <div className="w-[400px] bg-white shadow-lg p-6 rounded-lg flex flex-col gap-3">
          {/* Close button */}
          <div className="flex justify-end">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <SelectItemsCat />

          {/* Action buttons */}
          {/*  <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full border-2 border-black" onClick={handleRandomize}>
              Randomize all
            </Button>
            <Button variant="outline" className="w-full border-2 border-black" onClick={handleClear}>
              Clear all
            </Button>
          </div> */}
          {/* Save button */}
          <Button
            className="w-full bg-purple-400 hover:bg-purple-500 text-black border-2 border-black"
            onClick={saveDino}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save my Cat ↓"}
          </Button>
        </div>

        {/* Dino preview */}
        <div className="w-[320px] relative  flex items-center justify-center">
          <div className="relative" ref={dinoRef}>
            <PushItem />

            <img
              src="/images/cat.png"
              alt="cat preview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
