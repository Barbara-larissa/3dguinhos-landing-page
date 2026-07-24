import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Logotipo com a imagem da pasta public/img/logo.png */}
        <a href="#inicio" className={styles.logoLink}>
          <img 
            src="/img/logo.png" 
            alt="3D Guinchos 24 Horas" 
            className={styles.logoImage} 
          />
        </a>

        {/* Menu Desktop */}
        <nav className={styles.desktopNav}>
          <a href="#inicio">INÍCIO</a>
          <a href="#servicos">SERVIÇOS</a>
          <a href="#atendimento">ÁREA DE ATENDIMENTO</a>
          <a href="#depoimentos">AVALIAÇÕES</a>
         
        </nav>

        {/* Botão Menu Mobile (Hambúrguer) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={styles.menuButton}
          aria-label="Abrir Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className={styles.mobileNav}>
          <a href="#inicio" onClick={() => setIsOpen(false)}>INÍCIO</a>
          <a href="#servicos" onClick={() => setIsOpen(false)}>SERVIÇOS</a>
          <a href="#atendimento" onClick={() => setIsOpen(false)}>ÁREA DE ATENDIMENTO</a>
          <a href="#depoimentos" onClick={() => setIsOpen(false)}>AVALIAÇÕES</a>
          <a href="#footer" onClick={() => setIsOpen(false)}>CONTATO</a>
        </div>
      )}
    </header>
  );
}