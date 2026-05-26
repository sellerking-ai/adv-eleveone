import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/eleve-one-logo.png";
import aboutVisual from "@/assets/about-cube.png";
import heroBg from "@/assets/hero-bg.png";
import heroVisual from "@/assets/hero-cube.png";
import camilaImg from "@/assets/portfolio-camila.png";
import pereiraImg from "@/assets/portfolio-pereira.png";
import reisImg from "@/assets/portfolio-reis.png";
import almeidaImg from "@/assets/portfolio-almeida.png";
import ribeiroImg from "@/assets/portfolio-ribeiro.png";
import instagramVsLanding from "@/assets/instagram-vs-landing.png";
import instagramVsLandingMobile from "@/assets/instagram-vs-landing-mobile.png";


export const Route = createFileRoute("/")({
  component: Index,
});

const portfolioItems = [
  { title: "Advocacia Almeida & Barros", niche: "Direito Empresarial", color: "linear-gradient(135deg,#050505,#3b82f6)", image: almeidaImg },
  { title: "Dra. Aline Noronha", niche: "Direito Civil", color: "linear-gradient(135deg,#0c1226,#60a5fa)", image: camilaImg },
  { title: "Matheus Lisboa", niche: "Direito Criminal", color: "linear-gradient(135deg,#000814,#1e90ff)", image: pereiraImg },
  { title: "Advocacia Reis & Figueredo", niche: "Direito Trabalhista", color: "linear-gradient(135deg,#0a0f1f,#2563eb)", image: reisImg },
  { title: "Ribeiro & Andrade", niche: "Advocacia Tributária", color: "linear-gradient(135deg,#020617,#38bdf8)", image: ribeiroImg },
];

