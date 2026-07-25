import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Logotipo com a imagem da pasta public/img/logo.png */}
        <Link to="/" className={styles.logoLink}>
          <img 
            src="/img/logo.png" 
            alt="3D Guinchos 24 Horas" 
            className={styles.logoImage} 
          />
        </Link>

        {/* Menu Desktop */}
        <nav className={styles.desktopNav}>
          <Link to="/">INÍCIO</Link>
          <Link to="/sobre">SOBRE</Link>
          <a href="/#servicos">SERVIÇOS</a>
          <a href="/#atendimento">ÁREA DE ATENDIMENTO</a>
          <a href="/#depoimentos">AVALIAÇÕES</a>
          <Link to="/contato">CONTATO</Link>
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
          <Link to="/" onClick={() => setIsOpen(false)}>INÍCIO</Link>
          <Link to="/sobre" onClick={() => setIsOpen(false)}>SOBRE</Link>
          <a href="/#servicos" onClick={() => setIsOpen(false)}>SERVIÇOS</a>
          <a href="/#atendimento" onClick={() => setIsOpen(false)}>ÁREA DE ATENDIMENTO</a>
          <a href="/#depoimentos" onClick={() => setIsOpen(false)}>AVALIAÇÕES</a>
          <Link to="/contato" onClick={() => setIsOpen(false)}>CONTATO</Link>
        </div>
      )}
    </header>
  );
}