import React from "react"
import modulesImage from "../assets/images/modulo.png"

const modules = [
  {
    id: 1,
    title: "Arquitectura",
    module: "MÓDULO 2",
    position: "lg:left-[2%] lg:bottom-[-5%]",
    description: "Diagrama el roadmap técnico preciso para tu desarrollo. Define los componentes, flujos de datos, integraciones y estándares de seguridad antes de escribir la primera línea de código.",
    items: [
      "Diseño de componentes y microservicios",
      "Modelado de datos y APIs",
      "Estándares y seguridad desde el inicio",
      "Documentación técnica automatizada"
    ]
  },
  {
    id: 2,
    title: "Planificación",
    module: "MÓDULO 1",
    position: "lg:left-[3%] lg:-top-[20%]",
    description: "Convierte objetivos de negocio en un plan ejecutable. Define alcance, genera historias de usuario, estimaciones y backlog listos para el equipo de desarrollo. Sin retrabajo.",
    items: [
      "Definición de objetivo y alcance",
      "Generación automática de historias de usuario",
      "Estimaciones y roadmap de entrega",
      "Alineación negocio-tecnología"
    ]
  },
  {
    id: 3,
    title: "4 módulos",
    module: "SUITE COMPLETA",
    position: "lg:left-1/2 lg:top-[15%] lg:-translate-x-1/2",
    description: "El flujo completo end to end. La solución completa e integrada. Todos los módulos conectados en un solo flujo continuo: desde la arquitectura inicial hasta el despliegue final.",
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
    position: "lg:right-[3%] lg:-top-[20%]",
    description: "Acelera la implementación con IA que entiende el contexto de tu negocio. Refactoriza, implementa y prueba con consistencia en todo el equipo, reduciendo fricciones y errores.",
    items: [
      "Generación y asistencia de código con IA",
      "Refactorización y deuda técnica controlada",
      "Consistencia de estilo en todo el equipo",
      "Pruebas unitarias automatizadas"
    ]
  },
  {
    id: 5,
    title: "QA",
    module: "MÓDULO 4",
    position: "lg:right-[2%] lg:bottom-[-5%]",
    description: "Automatiza la validación, los pipelines de CI/CD y los despliegues. Trazabilidad completa desde el código hasta producción. Entrega con confianza, no con cruces de dedos.",
    items: [
      "Automatización de pruebas end-to-end",
      "Pipelines de CI/CD configurados",
      "Despliegues con rollback automático",
      "Trazabilidad completa hasta producción"
    ]
  }
]

const StyledTitle = ({ id, title, isMobile = false }) => {
  const forgeGradient = {
    background: `linear-gradient(to right, #F99B06 0%, #7F2191 35%, #004AAD 65%, #29D9C2 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <div className="mb-1">
      <h3 className={`text-white font-bold ${isMobile ? 'text-2xl' : 'text-3xl'} leading-tight tracking-tight`}>
        Smart<span style={forgeGradient}>Forge</span>
      </h3>
      <p className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-white mt-0.5 leading-tight`}>
        {title}
      </p>
    </div>
  );
};

const ModulesSection = () => {
  // Gradiente de borde exacto de Figma
  const borderGradient = "linear-gradient(135deg, #8C52FF 10%, #006DAF 36%, #0097B2 68%, #29D9C2 100%)";

  const mobileModules = [
    ...modules.filter(m => m.id === 3),
    ...modules.filter(m => m.id !== 3).sort((a, b) => a.id - b.id)
  ];

  const CardContent = ({ card, isMobile }) => {
    return (
      <div 
        className="h-full w-full p-8 xl:p-10 rounded-[1.9rem] flex flex-col text-left relative overflow-hidden"
        style={{ 
          background: `linear-gradient(225deg, #0052D4 0%, #001A3D 45%, #050416 100%)`,
        }}
      >
        <div className="flex justify-between items-start mb-8 z-10">
          <div className="inline-block px-5 py-2 border border-blue-400/30 bg-blue-950/20">
            <span className="text-white text-[11px] font-bold tracking-[0.2em] uppercase">
              {card.module}
            </span>
          </div>
        </div>

        <StyledTitle id={card.id} title={card.title} isMobile={isMobile} />
        
        <hr className="border-t border-white/20 w-full my-6 z-10 opacity-50" />

        <p className="text-gray-200 text-[15px] leading-relaxed mb-6 font-medium z-10">
          {card.description}
        </p>

        <ul className="space-y-3 z-10 mb-4">
          {card.items.map((item, i) => (
            <li key={i} className="text-[14px] text-gray-300 flex items-start gap-3">
              <span className="text-cyan-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section id="que-es" className="relative text-center overflow-hidden py-24 bg-[#030b1a]">
      <div className="max-w-5xl mx-auto px-6 relative z-30 mb-12">
        <p className="text-cyan-400 text-xs tracking-[0.35em] uppercase mb-4">[ QUÉ ES SMARTFORGE ]</p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
          Cinco módulos.<br />Un solo flujo.
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6">
          Desde el diseño arquitectónico hasta el despliegue en producción, SmartForge cubre cada etapa del ciclo de desarrollo con IA y supervisión experta.
        </p>
        <div className="flex justify-center mt-10 relative z-40">
          <a href="#formulario" className="flex items-center gap-4 px-10 py-4 rounded-full text-white font-bold bg-gradient-to-r from-cyan-500 to-teal-400 shadow-[0_0_35px_rgba(34,211,238,0.4)] hover:scale-105 transition-all">
            SOLICITA TU DEMO ↓
          </a>
        </div>
      </div>

      <div className="relative flex flex-col items-center lg:-mt-12 min-h-[900px] justify-center">
        
        {/* 🚩 CONTENEDOR DE IMAGEN AJUSTADO */}
        <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none z-10">
          <img 
            src={modulesImage} 
            alt="" 
            className="
              /* 🚩 1. Visibilidad: Menos oscura (aumentada opacidad de 30% a 60%) */
               
              mix-blend-lighten 
              
              /* 🚩 2. Dimensiones: Más ancha y alta (w-full h-full + object-cover) */
              w-full 
              h-full 
              object-cover 
              xl:object-contain /* Opcional: mantiene proporción en pantallas muy anchas */
              
              /* 🚩 3. Escala: Aumentada ligeramente para que sobresalga más */
              scale-125
            " 
          />
        </div>

        {/* DESKTOP CARDS */}
        <div className="hidden lg:block w-full h-full absolute inset-0 z-20">
          {modules.map((card) => (
            <div
              key={card.id}
              className={`absolute ${card.position} p-[3px] rounded-[2rem] shadow-2xl transition-all duration-500 hover:scale-[1.02]`}
              style={{ 
                background: borderGradient,
                width: card.id === 3 ? '480px' : '440px', 
                minHeight: '380px'
              }}
            >
              <CardContent card={card} isMobile={false} />
            </div>
          ))}
        </div>

        {/* MOBILE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 mt-12 lg:hidden relative z-20 w-full max-w-5xl">
          {mobileModules.map((card) => (
            <div key={`mob-${card.id}`} className="p-[3px] rounded-[2rem] w-full" style={{ background: borderGradient }}>
              <CardContent card={card} isMobile={true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ModulesSection;