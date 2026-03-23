import React from "react"
import modulesImage from "../assets/images/modulo.png"

const modules = [
  {
    id: 1,
    title: "Arquitectura",
    module: "MÓDULO 2",
    position: "lg:left-[3%] lg:bottom-[8%]",
    description: "Diagrama el roadmap técnico preciso para tu desarrollo. Define los componentes, flujos de datos e integraciones.",
    items: [
      "Diseño de microservicios",
      "Modelado de datos y APIs",
      "Estándares y seguridad",
      "Documentación técnica"
    ]
  },
  {
    id: 2,
    title: "Planificación",
    module: "MÓDULO 1",
    position: "lg:left-[8%] lg:-top-[10%]",
    description: "Convierte objetivos de negocio en un plan ejecutable. Define alcance, genera historias de usuario y backlog.",
    items: [
      "Definición de alcance",
      "Historias de usuario",
      "Estimaciones y roadmap",
      "Alineación negocio-tecnología"
    ]
  },
  {
    id: 3,
    title: "Todos los módulos",
    module: "SUITE COMPLETA",
    position: "lg:left-1/2 lg:top-[10%] lg:-translate-x-1/2",
    description: "La solución integrada. Todos los Módulos conectados en un solo flujo continuo: desde la arquitectura inicial hasta el despliegue final.",
    items: [
      "Integración completa de todos los módulos",
      "Dashboard unificado de avance y métricas",
      "Supervisión experta en cada fase",
      "Trazabilidad completa de decisiones técnicas"
    ]
  },
  {
    id: 4,
    title: "Desarrollo",
    module: "MÓDULO 3",
    position: "lg:right-[8%] lg:-top-[10%]",
    description: "Acelera la implementación con IA que entiende el contexto. Refactoriza e implementa con consistencia.",
    items: [
      "Asistencia de código IA",
      "Deuda técnica controlada",
      "Consistencia de estilo",
      "Pruebas automatizadas"
    ]
  },
  {
    id: 5,
    title: "QA",
    module: "MÓDULO 4",
    position: "lg:right-[3%] lg:bottom-[8%]",
    description: "Automatiza la validación, los pipelines de CI/CD y los despliegues con trazabilidad completa.",
    items: [
      "QA automatizado",
      "Pipelines de CI/CD",
      "Rollback automático",
      "Trazabilidad producción"
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
      <h3 className={`text-white font-bold ${isMobile ? 'text-2xl' : 'text-3xl'} leading-tight tracking-tight`}>
        Smart<span style={forgeGradient}>Forge</span>
      </h3>
      <p className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-white mt-0.5 leading-tight uppercase`}>
        {title}
      </p>
    </div>
  );
};

const ModulesSection = () => {
  const forgeGradientStr = "linear-gradient(to right, #F99B06 0%, #7F2191 35%, #004AAD 65%, #29D9C2 100%)";

  // --- CAMBIO CLAVE AQUÍ ---
  // Definimos el orden explícito por ID: Suite (3), Mod 1 (2), Mod 2 (1), Mod 3 (4), Mod 4 (5)
  const mobileOrder = [3, 2, 1, 4, 5];
  const mobileModules = mobileOrder.map(id => modules.find(m => m.id === id));

  return (
    <section id="que-es" className="relative text-center overflow-hidden py-24 bg-[#030b1a]">
      
      <div className="max-w-5xl mx-auto px-6 relative z-30 mb-12">
        <p className="text-cyan-400 text-xs tracking-[0.35em] uppercase mb-4 opacity-80">[ QUÉ ES SMARTFORGE ]</p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
          Cinco módulos.<br />Un solo flujo.
        </h2>
      </div>

      <div className="relative flex flex-col items-center lg:-mt-24 min-h-[850px] justify-center">
        
        {/* IMAGEN DE FONDO (DESKTOP) */}
        <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none">
          <img
            src={modulesImage}
            alt=""
            className="w-[900px] xl:w-[1100px] opacity-80 mix-blend-lighten brightness-150 scale-110"
          />
        </div>

        {/* DESKTOP CARDS (Posicionamiento absoluto) */}
        <div className="hidden lg:block w-full h-full absolute inset-0 z-20">
          {modules.map((card) => (
            <div
              key={card.id}
              className={`absolute ${card.position} p-[2px] rounded-[2rem] transition-all duration-500 group hover:scale-[1.02] shadow-[0_0_40px_rgba(0,0,0,0.3)]`}
              style={{ background: forgeGradientStr }}
            >
              <div 
                className="h-full w-full p-8 rounded-[1.9rem] flex flex-col text-left bg-[#030b1a]/95 backdrop-blur-2xl"
                style={{ width: card.id === 3 ? '420px' : '400px', minHeight: '340px' }}
              >
                <div className="mb-6">
                  <span className="px-4 py-1.5 border border-white/10 bg-white/5 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                    {card.module}
                  </span>
                </div>

                <StyledTitle title={card.title} />

                <p className="text-gray-200 text-sm leading-relaxed mb-6 opacity-90">
                  {card.description}
                </p>

                <ul className="text-gray-300 space-y-2 border-t border-white/20 pt-6 mt-auto">
                  {card.items.map((item, i) => (
                    <li key={i} className="text-[13px] flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE GRID (Orden Suite -> 1 -> 2 -> 3 -> 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 mt-12 lg:hidden relative z-20 w-full max-w-2xl mx-auto">
          {mobileModules.map((card) => (
            <div 
              key={`mob-${card.id}`} 
              className="p-[2px] rounded-[2rem] w-full" 
              style={{ background: forgeGradientStr }}
            >
              <div className="w-full text-left p-8 rounded-[1.9rem] flex flex-col bg-[#030b1a]/95 backdrop-blur-xl min-h-[300px]">
                <div className="flex justify-between items-center mb-6">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[9px] font-bold uppercase">
                    {card.module}
                  </span>
                </div>
                
                <StyledTitle title={card.title} isMobile={true} />

                <p className="text-gray-200 text-sm leading-relaxed mb-6">{card.description}</p>
                <ul className="space-y-3 border-t border-white/10 pt-6 mt-auto">
                  {card.items.map((item, i) => (
                    <li key={i} className="text-gray-100 text-sm flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
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