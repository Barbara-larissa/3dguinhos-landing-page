import React, { useEffect, useState } from 'react';
import styles from './Depoimentos.module.css';

// Esta função verifica repetidamente se o elemento da marca d'água existe dentro do iframe e o oculta.
const ocultarMarcaDagua = () => {
  const iframe = document.querySelector('iframe[src*="apps.elfsight.com"]');
  if (iframe) {
    try {
      // Tenta acessar o conteúdo interno do iframe (pode falhar por segurança, mas vamos tentar)
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const elementsToHide = iframeDoc.querySelectorAll('a[href*="elfsight.com/google-reviews-widget"]');
      
      if (elementsToHide.length > 0) {
        elementsToHide.forEach(el => {
          el.style.setProperty('display', 'none', 'important');
        });
        console.log('Marca d\'água ocultada com sucesso.');
        return true; // Para o loop se encontrou e escondeu
      }
    } catch (e) {
      // Se houver erro de segurança (Cross-Origin), o CSS inline acima não funcionará, mas vamos continuar tentando
      console.warn("Segurança do navegador impediu acesso ao iframe, usando fallback alternativo");
      
      // Se não conseguimos acessar o conteúdo, podemos tentar esconder o container do widget inteiro (drástico)
      // ou deixar como está, pois o navegador bloqueia essa intrusão por segurança.
    }
  }
  return false; // Continua tentando
};

export default function DepoimentosGoogle() {
  useEffect(() => {
    // Tenta carregar o script da Elfsight
    try {
      if (!document.getElementById('elfsight-platform-script')) {
        const script = document.createElement('script');
        script.id = 'elfsight-platform-script';
        script.src = "https://elfsightcdn.com/platform.js";
        script.async = true;
        document.body.appendChild(script);
      }
    } catch (e) {
      console.error("Erro ao carregar script do widget:", e);
    }

    // Tenta ocultar a marca d'água em intervalos (caso o iframe demore para renderizar)
    let attempts = 0;
    const intervalId = setInterval(() => {
      attempts++;
      const found = ocultarMarcaDagua();
      if (found || attempts > 10) { // Para depois de 10 tentativas
        clearInterval(intervalId);
      }
    }, 1000); // Tenta a cada segundo

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, []);

  
  return (
    <section id="depoimentos" className={styles.reviewsSection}>
      <div className={styles.reviewsContainer}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleNeon}>O QUE DIZEM</span> NOSSOS CLIENTES
        </h2>
        <div className={styles.sectionDivider}></div>

        {/* O Widget da Elfsight */}
        <div className="elfsight-app-9725f452-14c8-47a2-a91a-f94399f9e569" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
}