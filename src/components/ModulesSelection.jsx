import React from "react"
import modulesImage from "../assets/images/modulo.png"
import { 
  Layers, 
  ClipboardCheck, 
  Box, 
  Code2, 
  ShieldCheck 
} from "lucide-react"

const modules = [
  {
    id: 1,
    title: "SmartForge Arquitectura",
    module: "MÓDULO 1",
    icon: Layers,
    position: "lg:left-[2%] lg:bottom-[10%]",
    description: "Diagramas el roadmap técnico preciso para tu desarollo. Define los componentes, flujos de datos e integraciones.",
    items: [
      "Diseño de componentes y microservicios",
      "Modelado de datos y APIs",
      "Estándares y seguridad desde el inicio",
      "Documentación técnica automatizada"
    ]
  },
  {
    id: 2,
    title: "SmartForge Planificación",
    module: "MÓDULO 2",
    icon: ClipboardCheck,
    position: "lg:left-[5%] lg:top-[5%]",
    description: "Convierte objetivos de negocio en un plan ejecutable. Define alcance, genera historias de usuarios y backlog.",
    items: [
      "Definición de objetivo y alcance",
      "Generación automática de historias de usuario",
      "Estimaciones y roadmap de entrega",
      "Alineación negocio-tecnología"
    ]
  },
  {
    id: 3,
    title: "SmartForge Suite Full",
    module: "SUITE COMPLETA",
    icon: Box,
    position: "lg:left-1/2 lg:top-[22%] lg:-translate-x-1/2",
    description: "La solucíon integrada. Todos los módulos conectados en un solo flujo continuo de extremo a extremo.",
    items: [
      "Integración completa de todos los módulos",
      "Dashboard unificado de avance y métricas",
      "Supervisión experta en cada fase",
      "Trazabilidad completa de decisiones técnicas"
    ]
  },
  {
    id: 4,
    title: "SmartForge Desarrollo",
    module: "MÓDULO 3",
    icon: Code2,
    position: "lg:right-[5%] lg:top-[5%]",
    description: "Acelera la implementacion con IA que entiende el contexto de negocio. Refactoriza e implementa con consistencia.",
    items: [
      "Generación y asistencia de código con IA",
      "Refactorización y deuda técnica controlada",
      "Consistencia de estilo en todo el equipo",
      "Pruebas unitarias automatizadas"
    ]
  },
  {
    id: 5,
    title: "SmartForge QA",
    module: "MÓDULO 4",
    icon: ShieldCheck,
    position: "lg:right-[2%] lg:bottom-[10%]",
    description: "Automatiza la validación, los pipelines de CI/CD y los despligues. Trazabilidad completa hasta produccion.",
    items: [
      "Automatización de pruebas end-to-end",
      "Pipelines de CI/CD configurados",
      "Despliegues con rollback automático",
      "Trazabilidad completa hasta producción"
    ]
  }
]

const ModulesSection = () => {
  const mobileModules = [
    ...modules.filter(m => m.id === 3),
    ...modules.filter(m => m.id !== 3).sort((a, b) => a.id - b.id)
  ];

  // Componente interno para manejar el título con el degradado en "Forge"
  const StyledTitle = ({ text, isMobile = false }) => {
    const parts = text.split("Forge");
    return (
      <h3 className={`text-white font-semibold ${isMobile ? 'text-lg' : 'text-lg xl:text-xl'} mb-2 leading-tight whitespace-nowrap`}>
        <span className="text-white">Smart</span>
        <span className="bg-gradient-to-r from-[#ffae00] via-[#70a444] via-[#22d3ee] to-[#6366f1] bg-clip-text text-transparent">
          Forge
        </span>
        <span className="ml-2">{parts[1]}</span>
      </h3>
    );
  };

  return (
    <section id="que-es" className="relative text-center overflow-hidden py-16 bg-[#030b1a]">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto px-6 relative z-30 mb-8">
        <p className="text-cyan-400 text-xs tracking-[0.35em] uppercase mb-4">
          [ QUÉ ES SMARTFORGE ]
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Cinco módulos.
          <br />
          Un solo flujo.
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6">
          Desde el diseño arquitectónico hasta el despliegue en producción,
          SmartForge cubre cada etapa del ciclo de desarrollo con IA y
          supervisión experta.
        </p>

        <div className="flex justify-center mt-10 relative">
          <a 
            href="#formulario" 
            className="flex items-center gap-4 px-10 py-4 rounded-full text-white font-bold bg-gradient-to-r from-cyan-500 to-teal-400 shadow-[0_0_35px_rgba(34,211,238,0.4)] hover:scale-105 transition-all"
          >
            SOLICITA TU DEMO ↓
          </a>
        </div>
      </div>

      {/* CONTENEDOR DE MÓDULOS */}
      <div className="relative flex flex-col items-center lg:-mt-24 min-h-[600px] lg:min-h-[800px] justify-center">

        <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none">
          <img
            src={modulesImage}
            alt=""
            className="w-[900px] xl:w-[1100px] opacity-100 mix-blend-lighten scale-110"
          />
          
        </div>

        {/* RENDERIZADO DE CARDS (Desktop) */}
        <div className="hidden lg:block w-full h-full absolute inset-0 z-20">
          {modules.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`
                  absolute ${card.position}
                  flex flex-col text-left p-6 rounded-2xl
                  bg-white/15 backdrop-blur-lg border border-cyan-400/40
                  shadow-[0_0_40px_rgba(34,211,238,0.2)]
                  transition-all duration-500 group hover:bg-white/20 hover:border-cyan-400
                  w-[380px] xl:w-[440px] 
                  min-h-[180px]
                `}
              >
                <div className="absolute top-5 right-5 text-cyan-400 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                  <Icon size={32} strokeWidth={1.5} />
                </div>

                <div className="mb-3">
                  <span className="px-8 py-2 bg-gray-500/80 text-white text-[10px] font-bold uppercase tracking-widest">
                    {card.module}
                  </span>
                </div>

                {/* Título Estilizado con degradado en Forge */}
                <StyledTitle text={card.title} />

                <p className="text-gray-200 text-sm leading-relaxed mb-4 opacity-95">
                  {card.description}
                </p>

                <ul className="text-gray-100 space-y-2 font-medium border-t border-white/20 pt-4">
                  {card.items.slice(0, 4).map((item, i) => (
                    <li key={i} className="text-sm flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* GRID MOBILE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 mt-12 lg:hidden relative z-20 w-full">
          {mobileModules.map((card) => {
            const Icon = card.icon;
            return (
              <div key={`mob-${card.id}`} className="w-full text-left p-6 rounded-2xl flex flex-col bg-white/10 backdrop-blur-md border border-cyan-400/30 shadow-lg min-h-[220px]">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-2 py-0.5 rounded-full bg-cyan-400 text-black text-[9px] font-bold uppercase">{card.module}</span>
                  <Icon size={28} className="text-cyan-400" />
                </div>
                
                {/* Título Estilizado Mobile */}
                <StyledTitle text={card.title} isMobile={true} />

                <p className="text-gray-200 text-sm leading-relaxed mb-4">{card.description}</p>
                <ul className="space-y-2 border-t border-white/10 pt-4">
                  {card.items.map((item, i) => (
                    <li key={i} className="text-gray-100 text-sm flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ModulesSection;