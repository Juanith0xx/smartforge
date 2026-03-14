import React from "react"
import heroImage from "../assets/images/Numeros.png"
import heroLeft from "../assets/images/Cerebro.png"

const Hero = () => {
  return (
    <section className="sf-hero py-10 overflow-hidden" id="inicio">

      {/* TEXTO SUPERIOR */}
      <p className="text-center text-xs tracking-[0.35em] uppercase text-gray-300 mb-10">
        FÁBRICA DE SOFTWARE CON IA · SUPERVISIÓN EXPERTA
      </p>

      {/* GRID PRINCIPAL */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1fr] items-center gap-10">

        {/* IMAGEN IZQUIERDA */}
        <div className="flex justify-center md:justify-start">
          <img
            src={heroLeft}
            alt="IA"
            className="w-[420px] max-w-none"
          />
        </div>

        {/* CONTENIDO CENTRAL */}
        <div className="text-center px-6">

          <h1 className="!text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
            <span className="text-white block">Más rápido.</span>
            <span className="text-cyan-400 block">Más eficiente.</span>
            <span className="text-white block">Sin más presupuesto.</span>
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-xl mx-auto">
            SmartForge combina inteligencia artificial de última generación con
            supervisión humana acelerando el flujo completo un{" "}
            <span className="text-cyan-400">
              60% más rápido y 40% de ahorro en costos
            </span>.
          </p>

          {/* BOTONES */}
          <div className="mt-12 flex flex-col items-center gap-6">

            {/* BOTÓN PRINCIPAL */}
            <a
              href="#formulario"
              className="
              flex items-center gap-6
              px-10 py-2
              rounded-full
              text-white font-semibold text-lg
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

            {/* BOTÓN SECUNDARIO */}
            <a
              href="#que-es"
              className="
              px-10 py-3
              rounded-full
              border border-cyan-400
              text-cyan-300
              hover:bg-cyan-400 hover:text-black
              transition-all duration-300
              "
            >
              VER MÓDULOS
            </a>

          </div>

        </div>

        {/* IMAGEN DERECHA */}
        <div className="hidden md:flex justify-end">
          <img
            src={heroImage}
            alt="SmartForge"
            className="w-[420px] max-w-none"
          />
        </div>

      </div>

      {/* BARRA DE MÉTRICAS */}
      <div className="max-w-[1200px] mx-auto mt-20 px-6">

        <div className="
          grid grid-cols-2 md:grid-cols-4
          text-center
          rounded-2xl
          px-8 py-10
          text-white
          bg-gradient-to-r from-cyan-500 to-teal-400
          shadow-[0_10px_40px_rgba(0,255,255,0.25)]
        ">

          {/* ITEM */}
          <div className="space-y-2 border-r border-white/30">
            <p className="text-5xl font-bold">60%</p>
            <p className="text-sm tracking-wider">DE ACELERACIÓN</p>
          </div>

          {/* ITEM */}
          <div className="space-y-2 border-r border-white/30">
            <p className="text-5xl font-bold">40%</p>
            <p className="text-sm tracking-wider">DE AHORRO EN COSTOS</p>
          </div>

          {/* ITEM */}
          <div className="space-y-2 border-r border-white/30">
            <p className="text-5xl font-bold">5</p>
            <p className="text-sm tracking-wider">MÓDULOS INTEGRADOS</p>
          </div>

          {/* ITEM */}
          <div className="space-y-2 pl-4">
            <p className="text-5xl font-bold">0x</p>
            <p className="text-sm tracking-wider">PRESUPUESTO ADICIONAL</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero