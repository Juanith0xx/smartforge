import React from "react"

import ceoImg from "../assets/images/img1.png"
import cioImg from "../assets/images/img2.png"
import itImg from "../assets/images/img3.png"

import ceoIcon from "../assets/icons/Component_4.svg"
import cioIcon from "../assets/icons/Component_3.svg"
import itIcon from "../assets/icons/Component_3-1.svg"

const cards = [
  {
    icon: ceoIcon,
    label: "PARA EL CEO",
    title: "Menos riesgo. Más resultado.",
    text: "Reduce la exposición a proyectos que no cierran, controla los costos reales de desarrollo y lleva tu visión a producción sin sorpresas presupuestarias.",
    image: ceoImg
  },
  {
    icon: cioIcon,
    label: "PARA EL CIO / CTO",
    title: "Infraestructura sólida. Equipos potenciados.",
    text: "Mantén estándares técnicos sin frenar la velocidad. SmartForge se integra a tu stack, respeta tus procesos y amplifica la capacidad de tu equipo actual.",
    image: cioImg
  },
  {
    icon: itIcon,
    label: "PARA LA DIRECCIÓN DE TI",
    title: "Control total del ciclo de desarrollo.",
    text: "Visibilidad completa desde el requerimiento hasta el despliegue. Métricas reales, trazabilidad de decisiones y entrega continua con supervisión experta.",
    image: itImg
  }
]

const AudienceSection = () => {
  return (
    <section className="py-12 relative overflow-hidden">

      <div className="max-w-[1300px] mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-20">

          <div>

            <p className="text-cyan-400 text-xs tracking-[0.35em] uppercase mb-6">
              [ PARA QUIÉN ES ]
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-xl">
              Diseñado para quienes
              <br />
              toman decisiones.
            </h2>

            <p className="mt-6 text-gray-300 text-lg max-w-xl">
              SmartForge habla el idioma del negocio y de la tecnología.
              Porque las mejores decisiones las toman quienes entienden ambos.
            </p>

          </div>

          {/* BOTÓN */}
          <div className="flex justify-start lg:justify-end">

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

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((card, index) => (

            <div
              key={index}
              className="
              p-8
              rounded-xl
              border border-white/10
              backdrop-blur-sm
              bg-black/40
              transition-all duration-300
              hover:border-cyan-400
              hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
              hover:-translate-y-2
              "
            >

              {/* icono */}
              <div className="flex items-center gap-3 text-cyan-400 mb-6">
                <img src={card.icon} className="w-5 h-5" alt="" />
                <span className="text-xs tracking-widest uppercase">
                  {card.label}
                </span>
              </div>

              {/* titulo */}
              <h3 className="text-white font-semibold text-lg mb-4">
                {card.title}
              </h3>

              {/* texto */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {card.text}
              </p>

              {/* imagen */}
              <img
                src={card.image}
                className="rounded-lg w-full"
                alt=""
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default AudienceSection