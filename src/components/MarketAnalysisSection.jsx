import React from "react"

import projectIcon from "../assets/icons/div.pxl-item--icon-1.svg"
import promiseIcon from "../assets/icons/div.pxl-item--icon.svg"
import budgetIcon from "../assets/icons/div.pxl-item--icon-4.svg"
import obstacleIcon from "../assets/icons/div.pxl-item--icon-3.svg"

const problems = [
  {
    icon: projectIcon,
    title: "Proyectos que no cierran",
    text: "La deuda técnica acumulada convierte cada sprint en una carrera contra el reloj. Los plazos se incumplen y los costos escalan."
  },
  {
    icon: budgetIcon,
    title: "Promesas sin trazabilidad",
    text: "El mercado está lleno de soluciones de IA que prometen todo y entregan poco."
  },
  {
    icon: projectIcon,
    title: "Presupuesto que se escapa",
    text: "Los desarrollos terminan costando el doble de lo planificado."
  },
  {
    icon: promiseIcon,
    title: "Competir con obstáculos",
    text: "Tu competencia evoluciona su producto mientras tú resuelves bugs."
  },
  {
    icon: obstacleIcon,
    title: "Negocio esperando soluciones",
    text: "Muchos ofrecen velocidad con IA pero nadie garantiza supervisión real."
  }
]

const MarketAnalysisSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#020617]">
      <div className="max-w-[1300px] mx-auto px-6 text-center relative z-10">

        <p className="text-cyan-400 text-[10px] md:text-xs tracking-[0.35em] uppercase mb-6 font-bold">
          [ ANÁLISIS DE MERCADO ]
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
          Tu equipo no falla.
          <br />
          El sistema sí.
        </h2>

        <p className="mt-6 text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Los mismos obstáculos frenan a las mejores organizaciones.
          No es falta de talento: es deuda técnica, ruido y promesas sin respaldo.
        </p>

        {/* GRID DE PROBLEMAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 items-center">
          <div className="space-y-8">
            <ProblemCard problem={problems[0]} />
            <ProblemCard problem={problems[3]} />
          </div>

          <div className="flex justify-center">
            <ProblemCard problem={problems[2]} center />
          </div>

          <div className="space-y-8">
            <ProblemCard problem={problems[1]} />
            <ProblemCard problem={problems[4]} />
          </div>
        </div>
      </div>
    </section>
  )
}

const ProblemCard = ({ problem, center }) => {
  return (
    <div
      className={`
      relative
      p-8 md:p-8
      rounded-[32px]
      text-left
      bg-[#050416]
      overflow-hidden
      border border-white/5
      transition-all duration-500
      hover:translate-y-[-5px]
      hover:border-white/10 /* Sutil cambio de borde en hover */
      group
      ${center ? "max-w-sm mx-auto min-h-[320px]" : "min-h-[260px]"}
      `}
    >
      {/* --- GRADIENTES PERMANENTES (ACTUALIZADOS A VERDE MENTA) --- */}
      
      {/* Luz superior derecha fija (Ahora es un Verde Menta más saturado) */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#3FFFB2] opacity-[0.25] blur-[65px] pointer-events-none group-hover:opacity-[0.35] transition-opacity duration-500" />
      
      {/* Luz inferior izquierda fija (Un verde más profundo pero complementario al menta) */}
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#00A36C] opacity-[0.20] blur-[65px] pointer-events-none group-hover:opacity-[0.30] transition-opacity duration-500" />

      {/* ICONO - Manteniendo el círculo con el gradiente lineal original */}
      <div className="relative mb-6">
        <div className="
          flex items-center justify-center 
          w-14 h-14 rounded-full 
          p-[2px]
          bg-[linear-gradient(180deg,#004AAD_0%,#0097B2_31%,#29D9C2_100%)]
          shadow-[0_0_15px_rgba(34,211,238,0.2)]
        ">
          <div className="flex items-center justify-center w-full h-full bg-[#050416] rounded-full">
            <img src={problem.icon} alt="" className="w-6 h-6 object-contain" />
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-white font-bold text-xl mb-3 leading-tight">
          {problem.title}
        </h3>

        <p className="text-gray-400 text-[15px] leading-relaxed font-normal group-hover:text-gray-300 transition-colors">
          {problem.text}
        </p>
      </div>
    </div>
  )
}

export default MarketAnalysisSection;