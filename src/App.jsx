import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Servicos/Services';
import Atendimento from './components/Atendimento/Atendimento';
import DepoimentosGoogle from './components/Depoimentos/DepoimentosGoogle';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      {/* Cabeçalho Fixo */}
      <Header />

      {/* Conteúdo Principal */}
      <main className="main-content">

        <Hero />
        <Services />
        <Atendimento />
        <DepoimentosGoogle />
        <WhatsAppButton />
        <Footer />

      </main>
    </div>
  );
}