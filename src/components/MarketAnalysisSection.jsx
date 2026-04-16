import React from "react";

// Imports de iconos
import projectIcon from "../assets/icons/div.pxl-item--icon-1.svg";
import promiseIcon from "../assets/icons/div.pxl-item--icon.svg";
import budgetIcon from "../assets/icons/div.pxl-item--icon-4.svg";
import obstacleIcon from "../assets/icons/div.pxl-item--icon-3.svg";

const problems = [
  {
    icon: projectIcon,
    title: "Eficiencia de Costos",
    text: "Ahorro del 40% en el ciclo de vida del desarrollo de software.",
    iconPosition: "center" 
  },
 {
  icon: promiseIcon,
  title: <>Aceleración en el <br /> Time to Market</>, 
  text: "Implementaciones 60% más rápidas al sincronizar necesidades del negocio con capacidades técnicas.",
  iconPosition: "center" 
},
  {
    icon: budgetIcon,
    title: "Enfoque eficiente",
    text: "SmartForge automatiza tareas repetitivas, permitiendo a tu equipo enfocarse en la innovación y la expertise.",
    iconPosition: "center"
  },
  {
    icon: obstacleIcon,
    title: "Escalabilidad y Seguridad",
    text: "Con despliegues automatizados y QA integrado, en un entorno seguro y normado.",
    iconPosition: "center"
  }
];

const MarketAnalysisSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#020617]">
      <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10">
        
        <p className="text-[#29D9C2] text-[10px] md:text-xs tracking-[0.40em] uppercase mb-6 font-extrabold opacity-80">
          [ Beneficios ]
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-24">
          La diferencia no es la IA,
          <br />
          <span className="text-transparent bg-clip-text text-white">
            es la orquestación.
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {problems.map((prob, index) => (
            <ProblemCard key={index} problem={prob} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProblemCard = ({ problem }) => {
  const position = problem.iconPosition || "center";

  const iconPosClasses = {
    left: "left-8 -top-7",
    center: "left-1/2 -translate-x-1/2 -top-7",
    right: "right-8 -top-7"
  };

  const textAlignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <div
      className={`
      relative
      pt-16 pb-10 px-8
      rounded-[32px]
      bg-[#050416]/80
      backdrop-blur-sm
      flex flex-col
      h-full
      ${textAlignClasses[position]}
      `}
    >
      {/* 1. BORDE CON GRADIENTE (Efecto hover eliminado) */}
      <div className="
        absolute inset-0 rounded-[32px] p-[1.2px]
        pointer-events-none z-0
        before:absolute before:inset-0 before:rounded-[32px]
        before:bg-[linear-gradient(135deg,#29D9C2_0%,rgba(98,72,154,0)_45%,rgba(98,72,154,0)_55%,#29D9C2_100%)]
        before:opacity-40
      ">
        <div className="w-full h-full bg-[#050416] rounded-[31px]"></div>
      </div>

      {/* 2. GRADIENTES DE FONDO (Efecto hover eliminado) */}
      <div className="absolute -top-6 -left-6 w-28 h-28 bg-[#29D9C2] opacity-[0.1] blur-[45px] pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#62489A] opacity-[0.05] blur-[40px] pointer-events-none" />

      {/* ICONO FLOTANTE (Efecto hover eliminado) */}
      <div className={`absolute z-20 ${iconPosClasses[position]}`}>
        <div className="
          flex items-center justify-center 
          w-14 h-14 rounded-full 
          p-[2px]
          bg-[linear-gradient(135deg,#62489A_0%,#29D9C2_100%)]
          shadow-[0_10px_30px_rgba(41,217,194,0.3)]
        ">
          <div className="flex items-center justify-center w-full h-full bg-[#050416] rounded-full">
            <img src={problem.icon} alt="" className="w-6 h-6 object-contain" />
          </div>
        </div>
      </div>

      {/* CONTENIDO ALINEADO */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="min-h-[80px] flex items-center justify-center mb-4">
          <h3 className="text-white font-bold text-xl leading-tight tracking-tight">
            {problem.title}
          </h3>
        </div>

        <div className="min-h-[90px] flex items-start justify-center">
          <p className="text-gray-400 text-sm md:text-[14px] leading-relaxed font-normal">
            {problem.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysisSection;