import { useEffect, useState } from "react"
import { FiArrowUp } from "react-icons/fi"

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Mostrar botón después de 500px de scroll
      setVisible(scrollTop > 500)

      // Si estamos cerca del final (menos de 100px para llegar), cambiamos a modo "subir"
      // Si no, el botón indicará "bajar"
      setAtBottom(scrollTop + windowHeight >= documentHeight - 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleAction = () => {
    if (atBottom) {
      // Si está en el fondo, sube al inicio
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    } else {
      // Si no está en el fondo, baja hasta el final
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      })
    }
  }

  return (
    <button
      onClick={handleAction}
      aria-label={atBottom ? "Scroll to top" : "Scroll to bottom"}
      className={`
        fixed
        bottom-5 md:bottom-8
        right-4 md:right-8
        z-50
        p-2 md:p-3
        rounded-full
        bg-[linear-gradient(180deg,#004AAD_0%,#0097B2_31%,#29D9C2_100%)]
        text-white
        shadow-[0_0_25px_rgba(34,211,238,0.45)]
        transition-all duration-500 ease-out
        hover:scale-110 active:scale-95
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"}
      `}
    >
      <FiArrowUp
        size={20}
        className={`
          md:w-[22px] md:h-[22px]
          transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          ${atBottom ? "rotate-0" : "rotate-180"}
        `}
      />
    </button>
  )
}

export default ScrollToTopButton