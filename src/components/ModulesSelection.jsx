import React from "react"
import modulesImage from "../assets/images/modulo.png"

const modules = [
  {
    id: 1,
    title: "Planificación",
    module: "IDEA 1",
    description: "Convierte objetivos de negocio en un plan ejecutable. Define alcance, genera historias de usuario y backlog.",
    items: [
      "Definición de alcance",
      "Historias de usuario",
      "Estimaciones y roadmap",
      "Alineación negocio-tecnología"
    ]
  },
  {
    id: 2,
    title: "Arquitectura",
    module: "IDEA 2",
    description: "Diagrama el roadmap técnico preciso para tu desarrollo. Define los componentes, flujos de datos e integraciones.",
    items: [
      "Diseño de microservicios",
      "Modelado de datos y APIs",
      "Estándares y seguridad",
      "Documentación técnica"
    ]
  },
  {
    id: 3,
    title: "Desarrollo",
    module: "IDEA 3",
    description: "Acelera la implementación con IA que entiende el contexto. Refactoriza e implementa con consistencia.",
    items: [
      "Asistencia de código IA",
      "Deuda técnica controlada",
      "Consistencia de estilo",
      "Código en repositorio del cliente"
    ]
  },
  {
    id: 4,
    title: "QA",
    module: "IDEA 4",
    description: "Automatiza la validación, los pipelines de CI/CD y los despliegues con trazabilidad completa.",
    items: [
      "Ejecución pruebas funcionales",
      "Incremento cobertura 10x",
      "Disminución esfuerzo manual",
      "Evidencia automatizada"
    ]
  }
]

const StyledTitle = ({ title, isMobile = false }) => {
  const forgeGradient = {
    background: `linear-gradient(to right, #F99B06 0%, #7F2191 35%, #004AAD 65%, #29D9C2 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <div className="mb-4">
      <h3 className={`text-white font-bold ${isMobile ? 'text-xl' : 'text-2xl'} leading-tight tracking-tight`}>
        Smart<span style={forgeGradient}>Forge</span>
      </h3>
      <p className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-white mt-0.5 leading-tight uppercase`}>
        {title}
      </p>
    </div>
  );
};

const ModulesSection = () => {
  const forgeGradientStr = "linear-gradient(to right, #F99B06 0%, #7F2191 35%, #004AAD 65%, #29D9C2 100%)";

  return (
    <section id="que-es" className="relative text-center overflow-hidden pt-24 -pb-4 lg:pb-24 bg-[#030b1a]">
      
      {/* 1. Encabezado */}
      <div className="max-w-5xl mx-auto px-6 relative z-30 mb-12">
        <p className="text-cyan-400 text-xs tracking-[0.35em] uppercase mb-4 opacity-80">[ QUÉ ES SMARTFORGE ]</p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
          De la idea al <br className="hidden sm:block" />código probado.
        </h2>
        <h3 className="max-w-3xl mx-auto text-lg sm:text-2xl mt-6 font-medium text-gray-300 leading-relaxed">
          La solución integrada. Todos los módulos conectados en un solo flujo continuo: desde la arquitectura inicial hasta el despliegue final.
        </h3>
      </div>

      {/* MODIFICADO: min-h-0 para móvil evita el espacio vacío gigante abajo */}
      <div className="relative flex flex-col items-center justify-center min-h-0 lg:min-h-[750px]">
        
        {/* 2. Imagen de fondo centrada */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <img
            src={modulesImage}
            alt=""
            className="w-full max-w-[1250px] opacity-20 sm:opacity-30 mix-blend-lighten brightness-125 scale-125 sm:scale-110"
          />
        </div>

        {/* 3. Desktop Cards (Horizontal + Simétricas) */}
        <div className="hidden lg:flex flex-row justify-center items-center gap-8 xl:gap-12 z-20 w-full px-4 -mt-32">
          {modules.map((card) => (
            <div
              key={card.id}
              className="p-[1px] rounded-[2rem] transition-all duration-500 group hover:scale-[1.05] hover:-translate-y-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              style={{ background: forgeGradientStr }}
            >
              <div 
                className="h-full rounded-[1.9rem] flex flex-col text-left bg-[#030b1a]/90 backdrop-blur-3xl p-8"
                style={{ width: '285px', minHeight: '440px' }}
              >
                <div className="mb-4">
                  <span className="px-3 py-1 border border-white/10 bg-white/5 rounded-full text-white text-[9px] font-bold uppercase tracking-widest">
                    {card.module}
                  </span>
                </div>

                <StyledTitle title={card.title} />

                <div className="min-h-[85px] mb-6">
                  <p className="text-gray-300 text-xs leading-relaxed opacity-80">
                    {card.description}
                  </p>
                </div>

                <ul className="text-gray-300 space-y-2.5 border-t border-white/10 pt-6 mt-auto">
                  {card.items.map((item, i) => (
                    <li key={i} className="text-[12px] flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0 shadow-[0_0_5px_#22d3ee]" />
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 4. VERSIÓN RESPONSIVA OPTIMIZADA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 lg:hidden relative z-20 w-full max-w-4xl mx-auto">
          {modules.map((card) => (
            <div 
              key={`mob-${card.id}`} 
              className="p-[1px] rounded-[2rem] w-full shadow-lg" 
              style={{ background: forgeGradientStr }}
            >
              {/* MODIFICADO: Padding inferior reducido en móvil (pb-6) */}
              <div className="w-full text-left rounded-[1.9rem] flex flex-col bg-[#030b1a]/95 backdrop-blur-xl p-7 pb-6 sm:p-8 sm:pb-8 h-full">
                <div className="flex justify-between items-center mb-6">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
                    {card.module}
                  </span>
                </div>
                
                <StyledTitle title={card.title} isMobile={true} />

                {/* MODIFICADO: min-h ajustado para móvil para evitar huecos innecesarios */}
                <div className="min-h-[60px] sm:min-h-[90px] mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed opacity-90">
                    {card.description}
                  </p>
                </div>

                <ul className="space-y-3 border-t border-white/10 pt-5 mt-auto">
                  {card.items.map((item, i) => (
                    <li key={i} className="text-gray-200 text-[13px] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.4)]" />
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ModulesSection;