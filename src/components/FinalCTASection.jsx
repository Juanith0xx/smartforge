import React from "react"

import waveLeft from "../assets/images/wave-left.svg"
import waveRight from "../assets/images/wave-right.svg"

const benefits = [
  "Supervisión humana experta",
  "Soporte enterprise 24/7"
]

const FinalCTASection = () => {
  return (
    <section className="py-36 relative overflow-hidden text-center">

      {/* ondas izquierda */}
      <img
        src={waveLeft}
        alt=""
        className="absolute left-0 top-1/2 -translate-y-1/2 opacity-50 pointer-events-none"
      />

      {/* ondas derecha */}
      <img
        src={waveRight}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-50 pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* titulo */}
        <h2 className="!text-5xl md:text-6xl font-bold text-white leading-tight">
          El futuro de tu desarrollo
          <br />
          <span className="text-cyan-400">
            empieza hoy.
          </span>
        </h2>

        {/* descripcion */}
        <p className="mt-6 text-gray-300 text-lg">
          Agenda una demo y descubre cómo SmartForge transforma la manera
          en que tu organización desarrolla software.
        </p>

        {/* botón */}
        <div className="mt-10 flex justify-center">
          <a
            href="#formulario"
            className="
            flex items-center gap-6
            px-10 py-2
            rounded-full
            text-white font-semibold
            bg-gradient-to-r from-cyan-500 to-teal-400
            shadow-[0_0_25px_rgba(34,211,238,0.45)]
            hover:scale-105
            transition-all duration-300
            "
          >
            SOLICITA TU DEMO

            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white">
              ↓
            </span>
          </a>
        </div>

        {/* beneficios */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-20 text-sm font-medium text-cyan-400">

          {benefits.map((text, index) => (
            <React.Fragment key={index}>
              <span>{text}</span>

              {index < benefits.length - 1 && (
                <span className="opacity-60">+</span>
              )}
            </React.Fragment>
          ))}

        </div>

      </div>

    </section>
  )
}

export default FinalCTASection