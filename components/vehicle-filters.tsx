"use client"

import { Search, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

export interface FilterState {
  search: string
  brand: string
  yearFrom: string
  yearTo: string
  priceFrom: string
  priceTo: string
  status: string
  sortBy: string
}

interface VehicleFiltersProps {
  filters: FilterState
  onFilterChange: (key: keyof FilterState, value: string) => void
  onClearFilters: () => void
  brands: string[]
  className?: string
}

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 15 }, (_, i) => currentYear - i)

const priceRanges = [
  { value: "50000", label: "R$ 50.000" },
  { value: "100000", label: "R$ 100.000" },
  { value: "150000", label: "R$ 150.000" },
  { value: "200000", label: "R$ 200.000" },
  { value: "300000", label: "R$ 300.000" },
  { value: "500000", label: "R$ 500.000" },
  { value: "1000000", label: "R$ 1.000.000" },
]

export function VehicleFilters({
  filters,
  onFilterChange,
  onClearFilters,
  brands,
  className,
}: VehicleFiltersProps) {
  const hasActiveFilters = Object.values(filters).some(
    (value) => value !== "" && value !== "all"
  )

  return (
    <div className={cn("space-y-4", className)}>
      {/* Search and Sort Row */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar por marca ou modelo..."
            value={filters.search}
            onChange={(e) => onFilterChange("search", e.target.value)}
            className="pl-10 bg-card border-border"
          />
        </div>
        <Select value={filters.sortBy} onValueChange={(value) => onFilterChange("sortBy", value)}>
          <SelectTrigger className="w-full sm:w-48 bg-card border-border">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Mais Recentes</SelectItem>
            <SelectItem value="price-asc">Menor Preço</SelectItem>
            <SelectItem value="price-desc">Maior Preço</SelectItem>
            <SelectItem value="year-desc">Ano Mais Novo</SelectItem>
            <SelectItem value="year-asc">Ano Mais Antigo</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Filters Row */}
      <div className="p-4 bg-card border border-border rounded-xl space-y-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <SlidersHorizontal className="w-5 h-5" />
          <span className="font-medium text-foreground">Filtros</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Brand */}
          <Select value={filters.brand} onValueChange={(value) => onFilterChange("brand", value)}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Marca" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as Marcas</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Year From */}
          <Select value={filters.yearFrom} onValueChange={(value) => onFilterChange("yearFrom", value)}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Ano de" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Ano de</SelectItem>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Year To */}
          <Select value={filters.yearTo} onValueChange={(value) => onFilterChange("yearTo", value)}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Ano até" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Ano até</SelectItem>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Price From */}
          <Select value={filters.priceFrom} onValueChange={(value) => onFilterChange("priceFrom", value)}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Preço de" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Preço de</SelectItem>
              {priceRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Status */}
          <Select value={filters.status} onValueChange={(value) => onFilterChange("status", value)}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="available">Disponível</SelectItem>
              <SelectItem value="sold">Vendido</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div className="pt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4 mr-2" />
              Limpar Filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
