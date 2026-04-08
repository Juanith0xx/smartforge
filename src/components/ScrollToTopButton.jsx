import { useEffect, useState } from "react"
import { FiArrowUp } from "react-icons/fi"

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // El botón solo es visible si estamos a menos de 20px del final real
      // Ajustamos el margen a 20px para asegurar que aparezca en todos los navegadores
      const isAtBottom = scrollTop + windowHeight >= documentHeight - 20
      
      setVisible(isAtBottom)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      className={`
        fixed
        bottom-6 md:bottom-10
        right-6 md:right-10
        z-50
        p-3 md:p-4
        rounded-full
        bg-gradient-to-r from-cyan-500 to-teal-400
        text-white
        shadow-[0_0_30px_rgba(34,211,238,0.6)]
        transition-all duration-500 ease-in-out
        hover:scale-110 active:scale-95
        
        /* Efecto de entrada/salida */
        ${visible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-20 scale-50 pointer-events-none"}
      `}
    >
      <FiArrowUp
        size={24}
        className="md:w-[26px] md:h-[26px]"
      />
    </button>
  )
}

export default ScrollToTopButton