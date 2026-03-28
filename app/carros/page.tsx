"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VehicleFilters, FilterState } from "@/components/vehicle-filters"
import { VehicleGrid } from "@/components/vehicle-grid"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getVehiclesByType, Vehicle } from "@/data/vehicles"

const initialFilters: FilterState = {
  search: "",
  brand: "all",
  yearFrom: "all",
  yearTo: "all",
  priceFrom: "all",
  priceTo: "all",
  status: "all",
  sortBy: "recent",
}

export default function CarrosPage() {
  const [filters, setFilters] = useState<FilterState>(initialFilters)
  
  const cars = getVehiclesByType("car")
  const brands = [...new Set(cars.map((car) => car.brand))].sort()

  const filteredCars = useMemo(() => {
    let result = [...cars]

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      result = result.filter(
        (car) =>
          car.brand.toLowerCase().includes(searchLower) ||
          car.model.toLowerCase().includes(searchLower)
      )
    }

    // Brand filter
    if (filters.brand && filters.brand !== "all") {
      result = result.filter((car) => car.brand === filters.brand)
    }

    // Year filters
    if (filters.yearFrom && filters.yearFrom !== "all") {
      result = result.filter((car) => car.year >= parseInt(filters.yearFrom))
    }
    if (filters.yearTo && filters.yearTo !== "all") {
      result = result.filter((car) => car.year <= parseInt(filters.yearTo))
    }

    // Price filters
    if (filters.priceFrom && filters.priceFrom !== "all") {
      result = result.filter((car) => car.price >= parseInt(filters.priceFrom))
    }
    if (filters.priceTo && filters.priceTo !== "all") {
      result = result.filter((car) => car.price <= parseInt(filters.priceTo))
    }

    // Status filter
    if (filters.status && filters.status !== "all") {
      result = result.filter((car) => car.status === filters.status)
    }

    // Sorting
    switch (filters.sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "year-desc":
        result.sort((a, b) => b.year - a.year)
        break
      case "year-asc":
        result.sort((a, b) => a.year - b.year)
        break
      default:
        // Recent - keep original order (newest first by ID)
        break
    }

    return result
  }, [cars, filters])

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const handleClearFilters = () => {
    setFilters(initialFilters)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Nossos <span className="text-primary">Carros</span>
          </h1>
          <p className="text-muted-foreground">
            Encontre o carro perfeito para você. {filteredCars.length} veículo(s) encontrado(s).
          </p>
        </div>
      </section>

      {/* Filters and Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <VehicleFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            brands={brands}
          />
          
          <VehicleGrid vehicles={filteredCars} />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
