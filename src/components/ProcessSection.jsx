import React from "react"

const steps = [
  { 
    id: 0,
    title: "Sincronización de estándares",
    text: "SmartForge se contextualiza con los estándares de desarrollo, lineamientos de arquitectura y de seguridad, normativas y reglas de negocios para asegurar que el flujo de desarrollo este dentro del contexto empresarial del cliente."
  },
  {
    id: 1,
    title: "Define tu idea",
    text: "Evaluamos tu requerimiento de negocio y creamos historias de usuario detalladas para asegurar la comprensión total y la priorización de necesidades."
  },
  {
    id: 2,
    title: "Arquitectura y Planificación",
    text: "La IA genera la arquitectura del sistema y el backlog estructurado. Expertos validan cada decisión técnica antes de iniciar el desarrollo."
  },
  {
    id: 3,
    title: "Desarrollo asistido por IA",
    text: "Codificación siguiendo estándares de alta calidad, colaborando en el diseño y ejecución de pruebas para optimizar cada función."
  },
  {
    id: 4,
    title: "QA y despliegue automatizado",
    text: "Ejecución de pruebas para detectar errores, generar documentación y asegurar la calidad y experiencia del producto."
  }
]

const ProcessSection = () => {
  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* CONTENEDOR CENTRADO */}
        <div className="text-center mb-16">
            <p className="text-cyan-400 text-xs tracking-[0.35em] uppercase mb-6 font-bold opacity-80">
            [ CÓMO FUNCIONA ]
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            De la idea al<br />despliegue en producción.
            </h2>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="
                relative
                rounded-[32px]
                p-8
                min-h-[340px]
                bg-[#050416]
                overflow-hidden
                border border-cyan-400 sm:border-white/5 
                transition-all duration-500
                hover:translate-y-[-8px]
                hover:border-white/20
                group
                flex flex-col
              "
            >
              {/* --- GRADIENTES PERMANENTES --- */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#29D9C2] opacity-[0.15] blur-[60px] group-hover:opacity-[0.25] transition-opacity" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#004AAD] opacity-[0.15] blur-[60px] group-hover:opacity-[0.25] transition-opacity" />

              {/* CABECERA: Círculo y Número */}
              <div className="relative mb-8">
                <div className="
                  flex-shrink-0
                  flex items-center justify-center 
                  w-11 h-11 rounded-full 
                  p-[1px]
                  bg-[linear-gradient(180deg,#004AAD_0%,#0097B2_31%,#29D9C2_100%)]
                  shadow-[0_0_15px_rgba(34,211,238,0.2)]
                ">
                  <div className="flex items-center justify-center w-full h-full bg-[#050416] rounded-full text-white font-bold text-sm">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* TÍTULO */}
              <div className="relative min-h-[60px] mb-4 flex items-start">
                <h3 className="text-white font-bold text-lg leading-tight group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
              </div>

              {/* TEXTO DESCRIPTIVO */}
              <div className="relative min-h-[140px]">
                <p className="text-gray-400 text-[14px] leading-relaxed font-normal opacity-90 group-hover:opacity-100 transition-opacity text-left">
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