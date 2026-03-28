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

export default function MotosPage() {
  const [filters, setFilters] = useState<FilterState>(initialFilters)
  
  const motos = getVehiclesByType("motorcycle")
  const brands = [...new Set(motos.map((moto) => moto.brand))].sort()

  const filteredMotos = useMemo(() => {
    let result = [...motos]

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      result = result.filter(
        (moto) =>
          moto.brand.toLowerCase().includes(searchLower) ||
          moto.model.toLowerCase().includes(searchLower)
      )
    }

    // Brand filter
    if (filters.brand && filters.brand !== "all") {
      result = result.filter((moto) => moto.brand === filters.brand)
    }

    // Year filters
    if (filters.yearFrom && filters.yearFrom !== "all") {
      result = result.filter((moto) => moto.year >= parseInt(filters.yearFrom))
    }
    if (filters.yearTo && filters.yearTo !== "all") {
      result = result.filter((moto) => moto.year <= parseInt(filters.yearTo))
    }

    // Price filters
    if (filters.priceFrom && filters.priceFrom !== "all") {
      result = result.filter((moto) => moto.price >= parseInt(filters.priceFrom))
    }
    if (filters.priceTo && filters.priceTo !== "all") {
      result = result.filter((moto) => moto.price <= parseInt(filters.priceTo))
    }

    // Status filter
    if (filters.status && filters.status !== "all") {
      result = result.filter((moto) => moto.status === filters.status)
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
        break
    }

    return result
  }, [motos, filters])

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
            Nossas <span className="text-primary">Motos</span>
          </h1>
          <p className="text-muted-foreground">
            Encontre a moto perfeita para você. {filteredMotos.length} veículo(s) encontrado(s).
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
          
          <VehicleGrid vehicles={filteredMotos} />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