function Index() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % portfolioItems.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="container nav-content">
          <a href="/" className="logo-wrap">
            <img src={logo} alt="Logotipo Eleve One - Landing Pages e Automações" className="logo-img" width="180" height="60" />
          </a>
          <a href="https://wa.me/5537998014747" target="_blank" rel="noopener noreferrer" className="btn-glass">WhatsApp</a>
        </div>
      </nav>

      <main>
        <section className="hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(2,6,23,0.55), rgba(2,6,23,0.9))`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="hero-glow"></div>
          <div className="container hero-content-grid">
            <div className="hero-text-side" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" style={{ margin: '0 auto' }}><span className="dot"></span>Elevando o padrão jurídico 2026</div>
              <h1 className="title">
                Seu escritório transmite a <br />
                <span className="text-gradient">autoridade que deveria?</span>
              </h1>
              <p className="description">
                Landing pages premium para advogados que desejam fortalecer sua presença digital, transmitir mais confiança e aumentar contatos qualificados.
              </p>
              <div className="hero-actions" style={{ justifyContent: 'center' }}>
                <a href="https://wa.me/5537998014747" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>Quero minha landing page</a>
                <a href="https://wa.me/5537998014747" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Falar no WhatsApp</a>
              </div>
            </div>
          </div>
        </section>

        <div className="logos-slider">
          <div className="logos-track">
            {[...Array(2)].map((_, i) => (
              <div key={i} style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
                <div className="logo-item"><i className="ph ph-cpu"></i> OpenAI</div>
                <div className="logo-item"><i className="ph ph-brain"></i> Claude</div>
                <div className="logo-item"><i className="ph ph-google-logo"></i> Google</div>
                <div className="logo-item"><i className="ph ph-wordpress-logo"></i> WordPress</div>
                <div className="logo-item"><i className="ph ph-github-logo"></i> GitHub</div>
                <div className="logo-item"><i className="ph ph-cloud"></i> Cloudflare</div>
                <div className="logo-item"><i className="ph ph-intersect"></i> n8n</div>
                <div className="logo-item"><i className="ph ph-lightning"></i> AI Agents</div>
              </div>
            ))}
          </div>
        </div>

        <section className="pain-section">
          <div className="container grid-2">
            <div className="text-block">
              <h2>A verdade que ninguém te diz sobre presença digital.</h2>
              <p>Advogados perdem contratos todos os dias não por falta de conhecimento técnico, mas porque a imagem que projetam online é amadora.</p>
            </div>
            <div className="cards-grid">
              <div className="card-mini"><i className="ph ph-check-circle"></i> Instagram Desorganizado</div>
              <div className="card-mini"><i className="ph ph-check-circle"></i> Site Antigo</div>
              <div className="card-mini"><i className="ph ph-check-circle"></i> Falta de Autoridade</div>
              <div className="card-mini"><i className="ph ph-check-circle"></i> Falta de Confiança</div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container grid-2">
            <div className="about-visual">
              <div className="about-glow"></div>
              <img src={aboutVisual} alt="Nickolas Gregorio - Fundador da Eleve One" className="about-card-logo" style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="about-content">
              <h2 className="section-title">Quem está por trás da <br /><span className="blue">Eleve One</span></h2>
              
              <p className="about-text intro">
                Meu nome é Nickolas Gregorio, fundador da Eleve One.
              </p>
              
              <p className="about-text">
                Meu foco é simples: criar landing pages que fazem escritórios de advocacia serem levados a sério na internet — e transformarem visitas em contatos qualificados.
              </p>

              <p className="about-text" style={{ marginTop: '16px' }}>
                Cada projeto é desenvolvido com estratégia, design sofisticado e estrutura pensada para o público jurídico.
              </p>

              <div className="about-highlights" style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', width: '100%' }}>
                <div className="highlight-item"><i className="ph ph-check-circle"></i> Projetos entregues em até 48h</div>
                <div className="highlight-item"><i className="ph ph-check-circle"></i> Domínio e hospedagem inclusos</div>
                <div className="highlight-item"><i className="ph ph-check-circle"></i> Pagamento só após aprovação</div>
                <div className="highlight-item"><i className="ph ph-check-circle"></i> Suporte 30 dias para ajustes</div>
              </div>
            </div>
          </div>
        </section>


        {/* Portfólio / Modelos */}
        <section className="portfolio-section">
          <div className="container">
            <div className="section-header">
              <h2>Portfólio <span className="blue">/ Modelos</span></h2>
              <p>Conheça alguns dos modelos premium que entregamos para escritórios de alta performance.</p>
            </div>

            <div className="portfolio-carousel">
              <div className="portfolio-track" style={{ transform: `translateX(calc(-${index} * (280px + 24px)))` }}>
                {[...portfolioItems, ...portfolioItems].map((item, i) => (
                  <div className="portfolio-card" key={i} style={{ background: item.color }}>
                    {item.image && (
                      <img src={item.image} alt={item.title} className="portfolio-card-bg" />
                    )}
                    <div className="portfolio-card-inner">
                      {!item.image && (
                        <div className="portfolio-mock">
                          <div className="mock-bar"></div>
                          <div className="mock-line long"></div>
                          <div className="mock-line medium"></div>
                          <div className="mock-line short"></div>
                        </div>
                      )}
                      <h3>{item.title}</h3>
                      <p>{item.niche}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="portfolio-dots">
                {portfolioItems.map((_, i) => (
                  <button
                    key={i}
                    className={`dot-btn ${i === index ? "active" : ""}`}
                    onClick={() => setIndex(i)}
                    aria-label={`Ir para modelo ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="offer-section">
          <div className="container">
            <div className="offer-content">
              <div className="badge"><span className="dot"></span>Condição Especial</div>
              <h2 className="offer-title">Seu escritório pode ter uma landing page premium <span className="blue">sem assumir riscos.</span></h2>
              <p className="offer-subtitle">Você aprova o projeto primeiro. O pagamento é realizado somente após a entrega.</p>
              
              <div className="premium-offer-card">
                <div className="offer-card-glow"></div>
                
                <span className="old-price">De R$897</span>
                <div className="main-price">R$549</div>
                <div className="price-subtext">Pagamento somente após o projeto pronto</div>
                
                <div className="offer-benefits-grid">
                  <div className="offer-benefit-item"><i className="ph ph-check-circle"></i> Landing page premium personalizada</div>
                  <div className="offer-benefit-item"><i className="ph ph-check-circle"></i> Domínio incluso por 1 ano</div>
                  <div className="offer-benefit-item"><i className="ph ph-check-circle"></i> Hospedagem inclusa por 1 ano</div>
                  <div className="offer-benefit-item"><i className="ph ph-check-circle"></i> WhatsApp integrado</div>
                  <div className="offer-benefit-item"><i className="ph ph-check-circle"></i> Suporte para ajustes iniciais</div>
                  <div className="offer-benefit-item"><i className="ph ph-check-circle"></i> Desenvolvimento estratégico</div>
                  <div className="offer-benefit-item"><i className="ph ph-clock"></i> Entrega em até 48 horas</div>
                </div>

                <div className="trust-statement">
                  <span>VOCÊ SÓ PAGA QUANDO ESTIVER PRONTO</span>
                </div>

                <a href="https://wa.me/5537998014747" target="_blank" rel="noopener noreferrer" className="btn-offer">
                  Falar no WhatsApp <i className="ph ph-whatsapp-logo"></i>
                </a>
              </div>
            </div>
          </div>
        </section>


        <section className="conversion-section">
          <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={instagramVsLanding} alt="Instagram vs Landing Page - Comparativo Eleve One" className="conversion-img-desktop" style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
            <img src={instagramVsLandingMobile} alt="Instagram vs Landing Page - Comparativo Eleve One" className="conversion-img-mobile" style={{ width: '95%', height: 'auto', display: 'none', margin: '0 auto' }} />
          </div>
        </section>



        <section className="features">
          <div className="container">
            <div className="section-header">
              <h2>Estratégia que converte.</h2>
              <p>Desenvolvido com foco total em resultados comerciais.</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="icon-box"><i className="ph ph-lightning"></i></div>
                <h3>Design Sofisticado</h3>
                <p>Otimizado para o máximo desempenho e percepção de valor.</p>
              </div>
              <div className="feature-card">
                <div className="icon-box"><i className="ph ph-chart-line-up"></i></div>
                <h3>Estrutura Estratégica</h3>
                <p>Cada seção pensada para guiar o visitante até o contato.</p>
              </div>
              <div className="feature-card">
                <div className="icon-box"><i className="ph ph-whatsapp-logo"></i></div>
                <h3>WhatsApp Integrado</h3>
                <p>Receba contatos qualificados direto no seu WhatsApp.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="cta-final">
          <div className="container">
            <h2>Seu escritório merece uma presença digital à altura da sua atuação.</h2>
            <p>Tenha uma landing page moderna, estratégica e preparada para transmitir mais credibilidade.</p>
            <a href="https://wa.me/5537998014747" target="_blank" rel="noopener noreferrer" className="btn-cta">Falar no WhatsApp <i className="ph ph-arrow-right"></i></a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 <a href="https://www.eleveone.com.br" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>Eleve One</a> — Soluções digitais que elevam resultados.</p>
      </footer>
    </>
  );
}
