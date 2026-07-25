import React from 'react';
import { ShieldCheck, Clock, Award } from 'lucide-react';
import styles from './Sobre.module.css';

export default function Sobre() {
  return (
    <div className={styles.sobreContainer}>
      
      {/* Cabeçalho da Página */}
      <div className={styles.sobreHero}>
        <h1>Quem Somos</h1>
        <p>3D Guinchos – Atendimento 24 horas, rapidez, segurança e confiança em Londrina e região.</p>
      </div>

      {/* Seção Principal: Texto e Imagem Lado a Lado */}
      <section className={styles.conteudoSection}>
        <div className={styles.gridContainer}>
          
          {/* Coluna de Texto */}
          <div className={styles.textoBox}>
            <h2>Compromisso e Agilidade nas Estradas</h2>
            <p>
              Fundada em <strong>2023</strong>, a <strong>3D Guinchos</strong> nasceu em Londrina com o compromisso de oferecer um atendimento rápido, seguro e de confiança para quem precisa de auxílio nas estradas ou dentro da cidade.
            </p>
            <p>
              Somos especializados em <strong>guincho 24 horas</strong>, transporte de veículos leves e pesados, remoções técnicas e serviços com munck, atendendo Londrina e toda a região com agilidade, responsabilidade e equipamentos adequados para cada necessidade.
            </p>
            <p>
              Nossa missão é prestar um atendimento humanizado, chegando o mais rápido possível ao cliente e garantindo que cada veículo seja transportado com total segurança. Trabalhamos 24 horas por dia, 7 dias por semana, porque sabemos que imprevistos não têm hora para acontecer.
            </p>
            <p>
              Na 3D Guinchos, valorizamos a transparência, o respeito e a confiança em cada serviço realizado. Nossa equipe está preparada para oferecer soluções eficientes, com atendimento personalizado e foco na satisfação de cada cliente.
            </p>
          </div>

          {/* Coluna da Imagem com Container Próprio */}
          <div className={styles.imagemContainer}>
            <img 
              src="/img/frota.jpeg" 
              alt="Caminhão da 3D Guinchos em Londrina" 
              className={styles.imagemSobre} 
            />
          </div>

        </div>
      </section>

      {/* Seção de Diferenciais */}
      <section className={styles.diferenciaisSection}>
        <h2>Nossos Diferenciais</h2>
        <div className={styles.cardsGrid}>
          
          <div className={styles.card}>
            <Clock size={36} className={styles.cardIcon} />
            <h3>Atendimento 24h Real</h3>
            <p>Disponíveis 24 horas por dia, 7 dias por semana, porque imprevistos não têm hora marcada.</p>
          </div>

          <div className={styles.card}>
            <ShieldCheck size={36} className={styles.cardIcon} />
            <h3>Segurança e Cuidado</h3>
            <p>Equipamentos adequados e total cuidado no embarque e transporte do seu veículo.</p>
          </div>

          <div className={styles.card}>
            <Award size={36} className={styles.cardIcon} />
            <h3>Atendimento Humanizado</h3>
            <p>Equipe preparada para oferecer soluções eficientes e suporte no momento em que você mais precisa.</p>
          </div>

        </div>
      </section>

    </div>
  );
}