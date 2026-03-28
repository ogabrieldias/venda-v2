export type VehicleType = 'car' | 'motorcycle'
export type VehicleStatus = 'available' | 'sold'
export type FuelType = 'flex' | 'gasoline' | 'diesel' | 'electric' | 'hybrid'
export type TransmissionType = 'manual' | 'automatic' | 'cvt'

export interface Vehicle {
  id: string
  type: VehicleType
  brand: string
  model: string
  year: number
  price: number
  mileage: number
  fuel: FuelType
  transmission: TransmissionType
  color: string
  status: VehicleStatus
  featured: boolean
  images: string[]
  description: string
  specs: {
    engine?: string
    power?: string
    torque?: string
    acceleration?: string
    topSpeed?: string
    fuelConsumption?: string
    cylinders?: number
  }
}

export const vehicles: Vehicle[] = [
  // CARROS
  {
    id: 'car-1',
    type: 'car',
    brand: 'BMW',
    model: 'M3 Competition',
    year: 2024,
    price: 650000,
    mileage: 5200,
    fuel: 'gasoline',
    transmission: 'automatic',
    color: 'Preto Safira',
    status: 'available',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
    ],
    description: 'BMW M3 Competition em estado impecável. Único dono, todas as revisões em concessionária. Pacote completo de opcionais incluindo teto solar, bancos em couro Merino e sistema de som Harman Kardon.',
    specs: {
      engine: '3.0 Biturbo',
      power: '510 cv',
      torque: '650 Nm',
      acceleration: '3.9s (0-100 km/h)',
      topSpeed: '290 km/h',
      fuelConsumption: '10.2 km/l',
      cylinders: 6,
    },
  },
  {
    id: 'car-2',
    type: 'car',
    brand: 'Mercedes-Benz',
    model: 'AMG GT',
    year: 2023,
    price: 890000,
    mileage: 12000,
    fuel: 'gasoline',
    transmission: 'automatic',
    color: 'Cinza Selenita',
    status: 'available',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
      'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80',
    ],
    description: 'Mercedes-AMG GT com performance excepcional. Design arrojado e acabamento premium. Veículo de procedência garantida com histórico completo.',
    specs: {
      engine: '4.0 V8 Biturbo',
      power: '585 cv',
      torque: '700 Nm',
      acceleration: '3.2s (0-100 km/h)',
      topSpeed: '315 km/h',
      fuelConsumption: '8.5 km/l',
      cylinders: 8,
    },
  },
  {
    id: 'car-3',
    type: 'car',
    brand: 'Porsche',
    model: '911 Carrera S',
    year: 2024,
    price: 1250000,
    mileage: 3500,
    fuel: 'gasoline',
    transmission: 'automatic',
    color: 'Branco Carrara',
    status: 'available',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
      'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=800&q=80',
    ],
    description: 'O icônico Porsche 911 Carrera S com câmbio PDK de 8 velocidades. Experiência de condução incomparável com tecnologia de ponta e design atemporal.',
    specs: {
      engine: '3.0 Flat-6 Biturbo',
      power: '450 cv',
      torque: '530 Nm',
      acceleration: '3.5s (0-100 km/h)',
      topSpeed: '308 km/h',
      fuelConsumption: '11.2 km/l',
      cylinders: 6,
    },
  },
  {
    id: 'car-4',
    type: 'car',
    brand: 'Audi',
    model: 'RS6 Avant',
    year: 2023,
    price: 980000,
    mileage: 18000,
    fuel: 'gasoline',
    transmission: 'automatic',
    color: 'Verde Nardo',
    status: 'available',
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    ],
    description: 'Audi RS6 Avant - a perua mais rápida do mundo. Combina espaço e praticidade com performance brutal. Tração integral Quattro e suspensão adaptativa.',
    specs: {
      engine: '4.0 V8 TFSI Biturbo',
      power: '600 cv',
      torque: '800 Nm',
      acceleration: '3.6s (0-100 km/h)',
      topSpeed: '305 km/h',
      fuelConsumption: '9.8 km/l',
      cylinders: 8,
    },
  },
  {
    id: 'car-5',
    type: 'car',
    brand: 'Toyota',
    model: 'Corolla Cross',
    year: 2024,
    price: 185000,
    mileage: 8500,
    fuel: 'hybrid',
    transmission: 'cvt',
    color: 'Prata Lua Nova',
    status: 'available',
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    ],
    description: 'Toyota Corolla Cross Hybrid - economia e tecnologia. SUV compacto com baixíssimo consumo de combustível e manutenção acessível.',
    specs: {
      engine: '1.8 Híbrido',
      power: '122 cv',
      torque: '142 Nm',
      acceleration: '10.2s (0-100 km/h)',
      topSpeed: '170 km/h',
      fuelConsumption: '18.5 km/l',
      cylinders: 4,
    },
  },
  {
    id: 'car-6',
    type: 'car',
    brand: 'Volkswagen',
    model: 'Golf GTI',
    year: 2023,
    price: 245000,
    mileage: 15000,
    fuel: 'gasoline',
    transmission: 'automatic',
    color: 'Vermelho Tornado',
    status: 'sold',
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=800&q=80',
      'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80',
    ],
    description: 'Volkswagen Golf GTI - o hatch esportivo mais icônico do mundo. Combinação perfeita de performance diária e diversão ao volante.',
    specs: {
      engine: '2.0 TSI',
      power: '245 cv',
      torque: '370 Nm',
      acceleration: '6.3s (0-100 km/h)',
      topSpeed: '250 km/h',
      fuelConsumption: '12.5 km/l',
      cylinders: 4,
    },
  },
  {
    id: 'car-7',
    type: 'car',
    brand: 'Honda',
    model: 'Civic Type R',
    year: 2024,
    price: 420000,
    mileage: 2100,
    fuel: 'gasoline',
    transmission: 'manual',
    color: 'Branco Championship',
    status: 'available',
    featured: true,
    images: [
      'https://quatrorodas.abril.com.br/wp-content/uploads/2017/03/02___2017_civic_type_r__european_version_.jpg?crop=1&resize=1212,909',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    ],
    description: 'Honda Civic Type R - o hatch de tração dianteira mais rápido de Nürburgring. Câmbio manual de 6 marchas e suspensão adaptativa.',
    specs: {
      engine: '2.0 VTEC Turbo',
      power: '329 cv',
      torque: '420 Nm',
      acceleration: '5.4s (0-100 km/h)',
      topSpeed: '275 km/h',
      fuelConsumption: '11.8 km/l',
      cylinders: 4,
    },
  },
  {
    id: 'car-8',
    type: 'car',
    brand: 'Jeep',
    model: 'Compass Limited',
    year: 2024,
    price: 195000,
    mileage: 6800,
    fuel: 'flex',
    transmission: 'automatic',
    color: 'Azul Jazz',
    status: 'available',
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
      'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80',
    ],
    description: 'Jeep Compass Limited com motor Turbo Flex. SUV versátil com capacidade off-road e conforto para o dia a dia urbano.',
    specs: {
      engine: '1.3 T270 Turbo Flex',
      power: '185 cv',
      torque: '270 Nm',
      acceleration: '8.2s (0-100 km/h)',
      topSpeed: '195 km/h',
      fuelConsumption: '11.5 km/l',
      cylinders: 4,
    },
  },
  // MOTOS
  {
    id: 'moto-1',
    type: 'motorcycle',
    brand: 'BMW',
    model: 'S 1000 RR',
    year: 2024,
    price: 145000,
    mileage: 3200,
    fuel: 'gasoline',
    transmission: 'manual',
    color: 'Vermelho Racing',
    status: 'available',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
    ],
    description: 'BMW S 1000 RR - a superbike alemã que domina as pistas. Eletrônica de última geração com quickshifter bidirecional e controle de tração.',
    specs: {
      engine: '999cc 4 cilindros',
      power: '210 cv',
      torque: '113 Nm',
      acceleration: '2.6s (0-100 km/h)',
      topSpeed: '305 km/h',
      fuelConsumption: '16.8 km/l',
      cylinders: 4,
    },
  },
  {
    id: 'moto-2',
    type: 'motorcycle',
    brand: 'Ducati',
    model: 'Panigale V4',
    year: 2023,
    price: 185000,
    mileage: 5800,
    fuel: 'gasoline',
    transmission: 'manual',
    color: 'Vermelho Ducati',
    status: 'available',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    ],
    description: 'Ducati Panigale V4 - tecnologia MotoGP para as ruas. Motor Desmosedici Stradale derivado da competição com som inconfundível.',
    specs: {
      engine: '1103cc V4',
      power: '215 cv',
      torque: '124 Nm',
      acceleration: '2.5s (0-100 km/h)',
      topSpeed: '310 km/h',
      fuelConsumption: '14.2 km/l',
      cylinders: 4,
    },
  },
  {
    id: 'moto-3',
    type: 'motorcycle',
    brand: 'Kawasaki',
    model: 'Ninja ZX-10R',
    year: 2024,
    price: 115000,
    mileage: 4500,
    fuel: 'gasoline',
    transmission: 'manual',
    color: 'Verde Kawasaki',
    status: 'available',
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80',
      'https://images.unsplash.com/photo-1558981001-5864b3250a69?w=800&q=80',
    ],
    description: 'Kawasaki Ninja ZX-10R - campeã mundial de Superbike. Aerodinâmica otimizada em túnel de vento e motor de alta rotação.',
    specs: {
      engine: '998cc 4 cilindros',
      power: '203 cv',
      torque: '115 Nm',
      acceleration: '2.8s (0-100 km/h)',
      topSpeed: '299 km/h',
      fuelConsumption: '15.5 km/l',
      cylinders: 4,
    },
  },
  {
    id: 'moto-4',
    type: 'motorcycle',
    brand: 'Harley-Davidson',
    model: 'Fat Bob 114',
    year: 2023,
    price: 95000,
    mileage: 8200,
    fuel: 'gasoline',
    transmission: 'manual',
    color: 'Preto Vivid',
    status: 'available',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
      'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=800&q=80',
    ],
    description: 'Harley-Davidson Fat Bob 114 - estilo muscle bike com atitude. Motor Milwaukee-Eight 114 com torque brutal e som característico.',
    specs: {
      engine: '1868cc V-Twin',
      power: '94 cv',
      torque: '155 Nm',
      acceleration: '4.2s (0-100 km/h)',
      topSpeed: '180 km/h',
      fuelConsumption: '18.5 km/l',
      cylinders: 2,
    },
  },
  {
    id: 'moto-5',
    type: 'motorcycle',
    brand: 'Yamaha',
    model: 'MT-09',
    year: 2024,
    price: 65000,
    mileage: 2800,
    fuel: 'gasoline',
    transmission: 'manual',
    color: 'Azul Icon',
    status: 'available',
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
      'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80',
    ],
    description: 'Yamaha MT-09 - o dark side do Japão. Naked street com motor 3 cilindros exclusivo que entrega torque linear e diversão garantida.',
    specs: {
      engine: '889cc 3 cilindros',
      power: '119 cv',
      torque: '93 Nm',
      acceleration: '3.1s (0-100 km/h)',
      topSpeed: '230 km/h',
      fuelConsumption: '19.2 km/l',
      cylinders: 3,
    },
  },
  {
    id: 'moto-6',
    type: 'motorcycle',
    brand: 'Honda',
    model: 'CB 1000R',
    year: 2023,
    price: 72000,
    mileage: 11500,
    fuel: 'gasoline',
    transmission: 'manual',
    color: 'Preto Graphite',
    status: 'sold',
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1558981420-87aa9dad1c89?w=800&q=80',
      'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=800&q=80',
    ],
    description: 'Honda CB 1000R Neo Sports Café - design retro-futurista com tecnologia moderna. Motor derivado da Fireblade com confiabilidade Honda.',
    specs: {
      engine: '998cc 4 cilindros',
      power: '145 cv',
      torque: '104 Nm',
      acceleration: '3.0s (0-100 km/h)',
      topSpeed: '250 km/h',
      fuelConsumption: '17.8 km/l',
      cylinders: 4,
    },
  },
  {
    id: 'moto-7',
    type: 'motorcycle',
    brand: 'Triumph',
    model: 'Street Triple RS',
    year: 2024,
    price: 78000,
    mileage: 1500,
    fuel: 'gasoline',
    transmission: 'manual',
    color: 'Prata Matte',
    status: 'available',
    featured: false,
    images: [
      'https://storage.googleapis.com/images-homolog-moto.usadosbr.com/img/2021/07/13/img161509-1626199454-v580x435.jpg',
      'https://images.unsplash.com/photo-1558980664-2506fca6bfc2?w=800&q=80',
    ],
    description: 'Triumph Street Triple RS - a naked britânica de referência. Motor 3 cilindros com caráter único e componentes Brembo e Öhlins.',
    specs: {
      engine: '765cc 3 cilindros',
      power: '130 cv',
      torque: '80 Nm',
      acceleration: '3.2s (0-100 km/h)',
      topSpeed: '240 km/h',
      fuelConsumption: '18.5 km/l',
      cylinders: 3,
    },
  },
  {
    id: 'moto-8',
    type: 'motorcycle',
    brand: 'KTM',
    model: '1290 Super Duke R',
    year: 2023,
    price: 98000,
    mileage: 6200,
    fuel: 'gasoline',
    transmission: 'manual',
    color: 'Laranja KTM',
    status: 'available',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1558980664-10e7170b5df9?w=800&q=80',
      'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80',
    ],
    description: 'KTM 1290 Super Duke R - "A Besta". A naked mais poderosa e radical do mercado com chassi super leve e potência absurda.',
    specs: {
      engine: '1301cc V-Twin',
      power: '180 cv',
      torque: '140 Nm',
      acceleration: '2.9s (0-100 km/h)',
      topSpeed: '270 km/h',
      fuelConsumption: '16.2 km/l',
      cylinders: 2,
    },
  },
]

export const getVehicleById = (id: string): Vehicle | undefined => {
  return vehicles.find(v => v.id === id)
}

export const getVehiclesByType = (type: VehicleType): Vehicle[] => {
  return vehicles.filter(v => v.type === type)
}

export const getFeaturedVehicles = (): Vehicle[] => {
  return vehicles.filter(v => v.featured && v.status === 'available')
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export const formatMileage = (mileage: number): string => {
  return new Intl.NumberFormat('pt-BR').format(mileage) + ' km'
}
