"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Testimonial } from "@/data/services"

interface TestimonialSliderProps {
  testimonials: Testimonial[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function TestimonialSlider({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
}: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, testimonials.length])

  const goToPrev = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, testimonials.length])

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(goToNext, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, goToNext])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Quote Icon */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
        <Quote className="w-6 h-6 text-primary" />
      </div>

      {/* Testimonial Card */}
      <div className="bg-card border border-border rounded-2xl p-8 pt-12 text-center">
        {/* Rating */}
        <div className="flex justify-center gap-1 mb-6">
          {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>

        {/* Content */}
        <p
          className={cn(
            "text-lg text-muted-foreground leading-relaxed mb-8 transition-opacity duration-500",
            isAnimating ? "opacity-0" : "opacity-100"
          )}
        >
          &ldquo;{currentTestimonial.content}&rdquo;
        </p>

        {/* Author */}
        <div
          className={cn(
            "transition-opacity duration-500",
            isAnimating ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-primary font-bold text-xl">
              {currentTestimonial.name.charAt(0)}
            </span>
          </div>
          <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
          <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrev}
            className="rounded-full border-border hover:bg-secondary"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true)
                    setCurrentIndex(index)
                    setTimeout(() => setIsAnimating(false), 500)
                  }
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted hover:bg-muted-foreground/50"
                )}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="rounded-full border-border hover:bg-secondary"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
