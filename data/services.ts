// Dados para página de Seguro de Automóveis
export interface InsuranceCoverage {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface InsuranceBenefit {
  id: string
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  service: 'insurance' | 'aesthetic'
}

// Coberturas de Seguro
export const insuranceCoverages: InsuranceCoverage[] = [
  {
    id: 'basic',
    title: 'Cobertura Básica',
    description: 'Proteção essencial contra roubo e furto do seu veículo.',
    icon: 'shield',
    features: [
      'Proteção contra roubo e furto',
      'Indenização integral do veículo',
      'Assistência 24h para emergências',
      'Guincho até 200km',
    ],
  },
  {
    id: 'complete',
    title: 'Cobertura Completa',
    description: 'Proteção total incluindo colisão, incêndio e desastres naturais.',
    icon: 'shield-check',
    features: [
      'Tudo da cobertura básica',
      'Colisão e capotamento',
      'Incêndio e explosão',
      'Desastres naturais (enchentes, granizo)',
      'Vidros e retrovisores',
    ],
  },
  {
    id: 'third-party',
    title: 'Contra Terceiros',
    description: 'Cobertura de danos materiais e corporais causados a terceiros.',
    icon: 'users',
    features: [
      'Danos materiais até R$ 100.000',
      'Danos corporais até R$ 100.000',
      'Danos morais',
      'Despesas médico-hospitalares',
    ],
  },
]

// Benefícios do Seguro
export const insuranceBenefits: InsuranceBenefit[] = [
  {
    id: 'assistance',
    title: 'Assistência 24h',
    description: 'Suporte em qualquer emergência, a qualquer hora do dia ou da noite.',
    icon: 'clock',
  },
  {
    id: 'rental',
    title: 'Carro Reserva',
    description: 'Veículo substituto enquanto o seu estiver em reparo ou sinistro.',
    icon: 'car',
  },
  {
    id: 'coverage',
    title: 'Cobertura Nacional',
    description: 'Proteção em todo o território brasileiro, onde você estiver.',
    icon: 'map',
  },
  {
    id: 'support',
    title: 'Atendimento Personalizado',
    description: 'Consultor dedicado para acompanhar seu caso do início ao fim.',
    icon: 'headphones',
  },
]

// Dados para página de Estética Automotiva
export interface AestheticService {
  id: string
  title: string
  description: string
  icon: string
  price: string
  duration: string
  features: string[]
}

export interface AestheticPackage {
  id: string
  title: string
  description: string
  originalPrice: number
  discountPrice: number
  services: string[]
  popular?: boolean
}

export interface BeforeAfter {
  id: string
  title: string
  service: string
  beforeImage: string
  afterImage: string
}

// Serviços de Estética
export const aestheticServices: AestheticService[] = [
  {
    id: 'polishing',
    title: 'Polimento',
    description: 'Restauração do brilho original da pintura, removendo riscos superficiais e oxidação.',
    icon: 'sparkles',
    price: 'A partir de R$ 350',
    duration: '4-6 horas',
    features: [
      'Remoção de riscos leves',
      'Restauração do brilho',
      'Proteção UV temporária',
      'Aplicação de cera de finalização',
    ],
  },
  {
    id: 'crystallization',
    title: 'Cristalização',
    description: 'Tratamento profundo que forma uma camada protetora de vidro líquido sobre a pintura.',
    icon: 'gem',
    price: 'A partir de R$ 800',
    duration: '6-8 horas',
    features: [
      'Proteção duradoura (até 1 ano)',
      'Brilho intenso',
      'Resistência a riscos',
      'Hidrofobia da superfície',
    ],
  },
  {
    id: 'hygienization',
    title: 'Higienização Interna',
    description: 'Limpeza completa do interior com eliminação de odores e bactérias.',
    icon: 'spray-can',
    price: 'A partir de R$ 250',
    duration: '3-4 horas',
    features: [
      'Aspiração profunda',
      'Limpeza de estofados',
      'Hidratação de couro',
      'Ozonização (eliminação de odores)',
    ],
  },
  {
    id: 'wrapping',
    title: 'Envelopamento',
    description: 'Aplicação de película de alta qualidade para mudar a cor ou proteger a pintura original.',
    icon: 'palette',
    price: 'A partir de R$ 3.500',
    duration: '3-5 dias',
    features: [
      'Proteção da pintura original',
      'Diversas cores e acabamentos',
      'Removível sem danos',
      'Garantia de 3 anos',
    ],
  },
]

// Pacotes Promocionais
export const aestheticPackages: AestheticPackage[] = [
  {
    id: 'essential',
    title: 'Pacote Essencial',
    description: 'Ideal para manutenção periódica do seu veículo.',
    originalPrice: 600,
    discountPrice: 450,
    services: ['Higienização Interna', 'Lavagem Detalhada', 'Cera Protetora'],
  },
  {
    id: 'premium',
    title: 'Pacote Premium',
    description: 'Combinação perfeita de limpeza e proteção.',
    originalPrice: 1200,
    discountPrice: 950,
    services: ['Higienização Interna', 'Polimento Completo', 'Cera de Carnaúba Premium'],
    popular: true,
  },
  {
    id: 'complete',
    title: 'Pacote Completo',
    description: 'Tratamento completo para seu veículo ficar como novo.',
    originalPrice: 2000,
    discountPrice: 1600,
    services: ['Higienização Interna', 'Polimento', 'Cristalização', 'Vitrificação de Vidros'],
  },
]

// Imagens Antes/Depois
export const beforeAfterImages: BeforeAfter[] = [
  {
    id: '1',
    title: 'Polimento em BMW Série 3',
    service: 'Polimento',
    beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&q=80',
  },
  {
    id: '2',
    title: 'Higienização em Mercedes Classe C',
    service: 'Higienização',
    beforeImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80',
  },
  {
    id: '3',
    title: 'Cristalização em Porsche 911',
    service: 'Cristalização',
    beforeImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=600&q=80',
  },
]

// Depoimentos
export const testimonials: Testimonial[] = [
  // Depoimentos de Seguro
  {
    id: 'ins-1',
    name: 'Marcelo Ferreira',
    role: 'Empresário',
    content: 'Precisei acionar o seguro após um acidente e fui muito bem atendido. O carro reserva chegou no mesmo dia e todo o processo foi muito transparente.',
    rating: 5,
    service: 'insurance',
  },
  {
    id: 'ins-2',
    name: 'Juliana Santos',
    role: 'Médica',
    content: 'A tranquilidade de ter um seguro completo não tem preço. A assistência 24h já me salvou duas vezes em viagens. Recomendo muito!',
    rating: 5,
    service: 'insurance',
  },
  {
    id: 'ins-3',
    name: 'Ricardo Oliveira',
    role: 'Engenheiro',
    content: 'Melhor custo-benefício que encontrei. Atendimento rápido e sem burocracia. O consultor me ajudou a escolher a cobertura ideal para meu perfil.',
    rating: 5,
    service: 'insurance',
  },
  // Depoimentos de Estética
  {
    id: 'aes-1',
    name: 'Fernando Lima',
    role: 'Advogado',
    content: 'Meu carro tinha 5 anos e estava bem desgastado. Depois da cristalização, parece que saiu da concessionária. Trabalho impecável!',
    rating: 5,
    service: 'aesthetic',
  },
  {
    id: 'aes-2',
    name: 'Patrícia Mendes',
    role: 'Arquiteta',
    content: 'A higienização interna foi sensacional. Eliminaram completamente o cheiro de cigarro do banco traseiro. Super profissionais!',
    rating: 5,
    service: 'aesthetic',
  },
  {
    id: 'aes-3',
    name: 'Bruno Costa',
    role: 'Empresário',
    content: 'Fiz o envelopamento completo e o resultado ficou melhor que pintura nova. A equipe é muito cuidadosa e detalhista.',
    rating: 5,
    service: 'aesthetic',
  },
]

// Funções auxiliares
export const getTestimonialsByService = (service: 'insurance' | 'aesthetic'): Testimonial[] => {
  return testimonials.filter(t => t.service === service)
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export const calculateDiscount = (original: number, discounted: number): number => {
  return Math.round(((original - discounted) / original) * 100)
}
