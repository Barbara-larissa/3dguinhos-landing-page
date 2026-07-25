import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import styles from './Contato.module.css';

export default function Contato() {
  const numeroWhats = "5543991807819";

  // Função padrão fornecida pelo Google Ads para rastrear a conversão e abrir o link
  const gtag_report_conversion = (url) => {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.open(url, '_blank');
      }
    };
    
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17903717658/DOrcCIjakdYcEJqalNlC',
        'event_callback': callback
      });
    } else {
      // Fallback caso o gtag demore ou não carregue por algum bloqueador
      callback(url);
    }
    
    return false;
  };

  // Ícone SVG oficial do WhatsApp
  const WhatsAppIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="22" 
      height="22" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );

  return (
    <div className={styles.contatoContainer}>
      
      <div className={styles.contatoHero}>
        <h1>Fale Conosco</h1>
        <p>Precisou de guincho em Londrina e região? Atendimento rápido 24 horas!</p>
      </div>

      <section className={styles.conteudoSection}>
        
        <div className={styles.geralInfo}>
          <div className={styles.cardInfoStatic}>
            <Clock size={28} className={styles.iconStatic} />
            <div>
              <h3>Horário de Atendimento</h3>
              <p>Segunda a Domingo - 24 Horas</p>
            </div>
          </div>
          <a href={`tel:${numeroWhats}`} className={styles.cardInfoStatic}>
            <Phone size={28} className={styles.iconStatic} />
            <div>
              <h3>Telefone Principal</h3>
              <p>(43) 99180-7819</p>
            </div>
          </a>
        </div>

        <h2 className={styles.tituloSecao}>Atendimento por Região</h2>
        <p className={styles.subtituloSecao}>Escolha a sua cidade abaixo para falar diretamente com o guincho de plantão:</p>

        <div className={styles.cardsCidadesGrid}>
          
          {/* Londrina */}
          <div className={styles.cidadeCard}>
            <div className={styles.cidadeHeader}>
              <MapPin size={24} className={styles.iconPin} />
              <h3>Londrina - PR</h3>
            </div>
            <p>Precisa de socorro em Londrina? Nossa equipe está nas ruas com atendimento ágil para pane mecânica ou transporte do seu veículo.</p>
            <a 
              href="javascript:void(0);" 
              onClick={(e) => {
                e.preventDefault();
                gtag_report_conversion(`https://wa.me/${numeroWhats}?text=Olá! Preciso de um guincho em Londrina.`);
              }}
              className={styles.botaoWhatsCidade}
            >
              <WhatsAppIcon />
              Chamar em Londrina
            </a>
          </div>

          {/* Cambé */}
          <div className={styles.cidadeCard}>
            <div className={styles.cidadeHeader}>
              <MapPin size={24} className={styles.iconPin} />
              <h3>Cambé - PR</h3>
            </div>
            <p>Ficou com o carro parado em Cambé? Atendemos toda a cidade e rodovias da região com rapidez e segurança total.</p>
            <a 
              href="javascript:void(0);" 
              onClick={(e) => {
                e.preventDefault();
                gtag_report_conversion(`https://wa.me/${numeroWhats}?text=Olá! Preciso de um guincho em Cambé.`);
              }}
              className={styles.botaoWhatsCidade}
            >
              <WhatsAppIcon />
              Chamar em Cambé
            </a>
          </div>

          {/* Ibiporã */}
          <div className={styles.cidadeCard}>
            <div className={styles.cidadeHeader}>
              <MapPin size={24} className={styles.iconPin} />
              <h3>Ibiporã - PR</h3>
            </div>
            <p>Serviço de guincho 24h em Ibiporã e proximidades. Estamos prontos para realizar o transporte seguro do seu automóvel.</p>
            <a 
              href="javascript:void(0);" 
              onClick={(e) => {
                e.preventDefault();
                gtag_report_conversion(`https://wa.me/${numeroWhats}?text=Olá! Preciso de um guincho em Ibiporã.`);
              }}
              className={styles.botaoWhatsCidade}
            >
              <WhatsAppIcon />
              Chamar em Ibiporã
            </a>
          </div>

        </div>

      </section>

    </div>
  );
}