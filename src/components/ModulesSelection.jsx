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
    <section id="que-es" className="relative text-center overflow-hidden mt-8">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">

        <p className="text-cyan-400 text-xs tracking-[0.35em] uppercase mb-4 pt-2">
          [ QUÉ ES SMARTFORGE ]
        </p>

        <h2 className="text-3xl sm:text-4xl md:!text-5xl lg:text-6xl font-bold text-white leading-tight">
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
            px-8 md:px-10 py-2
            rounded-full
            text-white font-semibold
            text-sm md:text-base
            bg-gradient-to-r from-cyan-500 to-teal-400
            shadow-[0_0_25px_rgba(34,211,238,0.45)]
            hover:scale-105
            transition-all duration-300
            "
          >
            SOLICITA TU DEMO

            <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-500 text-white">
              ↓
            </span>
          </a>
        </div>

      </div>


      {/* CONTENEDOR */}
      <div className="relative flex flex-col items-center lg:-mt-28">

        {/* IMAGEN CENTRAL */}
        <div className="relative hidden lg:flex justify-center w-full">

          <img
            src={modulesImage}
            alt="SmartForge módulos"
            className="
            w-[1200px]
            xl:w-[1500px]
            2xl:w-[1700px]
            max-w-none
            object-cover
            scale-105
            "
          />

          {/* FADE IZQUIERDO */}
          <div className="absolute left-0 top-0 w-40 xl:w-48 h-full bg-gradient-to-r from-[#020617] to-transparent pointer-events-none" />

          {/* FADE DERECHO */}
          <div className="absolute right-0 top-0 w-40 xl:w-48 h-full bg-gradient-to-l from-[#020617] to-transparent pointer-events-none" />

        </div>


        {/* GRID MOBILE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 mt-10 lg:hidden max-w-5xl">
          {modules.map((card) => (
            <div
              key={card.id}
              className="
                w-full
                text-left
                p-5
                rounded-xl
                bg-[#0b1b2b]/70
                backdrop-blur-md
                border border-cyan-400/40
                shadow-[0_0_30px_rgba(0,255,255,0.15)]
              "
            >
              <p className="text-cyan-300 text-xs uppercase tracking-widest mb-2">
                {card.module}
              </p>

              <h3 className="text-white font-semibold text-base mb-3">
                {card.title}
              </h3>

              <ul className="text-gray-300 text-sm space-y-1">
                {card.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* CARDS DESKTOP */}
        {modules.map((card) => (
          <div
            key={card.id}
            className={`
              hidden lg:block
              absolute ${card.position}
              w-[260px] xl:w-[300px]
              text-left
              p-5 xl:p-6
              rounded-xl
              bg-[#0b1b2b]/70
              backdrop-blur-md
              border border-cyan-400/40
              shadow-[0_0_30px_rgba(0,255,255,0.15)]
            `}
          >
            <p className="text-cyan-300 text-xs uppercase tracking-widest mb-2">
              {card.module}
            </p>

            <h3 className="text-white font-semibold text-base xl:text-lg mb-3">
              {card.title}
            </h3>

            <ul className="text-gray-300 text-sm space-y-1">
              {card.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>

    </section>
  )
}

export default ModulesSection