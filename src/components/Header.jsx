import React, { useState } from 'react';
import logo from '../assets/images/smartforge-logo.png';
import { Menu, X } from 'lucide-react'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header className="sf-header font-[Poppins] fixed top-0 left-0 w-full z-[120] bg-[#020617]/90 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
        
        {/* LOGO - REDIRECCIÓN A SMARTJOB EN LA MISMA PESTAÑA */}
        <a 
          href="https://smartjob.cl/" 
          className="z-[130] transition-all duration-300 hover:opacity-80 active:scale-95"
        >
          <img src={logo} alt="SmartForge" className="h-20 w-auto object-contain" />
        </a>

        {/* BOTÓN HAMBURGUESA - Siempre a la derecha en móvil */}
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
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8">
            <li><a href="#que-es" className="text-sm text-white hover:text-cyan-400 transition-colors">Qué es SmartForge</a></li>
            <li><a href="#como-funciona" className="text-sm text-white hover:text-cyan-400 transition-colors">Cómo funciona</a></li>
            <li><a href="#para-quien" className="text-sm text-white hover:text-cyan-400 transition-colors">Para quién</a></li>
          </ul>
          <a href="#formulario" className="sf-btn-secondary ml-6 text-sm">Habla con un Experto</a>
        </nav>
      </header>

      {/* OVERLAY DEL MENÚ MÓVIL */}
      <div className={`
        fixed inset-0 z-[110] lg:hidden bg-[#020617]
        flex flex-col transition-all duration-500 ease-in-out
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      `}>
        
        {/* CONTENIDO DEL MENÚ */}
        <nav className="flex-grow flex flex-col items-center justify-center px-8">
          <ul className="w-full flex flex-col gap-6 text-center">
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
            
            {/* CTA Móvil */}
            <li className="mt-8">
              <a 
                href="#formulario" 
                onClick={toggleMenu} 
                className="block w-full py-5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-bold text-lg shadow-[0_10px_25px_rgba(34,211,238,0.3)]"
              >
                Solicita una Demo
              </a>
            </li>
          </ul>
        </nav>

        {/* FOOTER DEL MENÚ */}
        <div className="pb-12 text-center">
           <p className="text-gray-500 text-[10px] tracking-[0.3em] uppercase">SmartForge · IA Supervision</p>
        </div>
      </div>
      
      {/* Espaciador para evitar que el contenido se oculte tras el header fijo */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Header;