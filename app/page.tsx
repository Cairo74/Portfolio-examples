"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { useRef } from "react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"

export default function Portfolio() {
  // Refs para as seções
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  // Função para scroll suave
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2"
          >
            <span className="text-xl font-bold">Portfolio</span>
          </button>
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contato
            </button>
          </nav>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Olá, eu sou <span className="text-primary">Seu Nome</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis
            </p>
            <div className="flex gap-4">
              <Button onClick={() => scrollToSection(contactRef)}>Entre em contato</Button>
              <Button variant="outline" onClick={() => scrollToSection(projectsRef)}>
                Ver projetos
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image src="/placeholder.svg?height=320&width=320" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="About me"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg">
                Sou um desenvolvedor apaixonado por tecnologia e inovação. Com experiência em desenvolvimento web e
                mobile, busco sempre criar soluções elegantes e eficientes para problemas complexos.
              </p>
              <p className="text-lg">
                Minha jornada na programação começou há X anos, e desde então venho aprimorando minhas habilidades em
                diversas tecnologias e frameworks modernos.
              </p>
              <p className="text-lg">
                Quando não estou codando, gosto de [seus hobbies e interesses]. Acredito que um bom equilíbrio entre
                vida profissional e pessoal é essencial para manter a criatividade e produtividade.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} id="skills" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Minhas Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillBadge name="HTML" level={90} />
            <SkillBadge name="CSS" level={85} />
            <SkillBadge name="JavaScript" level={90} />
            <SkillBadge name="TypeScript" level={80} />
            <SkillBadge name="React" level={85} />
            <SkillBadge name="Next.js" level={80} />
            <SkillBadge name="Node.js" level={75} />
            <SkillBadge name="Tailwind CSS" level={90} />
            <SkillBadge name="Git" level={85} />
            <SkillBadge name="UI/UX" level={70} />
            <SkillBadge name="Responsive Design" level={95} />
            <SkillBadge name="RESTful APIs" level={80} />
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Meus Projetos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="E-commerce Website"
              description="Uma loja online completa com carrinho de compras, pagamentos e painel de administração."
              tags={["React", "Node.js", "MongoDB"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="App de Finanças Pessoais"
              description="Aplicativo para controle de despesas e receitas com visualização de gráficos e relatórios."
              tags={["React Native", "Firebase", "Chart.js"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Blog Tech"
              description="Blog sobre tecnologia com sistema de comentários, categorias e painel administrativo."
              tags={["Next.js", "Tailwind CSS", "Prisma"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Dashboard Analytics"
              description="Painel de controle para visualização de dados e métricas de negócios."
              tags={["Vue.js", "D3.js", "Express"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Rede Social"
              description="Plataforma de rede social com perfis, posts, comentários e mensagens diretas."
              tags={["React", "GraphQL", "PostgreSQL"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="API RESTful"
              description="API completa para gerenciamento de usuários, produtos e pedidos."
              tags={["Node.js", "Express", "MongoDB"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Entre em Contato</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Vamos conversar!</h3>
              <p className="text-lg">
                Estou sempre aberto a novas oportunidades, colaborações e projetos interessantes. Se você tem uma ideia
                ou projeto em mente, não hesite em entrar em contato.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>email@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span>linkedin.com/in/seuperfil</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-primary" />
                  <span>github.com/seuusuario</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

