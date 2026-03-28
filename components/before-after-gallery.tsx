"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { BeforeAfter } from "@/data/services"

interface BeforeAfterGalleryProps {
  images: BeforeAfter[]
}

export function BeforeAfterGallery({ images }: BeforeAfterGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const currentImage = images[currentIndex]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    setSliderPosition(percentage)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    setSliderPosition(percentage)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setSliderPosition(50)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setSliderPosition(50)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Comparison */}
      <div
        className="relative aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-card border border-border"
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={currentImage.afterImage}
            alt={`${currentImage.title} - Depois`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
          <div className="absolute bottom-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            Depois
          </div>
        </div>

        {/* Before Image (Foreground with clip) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={currentImage.beforeImage}
            alt={`${currentImage.title} - Antes`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
          <div className="absolute bottom-4 left-4 bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
            Antes
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-foreground/80 backdrop-blur-sm"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-foreground rounded-full flex items-center justify-center shadow-lg">
            <ChevronLeft className="w-4 h-4 text-background -mr-1" />
            <ChevronRight className="w-4 h-4 text-background -ml-1" />
          </div>
        </div>
      </div>

      {/* Title and Service */}
      <div className="text-center mt-6 mb-4">
        <h3 className="text-lg font-semibold text-foreground">{currentImage.title}</h3>
        <p className="text-sm text-muted-foreground">{currentImage.service}</p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrev}
          className="rounded-full border-border hover:bg-secondary"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        {/* Thumbnails */}
        <div className="flex gap-2">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => {
                setCurrentIndex(index)
                setSliderPosition(50)
              }}
              className={cn(
                "relative w-16 h-10 rounded-lg overflow-hidden border-2 transition-all",
                index === currentIndex
                  ? "border-primary"
                  : "border-transparent opacity-60 hover:opacity-100"
              )}
              aria-label={`Ver ${image.title}`}
            >
              <Image
                src={image.afterImage}
                alt={image.title}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="rounded-full border-border hover:bg-secondary"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Instructions */}
      <p className="text-center text-sm text-muted-foreground mt-4">
        Arraste o controle para comparar antes e depois
      </p>
    </div>
  )
}
