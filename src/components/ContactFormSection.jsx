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
  const [error, setError] = useState(null)

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
    setError(null)
    setSuccess(false)

    try {
      console.log("Enviando datos:", formData)

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
      console.log("Respuesta API:", result)

      // MEJORA: Liberamos el estado de carga inmediatamente al recibir respuesta positiva
      if (response.ok && result.success) {
        setSuccess(true)
        setLoading(false) // El usuario ve el éxito de inmediato

        setFormData({
          nombre: "",
          empresa: "",
          cargo: "",
          email: ""
        })
      } else {
        setLoading(false)
        setError(result.message || "No se pudo guardar el contacto")
      }
    } catch (err) {
      console.error("Error:", err)
      setLoading(false)
      setError("Error conectando con el servidor")
    }
  }

  return (
    <section
      id="formulario"
      className="py-16 md:py-24 relative bg-cover bg-center"
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
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input
              ref={nameInputRef}
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              type="text"
              placeholder="Nombre"
              required
              className="w-full px-5 py-3 md:py-4 rounded-full bg-transparent border border-cyan-400 text-white outline-none"
            />

            <input
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              type="text"
              placeholder="Empresa"
              required
              className="w-full px-5 py-3 md:py-4 rounded-full bg-transparent border border-gray-500 text-white outline-none"
            />

            <input
              name="cargo"
              value={formData.cargo}
              onChange={handleChange}
              type="text"
              placeholder="Cargo"
              required
              className="w-full px-5 py-3 md:py-4 rounded-full bg-transparent border border-gray-500 text-white outline-none"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email corporativo"
              required
              className="w-full px-5 py-3 md:py-4 rounded-full bg-transparent border border-gray-500 text-white outline-none"
            />

            <button
              disabled={loading}
              className="w-full mt-6 py-3 md:py-4 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-500 to-teal-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "LA QUIERO"}
            </button>

            {success && (
              <p className="text-green-400 text-sm mt-3 animate-pulse">
                ✔ Gracias, te contactaremos pronto.
              </p>
            )}

            {error && (
              <p className="text-red-400 text-sm mt-3">
                {error}
              </p>
            )}
          </form>

          <div className="flex flex-col items-center mt-6 md:mt-0">
            <img
              src={logo}
              className="w-40 md:w-56 mb-4"
              alt="SmartForge Logo"
            />
            <p className="text-gray-300 text-sm tracking-wide">
              Accelerate your performance
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-24 border-t border-white/10 pt-6 px-6">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-300">
          <div className="flex items-center gap-3">
            <img src={logoHorizontal} className="w-40 md:w-60" alt="SmartForge" />
          </div>

          <div>
            Un producto de <span className="text-cyan-400">SmartJob</span> · Chile
          </div>

          <div className="flex items-center gap-6">
            <a href="https://smartjob.cl" className="hover:text-cyan-400 transition-colors">
              Smartjob.cl
            </a>
            <a href="#formulario" className="hover:text-cyan-400 transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection