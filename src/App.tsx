import React from 'react';
import './style.css';

const App = () => {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">Eleve<span>One</span></div>
          <a href="#cta" className="btn-glass">Consultoria gratuita</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-glow"></div>
        <div className="container">
          <div className="badge">
            <div className="dot"></div>
            Design Jurídico Estratégico
          </div>
          <h1 className="title text-gradient">
            Sua presença digital <br /> tão sólida quanto seu <br /> conhecimento jurídico.
          </h1>
          <p className="description">
            Desenvolvemos landing pages de alto padrão para advogados que buscam autoridade, sofisticação e conversão de clientes qualificados.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Quero elevar minha autoridade</button>
            <button className="btn-secondary">Ver demonstração</button>
          </div>
        </div>
      </header>

      <section className="pain-section">
        <div className="container grid-2">
          <div>
            <h2 className="text-gradient">Pare de perder clientes para sites <span className="blue">genéricos</span> e sem autoridade.</h2>
            <p className="description">No mercado jurídico premium, a primeira impressão não é apenas importante — ela é decisiva para o fechamento de grandes contratos.</p>
          </div>
          <div className="cards-grid">
            <div className="card-mini">
              <i className="ph-bold ph-warning-circle"></i>
              Sua marca parece amadora perto da concorrência?
            </div>
            <div className="card-mini">
              <i className="ph-bold ph-shield-warning"></i>
              O site atual não transmite a confiança necessária?
            </div>
            <div className="card-mini">
              <i className="ph-bold ph-chart-line-down"></i>
              Tráfego caro que não se converte em leads reais?
            </div>
            <div className="card-mini">
              <i className="ph-bold ph-users-three"></i>
              Atraindo o público errado para o seu escritório?
            </div>
          </div>
        </div>
      </section>

      <section className="conversion-section">
        <div className="container grid-2">
          <div className="mockup-glass">
            <div className="mockup-lines">
              <div className="line medium"></div>
              <div className="line long"></div>
              <div className="line medium"></div>
              <div className="line long"></div>
            </div>
          </div>
          <div>
            <h2 className="text-gradient">O Equilíbrio Perfeito entre <span className="blue">Estética e Performance.</span></h2>
            <p className="description">Nossas páginas são projetadas seguindo os mais altos padrões de UX Design, garantindo que cada pixel trabalhe para sua conversão.</p>
            <ul className="benefits-list">
              <li><i className="ph-bold ph-check-circle"></i> Carregamento ultrarrápido</li>
              <li><i className="ph-bold ph-check-circle"></i> Otimização para dispositivos móveis</li>
              <li><i className="ph-bold ph-check-circle"></i> Copywriting persuasivo (Linguagem Jurídica)</li>
              <li><i className="ph-bold ph-check-circle"></i> Conformidade com o Código de Ética da OAB</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="text-gradient">A Solução <span className="blue">End-to-End</span></h2>
            <p className="description">Cuidamos de tudo para que você foque apenas no que faz de melhor: advogar.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-box"><i className="ph-bold ph-palette"></i></div>
              <h3>Identidade Premium</h3>
              <p className="description" style={{fontSize: '0.9rem'}}>Design exclusivo que reflete o prestígio e a seriedade do seu trabalho.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><i className="ph-bold ph-lightning"></i></div>
              <h3>Foco em Conversão</h3>
              <p className="description" style={{fontSize: '0.9rem'}}>Estrutura validada para transformar visitantes em consultas agendadas.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><i className="ph-bold ph-lock"></i></div>
              <h3>Segurança Total</h3>
              <p className="description" style={{fontSize: '0.9rem'}}>Hospedagem segura e certificados SSL inclusos em todos os projetos.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="cta-final">
        <div className="container">
          <h2 className="text-gradient">Pronto para elevar o nível do seu <br /> posicionamento digital?</h2>
          <p className="description">Clique no botão abaixo e agende uma consultoria estratégica gratuita conosco.</p>
          <a href="https://wa.me/seunumeroaqui" className="btn-cta">
            <i className="ph-bold ph-whatsapp-logo"></i>
            Falar com um especialista agora
          </a>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2024 Eleve One. Todos os direitos reservados. Design para Advogados de Alta Performance.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
