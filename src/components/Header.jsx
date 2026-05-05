import React, { useState } from 'react';
import logo from '../assets/images/smartforge-logo.png';
import { Menu, X } from 'lucide-react'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  };

  return (
    <>
      <header className="font-medium font-poppins fixed top-0 left-0 w-full z-[120] bg-[#020617]/95 backdrop-blur-md border-b border-white/5">
        {/* Contenedor principal con justify-between para separar los 3 bloques */}
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
          
          {/* 1. BLOQUE LOGO - Ancho fijo o flexible para no colapsar */}
          <div className="flex-shrink-0">
            <a 
              href="#inicio" 
              className="z-[120] transition-all duration-300 hover:opacity-80 active:scale-95 block"
            >
              <img src={logo} alt="SmartForge" className="h-20 md:h-14 lg:h-24 w-auto object-contain" />
            </a>
          </div>

          {/* 2. BLOQUE NAVEGACIÓN - Centrado absoluto en el espacio sobrante */}
          <nav className="hidden lg:flex flex-grow justify-center px-4">
            <ul className="flex gap-6 xl:gap-12 items-center font-poppins flex-nowrap">
              <li>
                <a href="#que-es" className="text-sm xl:text-xl text-white hover:text-cyan-400 transition-colors whitespace-nowrap">
                  Qué es SmartForge
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-sm xl:text-xl text-white hover:text-cyan-400 transition-colors whitespace-nowrap">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#para-quien" className="text-sm xl:text-xl text-white hover:text-cyan-400 transition-colors whitespace-nowrap">
                  Para quién
                </a>
              </li>
            </ul>
          </nav>

          {/* 3. BLOQUE BOTONES - Siempre a la derecha */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            <a
              href="https://smartjob.cl/"
              className="px-4 xl:px- py-2 border border-cyan-400 rounded-full text-[10px] xl:text-base text-cyan-400 uppercase font-bold whitespace-nowrap transition-all duration-300 hover:bg-cyan-400/10"
            >
              Volver al Sitio
            </a>

            <a 
              href="#formulario" 
              className="px-4 xl:px-5 py-2 text-[10px] xl:text-base font-bold whitespace-nowrap border border-white rounded-full"
            >
              Habla con un Experto
            </a>
          </div>

          {/* BOTÓN HAMBURGUESA (Solo visible en móvil) */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden z-[130] text-white p-2 focus:outline-none transition-transform active:scale-90"
          >
            {isOpen ? <X size={28} className="text-cyan-400" /> : <Menu size={28} className="text-white" />}
          </button>

        </div>
      </header>

      {/* OVERLAY DEL MENÚ MÓVIL (Se mantiene igual) */}
      <div className={`
        fixed inset-0 z-[110] lg:hidden bg-[#020617]
        flex flex-col transition-all duration-500 ease-in-out font-poppins
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      `}>
        <nav className="flex-grow flex flex-col items-center justify-center px-8">
          <ul className="w-full flex flex-col gap-2 text-center">
            <li className="mb-4">
              <a href="https://smartjob.cl/" onClick={toggleMenu} className="inline-block py-3 px-8 text-sm text-cyan-400 border border-cyan-400 rounded-full uppercase font-bold">
                Volver al Sitio
              </a>
            </li>
            <li><a href="#que-es" onClick={toggleMenu} className="block py-4 text-lg text-white font-medium">Qué es SmartForge</a></li>
            <li><a href="#como-funciona" onClick={toggleMenu} className="block py-4 text-lg text-white font-medium">Cómo funciona</a></li>
            <li><a href="#para-quien" onClick={toggleMenu} className="block py-4 text-lg text-white font-medium">Para quién</a></li>
            <li className="mt-12">
              <a href="#formulario" onClick={toggleMenu} className="block w-full py-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold text-lg">
                Habla con un Experto
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="h-20 lg:h-24"></div>
    </>
  );
};

export default Header;