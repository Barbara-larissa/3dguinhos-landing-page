import React from 'react';
import { MapPin } from 'lucide-react';
import styles from './Atendimento.module.css';

export default function Atendimento() {
  return (
    <section id="atendimento" className={styles.atendimentoSection}>
      <div className={styles.atendimentoContainer}>
        
        {/* Cabeçalho da Seção */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleBlue}>ÁREA</span> DE ATENDIMENTO
          </h2>
          <div className={styles.titleDivider}></div>
        </div>

        {/* Layout Lado a Lado: Texto na Esquerda, Imagem do Mapa na Direita */}
        <div className={styles.contentGrid}>
          
          {/* Lado Esquerdo: Texto e Cidades */}
          <div className={styles.textColumn}>
            <div className={styles.locationTitleGroup}>
              <div className={styles.pinIconWrapper}>
                <MapPin size={32} />
              </div>
              <div className={styles.citiesText}>
                <h3>Londrina, Cambé, Ibiporã,<br />Jataizinho e Região</h3>
              </div>
            </div>
            
            <p className={styles.subText}>
              Atendimento rápido em toda a região!
            </p>
          </div>

          {/* Lado Direito: Imagem Real do Mapa da Pasta img */}
          <div className={styles.mapColumn}>
            <div className={styles.mapImageWrapper}>
              <img 
                src="/img/mapa.png" 
                alt="Mapa de Cobertura de Atendimento" 
                className={styles.mapImage}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}