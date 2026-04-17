import React, { useEffect, useRef, useState } from "react"

import bgGrid from "../assets/images/fondo_ formulario.png"
import topIcon from "../assets/icons/Component_5.svg"
import logo from "../assets/images/smartforge-logo-vertical.png"
import logoHorizontal from "../assets/images/smartforge-logo.png"

const ContactFormSection = () => {

  const nameInputRef = useRef(null)

  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
    email: ""
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#formulario") {
        setTimeout(() => {
          nameInputRef.current?.focus()
        }, 800)
      }
    }

    handleHash()
    window.addEventListener("hashchange", handleHash)

    return () => window.removeEventListener("hashchange", handleHash)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    try {

      const response = await fetch(
        "https://smartjob.cl/wp-json/smartforge/v1/lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      )

      const result = await response.json()

      if (result.success) {

        setSuccess(true)

        setFormData({
          nombre: "",
          empresa: "",
          cargo: "",
          email: ""
        })

      }

    } catch (error) {
      console.error("Error enviando formulario:", error)
    }

    setLoading(false)

  }

  return (
    <section
      id="formulario"
      className="py-2 md:py-14 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgGrid})` }}
    >

      <div className="max-w-[1100px] mx-auto px-6 text-center">

        <div className="flex justify-center mb-6">
          <img src={topIcon} className="w-16 h-16 md:w-20 md:h-20" alt="" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Solicita tu demo hoy
        </h2>

        <p className="text-gray-300 mt-3 text-sm md:text-base">
          Completa el formulario y te contactaremos para acelerar tu negocio
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14 md:mt-16 items-center">

          {/* FORMULARIO */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">

            <input
              ref={nameInputRef}
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              type="text"
              placeholder="Nombre"
              required
              className="w-full px-5 py-3 md:py-4 rounded-full bg-transparent border border-cyan-400 text-white outline-none transition focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.45)]"
            />

            <input
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              type="text"
              placeholder="Empresa"
              required
              className="w-full px-5 py-3 md:py-4 rounded-full bg-transparent border border-gray-500 text-white outline-none transition focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.45)]"
            />

            <input
              name="cargo"
              value={formData.cargo}
              onChange={handleChange}
              type="text"
              placeholder="Cargo"
              required
              className="w-full px-5 py-3 md:py-4 rounded-full bg-transparent border border-gray-500 text-white outline-none transition focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.45)]"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email corporativo"
              required
              className="w-full px-5 py-3 md:py-4 rounded-full bg-transparent border border-gray-500 text-white outline-none transition focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.45)]"
            />

            <button
              disabled={loading}
              className="
              w-full mt-6 py-3 md:py-4
              rounded-full
              text-white font-semibold
              text-sm md:text-base
              bg-gradient-to-r from-cyan-500 to-teal-400
              shadow-[0_0_25px_rgba(34,211,238,0.45)]
              hover:scale-[1.03]
              hover:shadow-[0_0_35px_rgba(34,211,238,0.65)]
              transition-all duration-300
              "
            >
              {loading ? "Enviando..." : "LA QUIERO"}
            </button>

            {success && (
              <p className="text-green-400 text-sm mt-3">
                ✔ Gracias, te contactaremos pronto.
              </p>
            )}

          </form>

          {/* LOGO */}
          <div className="flex flex-col items-center mt-6 md:mt-0">

            <img
              src={logo}
              className="w-40 md:!w-76 mb-4"
              alt=""
            />

            <p className="text-gray-300 text-sm tracking-wide">
              Accelerate your performance
            </p>

          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-20 md:mt-24 border-t border-white/10 pt-6 px-6">

        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-300 text-center md:text-left">

          
          <div>
            Un producto de <span className="text-cyan-400">SmartJob</span> · Chile
          </div>

          <div className="flex items-center gap-6">

            <a
              href="https://smartjob.cl"
              className="hover:text-cyan-400 transition"
            >
              Smartjob.cl
            </a>

            <a
              href="#formulario"
              className="hover:text-cyan-400 transition  ml-45"
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