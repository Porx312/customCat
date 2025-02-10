"use client"

import { useState, useRef } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import html2canvas from "html2canvas"
import Hat from "./accesories/Accesory"
import Accesory from "./accesories/Accesory"

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
]

const colors = [
  "#98FB98", // light green
  "#FFD700", // yellow
  "#FFA500", // orange
  "#00FF7F", // green
  "#00BFFF", // blue
  "#4B0082", // indigo
  "#FF69B4", // pink
  "#FF0000", // red
  "#DC143C", // crimson
  "#000000", // black
]

export default function CatCustomizer() {
  const [selectedHat, setSelectedHat] = useState("")
  const [selectedBowtie, setSelectedBowtie] = useState("")
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>(["Balloons"])
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [isSaving, setIsSaving] = useState(false)
  const dinoRef = useRef<HTMLDivElement>(null)

  const handleAccessoryToggle = (accessory: string) => {
    setSelectedAccessories((prev) =>
      prev.includes(accessory) ? prev.filter((a) => a !== accessory) : [...prev, accessory],
    )
  }

  const handleRandomize = () => {
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

  const saveDino = async () => {
    if (!dinoRef.current) return

    try {
      setIsSaving(true)

      // Capturar el área del dinosaurio
      const canvas = await html2canvas(dinoRef.current, {
        backgroundColor: null,
        scale: 2, // Mayor calidad
      })

      // Convertir a blob
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob(
          (blob) => {
            resolve(blob!)
          },
          "image/png",
          1.0,
        )
      })

      // Crear URL y link de descarga
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "my-custom-dino.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error saving dino:", error)
    } finally {
      setIsSaving(false)
    }
  } 

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full flex gap-8">
        <div className="w-1/2 space-y-6">
          {/* Close button */}
          <div className="flex justify-end">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Hat selector */}
          <Select value={selectedHat} onValueChange={setSelectedHat}>
            <SelectTrigger className="w-full border-2 border-black">
              <SelectValue placeholder="Gorra" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="macdonal">macdonal</SelectItem>
              <SelectItem value="crown">Crown</SelectItem>
              <SelectItem value="cap">Cap</SelectItem>
            </SelectContent>
          </Select>

          {/* Color picker for hat */}
          <div className="flex gap-1">
            {colors.map((color) => (
              <button
                key={color}
                className="w-6 h-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>

          {/* Bowtie selector */}
          <Select value={selectedBowtie} onValueChange={setSelectedBowtie}>
            <SelectTrigger className="w-full border-2 border-black">
              <SelectValue placeholder="lentes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lentes">Doflamingo</SelectItem>
              <SelectItem value="tie">Tie</SelectItem>
              <SelectItem value="scarf">Scarf</SelectItem>
            </SelectContent>
          </Select>

          {/* Color picker for bowtie */}
          <div className="flex gap-1">
            {colors.map((color) => (
              <button
                key={color}
                className="w-6 h-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>

          {/* Accessories */}
          <div className="grid grid-cols-2 gap-4">
            {accessories.map((accessory) => (
              <div key={accessory} className="flex items-center space-x-2">
                <Checkbox
                  id={accessory}
                  checked={selectedAccessories.includes(accessory)}
                  onCheckedChange={() => handleAccessoryToggle(accessory)}
                />
                <label
                  htmlFor={accessory}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {accessory}
                </label>
              </div>
            ))}
          </div>

          {/* Color picker for accessories */}
          <div className="flex gap-1">
            {colors.map((color) => (
              <button
                key={color}
                className="w-6 h-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full border-2 border-black" onClick={handleRandomize}>
              Randomize all
            </Button>
            <Button variant="outline" className="w-full border-2 border-black" onClick={handleClear}>
              Clear all
            </Button>
          </div>

          {/* Save button */}
          <Button
            className="w-full bg-green-300 hover:bg-green-400 text-black border-2 border-black"
            onClick={saveDino}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save my Cat ↓"}
          </Button>
        </div>

        {/* Dino preview */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="relative" ref={dinoRef}>
          <Accesory accesory={selectedHat} name="Hat" classname="-top-1 left-32"/>
          <Accesory accesory={selectedBowtie} name="lentes" classname="top-20 left-32"/>

            <img
              src="/images/cat.jpg"
              alt="cat preview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

