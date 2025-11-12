import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE, getWhatsAppLink } from "@/const";
import { MessageCircle, MapPin, Phone, Mail, Heart, Zap, Shield } from "lucide-react";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <nav className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt={APP_TITLE} className="h-10 w-10" />
            <span className="text-xl font-bold text-accent">{APP_TITLE}</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-medium hover:text-accent transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-sm font-medium hover:text-accent transition-colors">
              Serviços
            </a>
            <a href="#localizacao" className="text-sm font-medium hover:text-accent transition-colors">
              Localização
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-accent transition-colors">
              Contato
            </a>
          </div>
          <Button 
            onClick={() => setShowContactForm(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Contato
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-accent leading-tight">
                Distribuição de Medicamentos e Materiais Hospitalares
              </h1>
              <p className="text-lg text-muted-foreground">
                Tecnologia, inovação e excelência na distribuição de medicamentos e equipamentos hospitalares para hospitais públicos, particulares e órgãos públicos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setShowContactForm(true)}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6"
                >
                  Solicitar Informações
                </Button>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline"
                    className="w-full border-secondary text-secondary hover:bg-secondary/10 text-base px-8 py-6"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-full opacity-10 blur-3xl" />
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Medical icons arrangement */}
                  <g opacity="0.8">
                    {/* Syringe */}
                    <rect x="30" y="50" width="8" height="60" fill="#1a3a52" rx="4" />
                    <circle cx="34" cy="45" r="6" fill="#17a2b8" />
                    
                    {/* Medicine bottle */}
                    <rect x="100" y="40" width="25" height="50" fill="#1a3a52" rx="3" />
                    <circle cx="112.5" cy="38" r="8" fill="#17a2b8" />
                    
                    {/* Bandage */}
                    <rect x="150" y="60" width="30" height="30" fill="none" stroke="#1a3a52" strokeWidth="2" rx="4" />
                    <circle cx="155" cy="65" r="2" fill="#17a2b8" />
                    <circle cx="165" cy="75" r="2" fill="#17a2b8" />
                    <circle cx="175" cy="85" r="2" fill="#17a2b8" />
                    
                    {/* Stethoscope */}
                    <path d="M 50 140 Q 50 120 70 120 Q 90 120 90 140" stroke="#1a3a52" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <circle cx="50" cy="145" r="4" fill="#17a2b8" />
                    <circle cx="90" cy="145" r="4" fill="#17a2b8" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Nossos Serviços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para suas necessidades hospitalares
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Medicamentos",
                description: "Amplo portfólio de medicamentos de qualidade para hospitais públicos e particulares"
              },
              {
                icon: Zap,
                title: "Equipamentos",
                description: "Equipamentos hospitalares modernos e confiáveis para todas as especialidades"
              },
              {
                icon: Shield,
                title: "Materiais",
                description: "Materiais hospitalares de primeira qualidade com entrega garantida"
              }
            ].map((service, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow border-border/50">
                <service.icon className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-accent mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">Sobre a Time H</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A <strong className="text-foreground">Time H Hospitalar</strong> é uma empresa especializada na distribuição de medicamentos e materiais hospitalares para hospitais públicos e particulares, UBS, além de órgãos públicos como prefeituras, secretarias de saúde e órgãos estaduais.
                </p>
                <p>
                  Com foco em <strong className="text-foreground">tecnologia, inovação, medicina e equipamentos hospitalares</strong>, nos comprometemos a oferecer produtos de qualidade superior.
                </p>
                <p>
                  Nossa <strong className="text-foreground">missão</strong> é atuar com competência e seriedade, buscando sempre a máxima eficácia e excelência, contando com um quadro de profissionais qualificados e competentes.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg p-8 border border-border/50">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-accent mb-2">Missão</h3>
                  <p className="text-muted-foreground">
                    Competência e seriedade, buscando sempre a máxima eficácia e excelência em todos os nossos serviços.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-accent mb-2">Visão</h3>
                  <p className="text-muted-foreground">
                    Ser referência na distribuição de medicamentos e materiais hospitalares no Brasil.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-accent mb-2">Valores</h3>
                  <p className="text-muted-foreground">
                    Qualidade, confiabilidade, profissionalismo e compromisso com a excelência.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="localizacao" className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Localização</h2>
            <p className="text-lg text-muted-foreground">Visite-nos em Mirasol, São Paulo</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 border-border/50">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-accent mb-2">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua Joao Mahfuz, 2848<br />
                      Portal da Cidade Amiga<br />
                      Mirasol, SP
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-border/50">
                <div className="flex gap-4">
                  <Phone className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-accent mb-2">Telefone</h3>
                    <p className="text-muted-foreground">(11) 91255-3377</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-border/50">
                <div className="flex gap-4">
                  <Mail className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-accent mb-2">Email</h3>
                    <p className="text-muted-foreground">contato@timehhospitalar.com.br</p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden h-96 border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.8897949999997!2d-48.9!3d-21.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7f8e8e8e8e8e9%3A0x0!2sRua%20Joao%20Mahfuz%2C%202848%20-%20Mirasol%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 md:py-28">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Entre em Contato</h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário abaixo e entraremos em contato em breve
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a 
        href={getWhatsAppLink()} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
        title="Envie uma mensagem via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-accent">Formulário de Contato</h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ✕
                </button>
              </div>
              <ContactForm onSuccess={() => setShowContactForm(false)} />
            </div>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12 mt-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={APP_LOGO} alt={APP_TITLE} className="h-8 w-8" />
                <span className="font-bold">{APP_TITLE}</span>
              </div>
              <p className="text-sm opacity-90">
                Distribuição de medicamentos e materiais hospitalares com qualidade e profissionalismo.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#sobre" className="hover:opacity-100 transition-opacity">Sobre</a></li>
                <li><a href="#servicos" className="hover:opacity-100 transition-opacity">Serviços</a></li>
                <li><a href="#localizacao" className="hover:opacity-100 transition-opacity">Localização</a></li>
                <li><a href="#contato" className="hover:opacity-100 transition-opacity">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Telefone: (11) 91255-3377</li>
                <li>Email: contato@timehhospitalar.com.br</li>
                <li>Rua Joao Mahfuz, 2848</li>
                <li>Mirasol, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-accent-foreground/20 pt-8 text-center text-sm opacity-90">
            <p>&copy; 2024 Time H Hospitalar. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
