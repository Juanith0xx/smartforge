import React from "react"
import modulesImage from "../assets/images/fondo_sec.png"

const ModulesSection = () => {
  return (
    <section id="que-es" className="text-center relative overflow-hidden">

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* etiqueta */}
        <p className="text-cyan-400 !text-xs tracking-[0.35em] uppercase mb-4 pt-2">
          [ QUÉ ES SMARTFORGE ]
        </p>

        {/* titulo */}
        <h2 className="!text-4xl md:text-6xl font-bold text-white leading-tight">
          Cinco módulos.
          <br />
          Un solo flujo.
        </h2>

        {/* descripcion */}
        <p className=" text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Desde el diseño arquitectónico hasta el despliegue en producción,
          SmartForge cubre cada etapa del ciclo de desarrollo con IA y
          supervisión experta.
        </p>

        {/* botón */}
        <div className="mt-10 flex justify-center">
          <a
            href="#formulario"
            className="flex items-center gap-6 px-10 py-2 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-cyan-500 to-teal-400 shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:scale-105 transition-all duration-300"
          >
            SOLICITA TU DEMO

            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white">
              ↓
            </span>
          </a>
        </div>

      </div>

      {/* IMAGEN */}
      <div className="relative -mt-[240px] flex justify-center">

        <img
          src={modulesImage}
          alt="SmartForge módulos"
          className="
            w-[1500px]
            h-[600px] md:h-[750px] lg:h-[850px]
            max-w-none
            object-cover
            scale-110
            ]
          "
        />

      </div>

    </section>
  )
}

export default ModulesSection