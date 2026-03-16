import React from "react"
import glowCurve from "../assets/images/glow-curve.png"
import { Cpu, ShieldCheck, Zap, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "Arquitectura desde el inicio",
    text: "Diseña componentes, modelos de datos y APIs con estándares de seguridad y escalabilidad integrados desde el día uno."
  },
  {
    icon: ShieldCheck,
    title: "Planificación que se ejecuta",
    text: "Define objetivos, alcance y roadmap con precisión. Genera historias de usuario y estimaciones listas para el equipo."
  },
  {
    icon: Zap,
    title: "Desarrollo inteligente",
    text: "Acelera implementación, refactor y pruebas con IA que aprende de tu negocio."
  },
  {
    icon: CheckCircle,
    title: "QA y entrega continua",
    text: "Automatiza validación, pipelines y despliegues con trazabilidad completa hasta producción."
  }
]

const ResultsSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden min-h-screen flex flex-col justify-center">

      {/* CONTENIDO */}
      <div className="max-w-[1300px] mx-auto px-6 text-center relative z-10">

        <p className="text-cyan-400 text-[10px] md:text-xs tracking-[0.35em] uppercase mb-4 md:mb-6">
          [ SOLUCIÓN ]
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
          Resultados concretos.
          <br className="hidden sm:block" />
          <span className="text-white/90"> Desde el primer sprint.</span>
        </h2>

        <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          SmartForge no reemplaza a tu equipo: lo potencia.
          La IA supervisada con expertos garantizan coherencia y calidad en cada etapa.
        </p>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-20">

          {features.map((feature, i) => {
            const Icon = feature.icon

            return (
              <div
                key={i}
                className="
                p-6 md:p-8
                rounded-2xl
                border border-white/10
                /* MEJORA: Gradiente responsivo aplicado aquí */
                bg-gradient-to-br from-[#0b1b2b] via-[#0b1b2b] to-[#122d42]
                lg:bg-none lg:bg-white/[0.03] 
                
                backdrop-blur-md
                hover:border-cyan-400/50
                hover:bg-white/[0.06]
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition-all duration-300
                text-left
                group
                active:scale-[0.98] lg:active:scale-100
                "
              >

                <div className="w-12 h-12 rounded-xl border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
                  <Icon size={22} />
                </div>

                <h3 className="text-white font-bold text-lg mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                  {feature.text}
                </p>

              </div>
            )
          })}

        </div>

      </div>

      {/* SCROLL DOWN */}
      <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-gray-500 text-[10px] tracking-[0.4em] z-10 uppercase">
        <div className="animate-bounce mb-2 text-cyan-400">◦</div>
        Scroll
      </div>

      {/* CURVA LUMINOSA */}
      <div className="absolute bottom-[-200px] md:bottom-[-600px] lg:bottom-[-750px] left-1/2 -translate-x-1/2 w-[150%] md:w-[2400px] pointer-events-none opacity-50 md:opacity-90">
        <img
          src={glowCurve}
          alt="Glow Decoration"
          className="w-full blur-[2px] md:blur-[1px]"
        />
      </div>

    </section>
  )
}

export default ResultsSection