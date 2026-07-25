import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Servicos/Services';
import Atendimento from './components/Atendimento/Atendimento';
import DepoimentosGoogle from './components/Depoimentos/DepoimentosGoogle';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

// Novas Páginas
import Sobre from './components/Sobre/Sobre';
import Contato from './components/Contato/Contato'; // Assim que criar o contato na pasta components
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Cabeçalho Fixo */}
        <Header />

        {/* Conteúdo Principal com Rotas */}
        <main className="main-content">
          <Routes>
            {/* Rota Principal (Home): Exibe todas as seções de rolagem */}
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <Services />
                  <Atendimento />
                  <DepoimentosGoogle />
                </>
              } 
            />

            {/* Página Sobre */}
            <Route path="/sobre" element={<Sobre />} />

            {/* Página Contato */}
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        {/* Rodapé e Botão Flutuante Globais */}
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}