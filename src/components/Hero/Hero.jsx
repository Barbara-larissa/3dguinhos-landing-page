import React from 'react';
import { Clock } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="inicio" className={styles.heroSection}>
      <div className={styles.heroGrid}>
        
        {/* Lado Esquerdo: Textos */}
        <div className={styles.heroTextColumn}>
          <div className={styles.badgeBox}>
            <Clock size={16} />
            <span>24 HORAS</span>
          </div>

          <h1 className={styles.heroTitle}>
            GUINCHO <br />
            <span className={styles.highlightBlue}>24 HORAS</span>
          </h1>

          <p className={styles.heroSubtitle}>
            LEVE & PESADO
          </p>

          <p className={styles.descriptionText}>
            ATENDIMENTO RÁPIDO,<br />
            SEGURO E DE CONFIANÇA!
          </p>

          {/* --- BLOCO DOS BOTÕES ATUALIZADO --- */}
          <div className={styles.heroButtonsContainer}>
            
            {/* Botão WhatsApp (Usando ícone oficial do FontAwesome) */}
            <a 
              href="https://wa.me/5543991807819" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.whatsappButton}
            >
              <div className={styles.buttonIcon}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <div className={styles.buttonTextContent}>
                <span className={styles.buttonTitle}>CHAMAR NO WHATSAPP</span>
                <span className={styles.buttonSubtitle}>Atendimento 24 horas</span>
              </div>
            </a>

            {/* Botão Telefone (Usando ícone de telefone profissional do FontAwesome) */}
            <a 
              href="tel:5543991807819" 
              className={styles.phoneButton}
            >
              <div className={styles.buttonIconPhone}>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <div className={styles.buttonTextContent}>
                <span className={styles.buttonTitle}>LIGAR AGORA</span>
                <span className={styles.buttonPhoneText}>(43) 99180-7819</span>
              </div>
            </a>

          </div>

        </div>

        {/* Lado Direito: Imagem */}
        <div className={styles.heroImageColumn} role="img" aria-label="Caminhão Guincho 24 Horas"></div>

      </div>
    </section>
  );
}