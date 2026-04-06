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
      "Código generado queda en repositorio del cliente"
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
    <section id="que-es" className="relative text-center overflow-hidden py-24 bg-[#030b1a]">
      
      {/* 1. Encabezado */}
      <div className="max-w-5xl mx-auto px-6 relative z-30 -mb-12">
        <p className="text-cyan-400 text-xs tracking-[0.35em] uppercase mb-4 opacity-80">[ QUÉ ES SMARTFORGE ]</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          De la idea al<br />código probado.
        </h2>
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-[750px]">
        
        {/* 2. Imagen de fondo centrada */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <img
            src={modulesImage}
            alt=""
            className="w-full max-w-[1250px] opacity-30 mix-blend-lighten brightness-125 scale-110"
          />
        </div>

        {/* 3. Desktop Cards (Horizontal + Simétricas) */}
        <div className="hidden lg:flex flex-row justify-center items-center gap-12 z-20 w-full px-4 -mt-32">
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
                {/* Tag Módulo */}
                <div className="mb-4">
                  <span className="px-3 py-1 border border-white/10 bg-white/5 rounded-full text-white text-[9px] font-bold uppercase tracking-widest">
                    {card.module}
                  </span>
                </div>

                <StyledTitle title={card.title} />

                {/* Contenedor Descripción con Altura Fija para Simetría */}
                <div className="min-h-[85px] mb-6">
                  <p className="text-gray-300 text-xs leading-relaxed opacity-80">
                    {card.description}
                  </p>
                </div>

                {/* Lista de Items con Línea Divisoria Alineada */}
                <ul className="text-gray-300 space-y-2.5 border-t border-white/10 pt-6">
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

        {/* 4. Mobile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 lg:hidden relative z-20 w-full max-w-2xl mx-auto mt-8">
          {modules.map((card) => (
            <div 
              key={`mob-${card.id}`} 
              className="p-[1px] rounded-[2rem] w-full" 
              style={{ background: forgeGradientStr }}
            >
              <div className="w-full text-left rounded-[1.9rem] flex flex-col bg-[#030b1a]/95 p-8 min-h-[320px]">
                <span className="mb-4 px-3 py-1 rounded-full bg-white/10 text-white text-[9px] font-bold uppercase self-start">
                  {card.module}
                </span>
                <StyledTitle title={card.title} isMobile={true} />
                <p className="text-gray-300 text-sm mb-6 opacity-80">{card.description}</p>
                <ul className="space-y-3 border-t border-white/10 pt-6 mt-auto">
                  {card.items.slice(0, 4).map((item, i) => (
                    <li key={i} className="text-gray-200 text-xs flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                      {item}
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