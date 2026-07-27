import React from 'react';
import styles from './Depoimentos.module.css';

export default function DepoimentosGoogle() {
  // Substitua pela URL da ficha do Google Meu Negócio do cliente
  const googleReviewUrl = "https://search.google.com/local/writereview?placeid=SEU_PLACE_ID";

  return (
    <section id="depoimentos" className={styles.reviewsSection}>
      <div className={styles.reviewsContainer}>
        {/* Título com destaque Neon */}
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleNeon}>O QUE DIZEM</span> NOSSOS CLIENTES
        </h2>
        
        <div className={styles.sectionDivider}></div>

        {/* Bloco do Badge de Avaliação */}
        <div className={styles.ratingBadge}>
          <div className={styles.scoreGroup}>
            <span className={styles.scoreText}>5.0</span>
            <div className={styles.starsGroup} aria-label="5 de 5 estrelas">
              ★★★★★
            </div>
            <span className={styles.reviewCount}>
              (24 avaliações reais no Google)
            </span>
          </div>

          {/* Botão de Ação para o Google */}
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleButton}
          >
            Deixar uma avaliação no Google
          </a>
        </div>
      </div>
    </section>
  );
}