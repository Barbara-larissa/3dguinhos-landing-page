import React from 'react';
import { ShieldCheck, Zap, Handshake, Star } from 'lucide-react';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="servicos" className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        
        {/* Título da Seção */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleBlue}>NOSSOS</span> SERVIÇOS
          </h2>
          <div className={styles.titleDivider}></div>
        </div>

        {/* Bloco Superior: Lista de Serviços */}
        <div className={styles.servicesBar}>
          <div className={styles.serviceItem}>
            <span>GUINCHO PARA CARRO E MOTO</span>
          </div>
          <div className={styles.serviceDivider}></div>
          
          <div className={styles.serviceItem}>
            <span>TRANSPORTE DE VEÍCULOS</span>
          </div>
          <div className={styles.serviceDivider}></div>
          
          <div className={styles.serviceItem}>
            <span>GUINCHO PARA CAMINHÕES E MÁQUINAS</span>
          </div>
          <div className={styles.serviceDivider}></div>
          
          <div className={styles.serviceItem}>
            <span>PLANTÃO 24 HORAS</span>
          </div>
        </div>

        {/* Bloco Inferior: Diferenciais e Qualidades */}
        <div className={styles.featuresBar}>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <ShieldCheck size={32} />
            </div>
            <h3>SEGURANÇA</h3>
            <p>Equipamentos modernos e equipe qualificada</p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Zap size={32} />
            </div>
            <h3>RAPIDEZ</h3>
            <p>Chegamos rápido onde você estiver</p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Handshake size={32} />
            </div>
            <h3>CONFIANÇA</h3>
            <p>Compromisso com você e seu veículo</p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Star size={32} />
            </div>
            <h3>EXPERIÊNCIA</h3>
            <p>Anos de atuação e clientes satisfeitos</p>
          </div>

        </div>

      </div>
    </section>
  );
}