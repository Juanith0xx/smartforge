import React from "react"

import projectIcon from "../assets/icons/div.pxl-item--icon-1.svg"
import promiseIcon from "../assets/icons/div.pxl-item--icon.svg"
import budgetIcon from "../assets/icons/div.pxl-item--icon-4.svg"
import obstacleIcon from "../assets/icons/div.pxl-item--icon-3.svg"
import businessIcon from "../assets/icons/div.pxl-item--icon-1.svg"

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
    <section className="py-18 relative overflow-hidden">

      <div className="max-w-[1300px] mx-auto px-6 text-center">

        <p className="text-cyan-400 text-xs tracking-[0.35em] uppercase mb-6">
          [ ANÁLISIS DE MERCADO ]
        </p>

        <h2 className="!text-5xl md:text-6xl font-bold text-white leading-tight">
          Tu equipo no falla.
          <br />
          El sistema sí.
        </h2>

        <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
          Los mismos obstáculos frenan a las mejores organizaciones.
          No es falta de talento: es deuda técnica, ruido y promesas sin respaldo.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-20 items-center">

          <div className="space-y-10">
            <ProblemCard problem={problems[0]} />
            <ProblemCard problem={problems[3]} />
          </div>

          <div className="flex justify-center">
            <ProblemCard problem={problems[2]} center />
          </div>

          <div className="space-y-10">
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
      p-6
      rounded-xl
      text-left
      border border-cyan-400/30
      bg-black/40
      backdrop-blur-sm
      hover:border-cyan-400
      hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
      transition
      ${center ? "max-w-sm mx-auto" : ""}
      `}
    >

      {/* icon */}
      <div className="absolute -top-6 left-6 w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center bg-black">
        <img src={problem.icon} alt="" className="w-12 h-12" />
      </div>

      <h3 className="text-white font-semibold mt-4 mb-2">
        {problem.title}
      </h3>

      <p className="text-gray-300 text-sm leading-relaxed">
        {problem.text}
      </p>

    </div>
  )
}

export default MarketAnalysisSection