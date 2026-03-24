import React, { useState } from 'react';
import logo from '../assets/images/smartforge-logo.png';
import { Menu, X } from 'lucide-react'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header className="sf-header font-poppins fixed top-0 left-0 w-full z-[120] bg-[#020617]/90 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <a 
          href="#inicio" 
          className="z-[130] transition-all duration-300 hover:opacity-80 active:scale-95"
        >
          <img src={logo} alt="SmartForge" className="h-16 md:h-20 w-auto object-contain" />
        </a>

        {/* BOTÓN HAMBURGUESA - Móvil */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden z-[130] text-white p-2 focus:outline-none transition-transform active:scale-90"
        >
          {isOpen ? (
            <X size={28} className="text-cyan-400" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-8 items-center font-poppins">
            <li><a href="#que-es" className="text-sm text-white hover:text-cyan-400 transition-colors whitespace-nowrap">Qué es SmartForge</a></li>
            <li><a href="#como-funciona" className="text-sm text-white hover:text-cyan-400 transition-colors">Cómo funciona</a></li>
            <li><a href="#para-quien" className="text-sm text-white hover:text-cyan-400 transition-colors">Para quién</a></li>
          </ul>

          {/* BOTÓN "VER MÓDULOS" CON FONT-POPPINS */}
          <a
            href="https://smartjob.cl/"
            className="
              ml-4 px-5 py-2
              border border-cyan-400
              rounded-full
              text-sm text-cyan-400
              uppercase font-bold font-poppins
              transition-all duration-300
              hover:bg-cyan-400/10
            "
          >
            Volver al Sitio
          </a>

          <a href="#formulario" className="sf-btn-secondary ml-2 text-sm font-poppins">Habla con un Experto</a>
        </nav>
      </header>

      {/* OVERLAY DEL MENÚ MÓVIL */}
      <div className={`
        fixed inset-0 z-[110] lg:hidden bg-[#020617]
        flex flex-col transition-all duration-500 ease-in-out font-poppins
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      `}>
        
        <nav className="flex-grow flex flex-col items-center justify-center px-8 pt-20">
          <ul className="w-full flex flex-col gap-4 text-center">
            
            {/* VER MÓDULOS MÓVIL */}
            <li>
              <a 
                href="https://smartjob.cl/"
                onClick={toggleMenu}
                className="
                  inline-flex items-center gap-2
                  py-3 px-6 mb-6
                  text-sm text-cyan-400
                  border border-cyan-400/30
                  rounded-full
                  uppercase font-medium font-poppins
                  transition-all duration-300
                  hover:bg-cyan-400/10
                "
              >
                Volver al Sitio
              </a>
            </li>

            <li>
              <a href="#que-es" onClick={toggleMenu} className="block py-4 text-2xl text-white font-medium border-b border-white/5">
                Qué es SmartForge
              </a>
            </li>
            <li>
              <a href="#como-funciona" onClick={toggleMenu} className="block py-4 text-2xl text-white font-medium border-b border-white/5">
                Cómo funciona
              </a>
            </li>
            <li>
              <a href="#para-quien" onClick={toggleMenu} className="block py-4 text-2xl text-white font-medium border-b border-white/5">
                Para quién
              </a>
            </li>
            
            <li className="mt-8">
              <a 
                href="#formulario" 
                onClick={toggleMenu} 
                className="block w-full py-5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-bold text-lg font-poppins"
              >
                Solicita una Demo
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Header;