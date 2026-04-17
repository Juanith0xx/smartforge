import React from "react"
import glowCurve from "../assets/images/glow-curve.png"

// 1. IMPORTACIÓN DE ICONOS SVG
import IconCpu from "../assets/icons/icon_1.svg"
import IconShield from "../assets/icons/Icon_2.svg"
import IconZap from "../assets/icons/icon_3.svg"
import IconCheck from "../assets/icons/Icon_4.svg"

const features = [
  {
    icon: IconCpu,
    title: "Arquitectura desde el inicio",
    text: "Diseña componentes, modelos de datos y APIs con estándares de seguridad y escalabilidad integrados desde el día uno."
  },
  {
    icon: IconShield,
    title: "Planificación que se ejecuta",
    text: "Define objetivos y alcances. Ejecuta historias con la arquitectura propuesta y genera estimaciones listas para el equipo sin ambigüedades."
  },
  {
    icon: IconZap,
    title: "Desarrollo inteligente",
    text: "Acelera implementación, refactor y pruebas con IA que aprende de tu negocio y mantiene consistencia en todo el proceso de desarrollo."
  },
  {
    icon: IconCheck,
    title: "QA y entrega continua",
    text: "Automatiza el proceso de calidad de software para asegurar el cumplimiento de los estándares y que el código responda a la idea inicial."
  }
]

const ResultsSection = () => {
  return (
    <section className="pt-12 md:pt-16 pb-24 relative overflow-hidden flex flex-col bg-[#020617]">

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-[1500px] mx-auto px-6 text-center relative z-10">

        <p className="text-[#29D9C2] text-[10px] md:text-xs tracking-[0.40em] font-extrabold uppercase mb-4 md:mb-6">
          [ SOLUCIÓN ]
        </p>

        <h2 className="!text-5xl sm:!text-5xl md:!text-5xl font-bold text-white leading-tight">
          Resultados concretos.
          <br className="hidden sm:block" />
          <span className="text-white/90"> Desde el primer sprint.</span>
        </h2>

        <p className="mt-4 text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Del requerimiento al testing - con la velocidad y eficiencia que tu competencia aún no tiene.
        </p>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10 md:mt-14">
          {features.map((feature, i) => (
            <div
              key={i}
              className="
                relative p-[1px] rounded-2xl flex
                /* Borde degradado permanente */
                bg-[linear-gradient(180deg,#004AAD_0%,#0097B2_31%,#29D9C2_100%)]
                /* Sombra suave permanente para resaltar el borde */
                shadow-[0_10px_30px_rgba(0,151,178,0.15)]
              "
            >
              {/* FONDO INTERNO */}
              <div className="
                bg-[#050416] rounded-[15px] p-6 md:p-8 h-full w-full
                flex flex-col items-start text-left
              ">
                
                {/* CONTENEDOR DEL ICONO */}
                <div className="flex items-center justify-center mb-6 h-12">
                  <img 
                    src={feature.icon} 
                    alt={feature.title} 
                    className="w-12 h-12 object-contain" 
                  />
                </div>

                {/* TÍTULO */}
                <h3 className="text-white font-bold text-lg xl:text-[19px] mb-3 whitespace-nowrap overflow-hidden text-ellipsis w-full min-h-[1.5em]">
                  {feature.title}
                </h3>

                {/* TEXTO DESCRIPTIVO */}
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DECORACIÓN CURVA INFERIOR */}
      <div className="absolute bottom-[-200px] md:bottom-[-600px] lg:bottom-[-750px] left-1/2 -translate-x-1/2 w-[150%] md:w-[2200px] pointer-events-none opacity-50 md:opacity-90">
        <img
          src={glowCurve}
          alt="Glow Decoration"
          className="w-full"
        />
      </div>

    </section>
  )
}

export default ResultsSection;