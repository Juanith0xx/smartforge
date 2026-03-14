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
    <section className="py-10 relative overflow-hidden min-h-[900px]">

      {/* CONTENIDO */}
      <div className="max-w-[1300px] mx-auto px-6 text-center relative z-10">

        <p className="text-cyan-400 text-xs tracking-[0.35em] uppercase mb-6">
          [ SOLUCIÓN ]
        </p>

        <h2 className="!text-5xl md:text-6xl font-bold text-white leading-tight">
          Resultados concretos.
          <br />
          Desde el primer sprint.
        </h2>

        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          SmartForge no reemplaza a tu equipo: lo potencia.
          La IA supervisada con expertos garantizan coherencia y calidad en cada etapa.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, i) => {
            const Icon = feature.icon

            return (
              <div
                key={i}
                className="
                p-6
                rounded-xl
                border border-white/10
                bg-black/40
                backdrop-blur-sm
                hover:border-cyan-400
                hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
                transition
                text-left
                "
              >

                <div className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 mb-4">
                  <Icon size={20} />
                </div>

                <h3 className="text-white font-semibold mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.text}
                </p>

              </div>
            )
          })}

        </div>

      </div>

      {/* SCROLL DOWN */}
      <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 text-center text-gray-300 text-xs tracking-widest z-10">
        <div className="text-lg mb-1">◦</div>
        SCROLLDOWN
      </div>

      {/* CURVA LUMINOSA */}
      <div className="absolute bottom-[-750px] left-1/2 -translate-x-1/2 w-[2400px] pointer-events-none">

        <img
          src={glowCurve}
          alt="Glow"
          className="w-full opacity-90 blur-[1px] scale-110"
        />

      </div>

    </section>
  )
}

export default ResultsSection