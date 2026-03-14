import React, { useEffect, useRef } from "react"

import bgGrid from "../assets/images/fondo_ formulario.png"
import topIcon from "../assets/icons/Component_5.svg"
import logo from "../assets/images/smartforge-logo-vertical.png"
import logoHorizontal from "../assets/images/smartforge-logo.png"

const ContactFormSection = () => {

  const nameInputRef = useRef(null)

  // foco automático cuando se llega al formulario
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#formulario") {
        setTimeout(() => {
          nameInputRef.current?.focus()
        }, 500)
      }
    }

    handleHash()
    window.addEventListener("hashchange", handleHash)

    return () => window.removeEventListener("hashchange", handleHash)
  }, [])

  return (
    <section
      id="formulario"
      className="py-16 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgGrid})` }}
    >

      <div className="max-w-[1100px] mx-auto px-6 text-center">

        {/* ICONO SUPERIOR */}
        <div className="flex justify-center mb-6">
          <img src={topIcon} className="w-20 h-20" alt="" />
        </div>

        {/* TITULO */}
        <h2 className="!text-5xl md:text-5xl font-bold text-white">
          Solicita tu demo hoy
        </h2>

        <p className="text-gray-300 mt-3">
          Completa el formulario y te contactaremos para acelerar tu negocio
        </p>

        {/* CONTENEDOR */}
        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">

          {/* FORMULARIO */}
          <form className="space-y-4 text-left">

            <input
              ref={nameInputRef}
              type="text"
              placeholder="Nombre"
              className="w-full px-5 py-3 rounded-full bg-transparent border border-cyan-400 text-white outline-none transition focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.45)]"
            />

            <input
              type="text"
              placeholder="Empresa"
              className="w-full px-5 py-3 rounded-full bg-transparent border border-gray-500 text-white outline-none transition focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.45)]"
            />

            <input
              type="text"
              placeholder="Cargo"
              className="w-full px-5 py-3 rounded-full bg-transparent border border-gray-500 text-white outline-none transition focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.45)]"
            />

            <input
              type="email"
              placeholder="Email corporativo"
              className="w-full px-5 py-3 rounded-full bg-transparent border border-gray-500 text-white outline-none transition focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.45)]"
            />

            <button
              className="w-full mt-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-500 to-teal-400 shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(34,211,238,0.65)] transition-all duration-300"
            >
              LA QUIERO
            </button>

          </form>

          {/* LOGO LADO DERECHO */}
          <div className="flex flex-col items-center">

            <img
              src={logo}
              className="w-56 mb-4"
              alt=""
            />

            <p className="text-gray-300 text-sm tracking-wide">
              Accelerate your performance
            </p>

          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-24 border-t border-white/10 pt-6 px-6">

        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-300">

          {/* logo izquierda */}
          <div className="flex items-center gap-3">
            <img src={logoHorizontal} className="w-60" alt="SmartForge" />
          </div>

          {/* centro */}
          <div>
            Un producto de <span className="text-cyan-400">SmartJob</span> · Chile
          </div>

          {/* links derecha */}
          <div className="flex items-center gap-6">

            <a
              href="https://smartjob.cl"
              className="hover:text-cyan-400 transition"
            >
              Smartjob.cl
            </a>

            <a
              href="#formulario"
              className="hover:text-cyan-400 transition"
            >
              Contacto
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ContactFormSection