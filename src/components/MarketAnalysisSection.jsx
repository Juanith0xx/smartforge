import React from "react";

// Imports de iconos
import projectIcon from "../assets/icons/div.pxl-item--icon-1.svg";
import promiseIcon from "../assets/icons/div.pxl-item--icon.svg";
import budgetIcon from "../assets/icons/div.pxl-item--icon-4.svg";
import obstacleIcon from "../assets/icons/div.pxl-item--icon-3.svg";

const problems = [
  {
    icon: projectIcon,
    title: "Proyectos que no cierran",
    text: "La deuda técnica acumulada convierte cada sprint en una carrera contra el reloj. Los plazos se incumplen, los equipos se desgastan y los costos escalan.",
    iconPosition: "center" 
  },
  {
    icon: promiseIcon,
    title: "Promesas sin trazabilidad",
    text: "El mercado está lleno de soluciones de IA que prometen todo y entregan poco. Sin métricas reales, la confianza se desvanece.",
    iconPosition: "center"
  },
  {
    icon: budgetIcon,
    title: "Presupuesto que se escapa",
    text: "Los desarrollos terminan costando el doble de lo planificado por falta de una arquitectura sólida desde el día uno.",
    iconPosition: "center"
  },
  {
    icon: obstacleIcon,
    title: "Competir con obstáculos",
    text: "Tu competencia evoluciona su producto mientras tú resuelves bugs. La falta de agilidad real te deja fuera del juego.",
    iconPosition: "center"
  },
  {
    icon: projectIcon,
    title: "Negocio esperando soluciones",
    text: "Muchos ofrecen velocidad con IA pero nadie garantiza supervisión real ni integración con tus procesos actuales.",
    iconPosition: "center"
  }
];

const MarketAnalysisSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#020617]">
      <div className="max-w-[1300px] mx-auto px-6 text-center relative z-10">
        
        <p className="text-[#29D9C2] text-[10px] md:text-xs tracking-[0.35em] uppercase mb-6 font-bold opacity-80">
          [ ANÁLISIS DE MERCADO ]
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
          La diferencia no es la IA,
          <br />
          <span>es la orquestación.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-10 mt-32 items-center">
          <div className="space-y-16">
            <ProblemCard problem={problems[0]} />
            <ProblemCard problem={problems[3]} />
          </div>

          <div className="flex justify-center">
            <ProblemCard problem={problems[2]} isCenterColumn />
          </div>

          <div className="space-y-16">
            <ProblemCard problem={problems[1]} />
            <ProblemCard problem={problems[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProblemCard = ({ problem, isCenterColumn }) => {
  const position = problem.iconPosition || "left";

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
      pt-14 pb-8 px-8
      rounded-[32px]
      bg-[#050416]
      transition-all duration-500
      hover:translate-y-[-5px]
      group
      ${textAlignClasses[position]}
      ${isCenterColumn ? "max-w-sm mx-auto min-h-[160px]" : "min-h-[160px]"}
      `}
    >
      {/* 1. BORDE CON GRADIENTE EN ESQUINAS (Superior Izquierda e Inferior Derecha) */}
      <div className="
        absolute inset-0 rounded-[32px] p-[1.2px]
        pointer-events-none z-0
        before:absolute before:inset-0 before:rounded-[32px]
        /* Gradiente diagonal 135deg con transparencia central */
        before:bg-[linear-gradient(135deg,#29D9C2_0%,rgba(98,72,154,0)_45%,rgba(98,72,154,0)_55%,#29D9C2_100%)]
        before:opacity-30 group-hover:before:opacity-60 transition-opacity duration-500
      ">
        <div className="w-full h-full bg-[#050416] rounded-[31px]"></div>
      </div>

      {/* 2. GRADIENTE DE FONDO COMPACTO (Reducido para que no sature) */}
      {/* Luz Superior Izquierda reducida */}
      <div className="
        absolute -top-6 -left-6 
        w-28 h-28 
        bg-[#29D9C2] 
        opacity-[0.12] 
        blur-[45px] 
        pointer-events-none 
        group-hover:opacity-[0.20] 
        transition-opacity duration-500
      " />
      
      {/* Luz Inferior Derecha reducida */}
      <div className="
        absolute -bottom-6 -right-6 
        w-24 h-24 
        bg-[#29D9C2] 
        opacity-[0.08] 
        blur-[40px] 
        pointer-events-none 
        group-hover:opacity-[0.15] 
        transition-opacity duration-500
      " />

      {/* ICONO FLOTANTE */}
      <div className={`absolute z-20 ${iconPosClasses[position]}`}>
        <div className="
          flex items-center justify-center 
          w-14 h-14 rounded-full 
          p-[2px]
          bg-[linear-gradient(135deg,#62489A_0%,#29D9C2_100%)]
          shadow-[0_10px_20px_rgba(0,0,0,0.5)]
          transition-transform duration-500 group-hover:scale-110
        ">
          <div className="flex items-center justify-center w-full h-full bg-[#050416] rounded-full">
            <img src={problem.icon} alt="" className="w-6 h-6 object-contain" />
          </div>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10">
        <h3 className="text-white font-bold text-lg md:text-xl mb-3 leading-tight tracking-tight text-left">
          {problem.title}
        </h3>
        <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed font-normal group-hover:text-gray-300 transition-colors text-left ">
          {problem.text}
        </p>
      </div>
    </div>
  );
};

export default MarketAnalysisSection;