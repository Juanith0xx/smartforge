import React from "react"
import modulesImage from "../assets/images/modulo.png"

const modules = [
  {
    id: 1,
    title: "SmartForge Arquitectura",
    module: "MÓDULO 1",
    position: "lg:left-[5%] lg:bottom-[25%]",
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
    position: "lg:left-[10%] lg:top-[10%]",
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
    position: "lg:left-1/2 lg:top-[35%] lg:-translate-x-1/2",
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
    position: "lg:right-[10%] lg:top-[8%]",
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
    position: "lg:right-[5%] lg:bottom-[25%]",
    items: [
      "Automatización de pruebas end-to-end",
      "Pipelines de CI/CD configurados",
      "Despliegues con rollback automático",
      "Trazabilidad completa hasta producción"
    ]
  }
]

const ModulesSection = () => {
  return (
    <section id="que-es" className="relative text-center overflow-hidden mt-8 py-12">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <p className="text-cyan-400 text-[10px] md:text-xs tracking-[0.35em] uppercase mb-4">
          [ QUÉ ES SMARTFORGE ]
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Cinco módulos.
          <br />
          Un solo flujo.
        </h2>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6">
          Desde el diseño arquitectónico hasta el despliegue en producción,
          SmartForge cubre cada etapa del ciclo de desarrollo con IA y
          supervisión experta.
        </p>

        {/* BOTÓN */}
        <div className="flex justify-center mt-8 md:mt-10">
          <a
            href="#formulario"
            className="
            flex items-center gap-4
            px-8 md:px-10 py-3
            rounded-full
            text-white font-semibold
            text-sm md:text-base
            bg-gradient-to-r from-cyan-500 to-teal-400
            shadow-[0_0_25px_rgba(34,211,238,0.45)]
            hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]
            transition-all duration-300
            "
          >
            SOLICITA TU DEMO
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white shadow-inner">
              ↓
            </span>
          </a>
        </div>
      </div>

      {/* CONTENEDOR DE MÓDULOS */}
      <div className="relative flex flex-col items-center lg:-mt-20">

        {/* IMAGEN CENTRAL (SOLO DESKTOP) */}
        <div className="relative hidden lg:flex justify-center w-full">
          <img
            src={modulesImage}
            alt="SmartForge módulos"
            className="w-[1200px] xl:w-[1500px] 2xl:w-[1700px] max-w-none object-cover scale-105"
          />
          <div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-[#020617] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-[#020617] to-transparent pointer-events-none" />
        </div>

        {/* GRID MOBILE (CON MEJORA DE GRADIENTE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 mt-12 lg:hidden max-w-5xl w-full relative z-20">
          {modules.map((card) => (
            <div
              key={card.id}
              className="
                w-full text-left p-6 rounded-2xl
                /* GRADIENTE RESPONSIVO */
                bg-gradient-to-br from-[#0b1b2b] via-[#0b1b2b] to-[#122d42]
                backdrop-blur-md border border-cyan-400/30
                shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(34,211,238,0.1)]
                active:scale-[0.98] transition-all duration-300
              "
            >
              <div className="flex justify-between items-center mb-4">
                <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest">
                  {card.module}
                </p>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></div>
              </div>

              <h3 className="text-white font-bold text-lg mb-4">
                {card.title}
              </h3>

              <ul className="space-y-2.5">
                {card.items.map((item, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start gap-2.5">
                    <span className="text-cyan-500 text-xs mt-1">▹</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CARDS DESKTOP (POSICIONAMIENTO ORIGINAL) */}
        {modules.map((card) => (
          <div
            key={card.id}
            className={`
              hidden lg:block
              absolute ${card.position}
              w-[260px] xl:w-[300px]
              text-left p-6 rounded-xl
              bg-[#0b1b2b]/80 backdrop-blur-md
              border border-cyan-400/40
              shadow-[0_0_40px_rgba(0,255,255,0.1)]
              hover:border-cyan-400 transition-colors duration-300
            `}
          >
            <p className="text-cyan-300 text-[10px] uppercase tracking-[0.2em] mb-2">
              {card.module}
            </p>
            <h3 className="text-white font-semibold text-base xl:text-lg mb-4">
              {card.title}
            </h3>
            <ul className="text-gray-300 text-sm space-y-2">
              {card.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>
  )
}

export default ModulesSection