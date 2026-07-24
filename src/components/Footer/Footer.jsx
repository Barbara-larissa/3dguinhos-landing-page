import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram, FaPhoneAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Coluna 1: Apenas a Logo e a Frase */}
        <div className={styles.brandColumn}>
          <div className={styles.logoContainer}>
            <img src="/img/logo.png" alt="3D Guinchos Logo" className={styles.logoImg} />
          </div>
          <p>Atendimento 24 horas para sua tranquilidade!</p>
        </div>

        {/* Coluna 2: Navegação */}
        <div className={styles.column}>
          <h3>Navegação</h3>
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#atendimento">Área de Atendimento</a>
          <a href="#sobre">Sobre Nós</a>
          <a href="#depoimentos">Avaliações</a>
          <a href="#contato">Contato</a>
        </div>

        {/* Coluna 3: Serviços */}
        <div className={styles.column}>
          <h3>Serviços</h3>
          <a href="#servicos">Guincho para Carros e Motos</a>
          <a href="#servicos">Transporte de Veículos</a>
          <a href="#servicos">Guincho para Caminhões e Máquinas</a>
          <a href="#servicos">Plantão 24 Horas</a>
        </div>

        {/* Coluna 4: Contato (Com o link correto do Instagram) */}
        <div className={styles.column}>
          <h3>Contato</h3>
          <div className={styles.contactItem}>
            <FaPhoneAlt /> (43) 99180-7819
          </div>
          <div className={styles.contactItem}>
            <FaClock /> Atendimento 24 horas
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt /> Londrina - PR
          </div>
          <a 
            href="https://www.instagram.com/3d_guinchos/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialLink}
          >
            <FaInstagram /> 
          </a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} 3D Guinchos. Desenvolvido por Bárbara Larissa.</p>
      </div>
    </footer>
  );
}