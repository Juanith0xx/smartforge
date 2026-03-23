import React from "react"

const steps = [
  {
    id: 1,
    title: "Define el objetivo",
    text: "Tu equipo establece el contexto del negocio, los requerimientos clave y los criterios de éxito. SmartForge los transforma en un plan técnico ejecutable."
  },
  {
    id: 2,
    title: "Arquitectura y Planificación",
    text: "La IA genera la arquitectura del sistema y el backlog estructurado. Expertos validan cada decisión técnica antes de avanzar al desarrollo."
  },
  {
    id: 3,
    title: "Desarrollo asistido por IA",
    text: "Asistencia inteligente que mantiene consistencia del código, detecta y corrige deuda técnica en tiempo real y acelera cada ciclo de desarrollo — sin fricciones."
  },
  {
    id: 4,
    title: "QA automatizado y despliegue",
    text: "Validación continua, pipelines automatizados y despliegue a producción con trazabilidad completa. Tu equipo entrega con confianza."
  }
]

const ProcessSection = () => {
  return (
    <section id="como-funciona" className="mt-32 relative overflow-hidden bg-[#020617]">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">

        <p className="text-cyan-400 text-xs tracking-[0.35em] uppercase mb-6 font-bold">
          [ CÓMO FUNCIONA ]
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-16">
          De la idea al<br />despliegue en producción.
        </h2>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {steps.map((step) => (
            <div
              key={step.id}
              className="
                relative
                rounded-[32px]
                p-8
                min-h-[280px]
                bg-[#050416]
                overflow-hidden
                border border-white/5
                transition-all duration-500
                hover:translate-y-[-5px]
                group
              "
            >
              {/* --- GRADIENTES PERMANENTES --- */}
              {/* Luz superior derecha fija (Cian) */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#29D9C2] opacity-[0.25] blur-[60px]" />
              
              {/* Luz inferior izquierda fija (Azul) */}
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#004AAD] opacity-[0.25] blur-[60px]" />

              {/* CABECERA DE LA CARD */}
              <div className="relative flex items-center gap-4 mb-8">
                {/* CÍRCULO CON DEGRADADO PERMANENTE */}
                <div className="
                  flex-shrink-0
                  flex items-center justify-center 
                  w-12 h-12 rounded-full 
                  p-[2px]
                  bg-[linear-gradient(180deg,#004AAD_0%,#0097B2_31%,#29D9C2_100%)]
                  /* Añadimos un pequeño brillo al círculo también */
                  shadow-[0_0_15px_rgba(34,211,238,0.2)]
                ">
                  <div className="flex items-center justify-center w-full h-full bg-[#050416] rounded-full text-white font-bold text-base">
                    {step.id}
                  </div>
                </div>

                <h3 className="text-white font-bold text-xl leading-tight">
                  {step.title}
                </h3>
              </div>

              {/* TEXTO DESCRIPTIVO */}
              <div className="relative">
                <p className="text-gray-400 text-[15px] leading-relaxed font-normal">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SECCIÓN COMPARATIVA */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-8 mt-24 relative z-20">
          <div className="text-center rounded-xl px-8 py-7 bg-[linear-gradient(90deg,#F99B06_0%,#F99B06_31%,#F57575_100%)] text-white shadow-[0_10px_30px_rgba(249,155,6,0.25)]">
            <p className="font-bold uppercase tracking-[0.2em] text-xs mb-2">ANTES</p>
            <p className="text-sm font-medium opacity-95">Herramientas con IA poderosas por separado, sin impacto en el flujo completo.</p>
          </div>
          <div className="text-white/30 text-3xl hidden md:flex justify-center">→</div>
          <div className="text-center rounded-xl px-8 py-7 bg-[linear-gradient(90deg,#004AAD_0%,#0097B2_31%,#29D9C2_100%)] text-white shadow-[0_10px_40px_rgba(0,151,178,0.35)]">
            <p className="font-bold uppercase tracking-[0.2em] text-xs mb-2">CON SMARTFORGE</p>
            <p className="text-sm font-medium opacity-95">IA orquestada de inicio a fin, con resultados trazables y el flujo completo acelerado.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProcessSection;