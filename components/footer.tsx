import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">V</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Venda<span className="text-primary">+</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sua concessionária premium de carros e motos. Qualidade, procedência e os melhores preços do mercado.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/leovendamais/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/carros" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Carros
                </Link>
              </li>
              <li>
                <Link href="/motos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Motos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/seguro" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Seguro de Automóveis
                </Link>
              </li>
              <li>
                <Link href="/estetica" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Estética Automotiva
                </Link>
              </li>
              {/* <li className="text-muted-foreground text-sm">Financiamento</li>
              <li className="text-muted-foreground text-sm">Consórcio</li>
              <li className="text-muted-foreground text-sm">Troca com Troco</li> */}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>R. Barbosa de Andrade, 242 - Centro, Três Rios - RJ</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>contato@vendamais.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Clock className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>Seg a Sáb: 8h às 18h<br />Dom: 9h às 13h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Venda+. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
