import React from "react"

const steps = [
  {
    id: 1,
    title: "Define El Objetivo",
    text: "Tu equipo establece el contexto del negocio, los requerimientos clave y los criterios de éxito. SmartForge los transforma en un plan técnico ejecutable."
  },
  {
    id: 2,
    title: "Arquitectura Y Planificación",
    text: "La IA genera la arquitectura del sistema y el backlog estructurado. Expertos validan cada decisión técnica antes de avanzar al desarrollo."
  },
  {
    id: 3,
    title: "Desarrollo Asistido Por IA",
    text: "El equipo desarrolla con asistencia inteligente que mantiene consistencia, detecta deuda técnica en tiempo real y acelera cada ciclo de implementación."
  },
  {
    id: 4,
    title: "QA Automatizado Y Despliegue",
    text: "Validación continua, pipelines automatizados y despliegue a producción con trazabilidad completa. Tu equipo entrega con confianza."
  }
]

const ProcessSection = () => {
  return (
    <section
      id="como-funciona"
      className="py-32 relative overflow-hidden"
    >

      <div className="max-w-[1300px] mx-auto px-6">

        {/* etiqueta */}
        <p className="text-cyan-400 !text-xs tracking-[0.35em] uppercase mb-6">
          [ CÓMO FUNCIONA ]
        </p>

        {/* titulo */}
        <h2 className="!text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
          De la idea al
          <br />
          despliegue en producción.
        </h2>

        {/* cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {steps.map((step) => (
            <div
              key={step.id}
              className="
              relative
              p-6
              rounded-xl
              bg-gradient-to-br from-cyan-500/20 to-transparent
              border border-cyan-400/30
              backdrop-blur-sm
              hover:border-cyan-400
              transition
              "
            >

              {/* número */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-400 text-cyan-400 font-semibold mb-4">
                {step.id}
              </div>

              {/* título */}
              <h3 className="text-white font-semibold text-lg mb-3">
                {step.title}
              </h3>

              {/* texto */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {step.text}
              </p>

            </div>
          ))}

        </div>

        {/* SECCIÓN ANTES vs SMARTFORGE */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-8 mt-20">

          {/* ANTES */}
          <div className="
            text-center
            rounded-xl
            px-8 py-6
            bg-gradient-to-r
            from-orange-500
            to-red-400
            text-white
            shadow-lg
          ">
            <p className="font-semibold uppercase tracking-wide mb-1">
              ANTES
            </p>

            <p className="text-sm opacity-90">
              Mismo equipo. Más problemas. Menos resultados.
            </p>
          </div>

          {/* FLECHA */}
          <div className="text-white text-2xl flex justify-center">
            →
          </div>

          {/* CON SMARTFORGE */}
          <div className="
            text-center
            rounded-xl
            px-8 py-6
            bg-gradient-to-r
            from-blue-500
            to-teal-400
            text-white
            shadow-lg
          ">
            <p className="font-semibold uppercase tracking-wide mb-1">
              CON SMARTFORGE
            </p>

            <p className="text-sm opacity-90">
              Mismo equipo. Mismo presupuesto. Mejor entrega.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default ProcessSection