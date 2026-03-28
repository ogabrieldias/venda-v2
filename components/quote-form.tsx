"use client"

import { useState } from "react"
import { Send, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface QuoteFormProps {
  type: 'insurance' | 'aesthetic'
  onSubmit?: (data: QuoteFormData) => void
}

interface QuoteFormData {
  name: string
  phone: string
  email?: string
  carModel: string
  carYear: string
  service?: string
}

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 30 }, (_, i) => currentYear - i)

const aestheticServices = [
  "Polimento",
  "Cristalização",
  "Higienização Interna",
  "Envelopamento",
  "Pacote Essencial",
  "Pacote Premium",
  "Pacote Completo",
]

export function QuoteForm({ type, onSubmit }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    phone: "",
    email: "",
    carModel: "",
    carYear: "",
    service: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    if (onSubmit) {
      onSubmit(formData)
    }

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        phone: "",
        email: "",
        carModel: "",
        carYear: "",
        service: "",
      })
    }, 3000)
  }

  const handleChange = (field: keyof QuoteFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {type === 'insurance' ? 'Cotação Solicitada!' : 'Agendamento Recebido!'}
        </h3>
        <p className="text-muted-foreground">
          Entraremos em contato em breve pelo telefone informado.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 sm:p-8">
      <h3 className="text-xl font-semibold text-foreground mb-6">
        {type === 'insurance' ? 'Solicitar Cotação' : 'Agendar Serviço'}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nome */}
        <div className="space-y-2">
          <Label htmlFor="name">Nome completo</Label>
          <Input
            id="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
            className="bg-input border-border"
          />
        </div>

        {/* Telefone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            className="bg-input border-border"
          />
        </div>

        {/* Email (opcional) */}
        <div className="space-y-2">
          <Label htmlFor="email">E-mail (opcional)</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="bg-input border-border"
          />
        </div>

        {/* Modelo do Carro */}
        <div className="space-y-2">
          <Label htmlFor="carModel">Modelo do veículo</Label>
          <Input
            id="carModel"
            placeholder="Ex: Honda Civic"
            value={formData.carModel}
            onChange={(e) => handleChange("carModel", e.target.value)}
            required
            className="bg-input border-border"
          />
        </div>

        {/* Ano do Carro */}
        <div className="space-y-2">
          <Label htmlFor="carYear">Ano do veículo</Label>
          <Select
            value={formData.carYear}
            onValueChange={(value) => handleChange("carYear", value)}
          >
            <SelectTrigger className="bg-input border-border">
              <SelectValue placeholder="Selecione o ano" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Serviço (apenas para estética) */}
        {type === 'aesthetic' && (
          <div className="space-y-2">
            <Label htmlFor="service">Serviço desejado</Label>
            <Select
              value={formData.service}
              onValueChange={(value) => handleChange("service", value)}
            >
              <SelectTrigger className="bg-input border-border">
                <SelectValue placeholder="Selecione o serviço" />
              </SelectTrigger>
              <SelectContent>
                {aestheticServices.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground",
          isSubmitting && "opacity-70 cursor-not-allowed"
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            {type === 'insurance' ? 'Solicitar Cotação' : 'Agendar Serviço'}
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center mt-4">
        Ao enviar, você concorda com nossa política de privacidade.
      </p>
    </form>
  )
}
