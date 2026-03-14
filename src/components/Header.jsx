import React from 'react';
// Importamos el logo
import logo from '../assets/images/smartforge-logo.png';

const Header = () => {
  return (
    <header className="sf-header font-[Poppins]">
      {/* Logo */}
      <a href="#" className="pxl-logo">
        <img src={logo} alt="SmartForge" />
      </a>

      {/* Navegación */}
      <nav>
        <ul id="menu-menu-landing">
          <li><a href="#que-es">Qué es SmartForge</a></li>
          <li><a href="#como-funciona">Cómo funciona</a></li>
          <li><a href="#para-quien">Para quién</a></li>
        </ul>
      </nav>

      {/* CTA Header */}
      <a href="#formulario" className="sf-btn-secondary font-[Poppins]">
        Habla con un Experto
      </a>
    </header>
  );
};

export default Header;