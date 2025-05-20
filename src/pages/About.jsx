import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Upptäck funktionerna som gör BuildBoard enkelt att använda</h1>
        <p>
          BuildBoard samlar allt du behöver för projektledning i ett kraftfullt, flexibelt verktyg. 
          Planera, samarbeta och leverera – snabbare och smartare.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="features-grid">
        <div className="feature-card">
          <h2>📌 Projektöversikt</h2>
          <p>
            Bygg tydliga och visuella arbetsflöden som passar just ert team.
            Anpassa enkelt efter era specifika arbetsmetoder och behov.
          </p>
        </div>
        <div className="feature-card">
          <h2>🕓 Tidslinjer</h2>
          <p>
            Få en tydlig överblick över deadlines, milstolpar och beroenden. 
            Kommunicera enkelt projektstatus till i teamet.
          </p>
        </div>
        <div className="feature-card">
          <h2>📊 Rapporter & Insikter</h2>
          <p>
            Fatta datadrivna beslut med realtidsrapporter, arbetsbelastningsanalyser 
            och teamets prestation i fokus.
          </p>
        </div>
        <div className="feature-card">
          <h2>⚙️ Automatisering</h2>
          <p>
            Eliminera manuella uppgifter med smarta automatiseringar som påminnelser, 
            uppgiftstilldelningar och statusuppdateringar.
          </p>
        </div>
        <div className="feature-card">
          <h2>🔗 Integrationer</h2>
          <p>
            Koppla ihop BuildBoard med verktyg som Slack, GitHub, Google Drive och fler – 
            för ett sömlöst arbetsflöde.
          </p>
        </div>
        <div className="feature-card">
          <h2>🔒 Säkerhet & Skalbarhet</h2>
          <p>
            Skydda er data med robust och flexibel hantering.
           Skalat för att möta behoven hos både mindre team och stora organisationer.
          </p>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trusted-by-section">
        <h2>Tillit från team världen över</h2>
        <p>
          Från ambitiösa startups till globala jättar – 
          företag vänder sig till vårt avancerade system för projektplanering och samordning.
           Med oss får de inte bara verktyg, utan en konkurrensfördel. 
          För att de vet att bättre verktyg ger bättre resultat.
        </p>
        <div className="logos">
          <img src="/logos/spotify.png" alt="Spotify" />
          <img src="/logos/volvo.png" alt="Volvo" />
          <img src="/logos/scania.png" alt="Scania" />
          <img src="/logos/ikea.png" alt="IKEA" />
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta-section">
        <h2>Bygg bättre. Tillsammans.</h2>
        <p>
          Lämna manuella system och ostrukturerad kommunikation bakom dig. 
          Med BuildBoard får ni en samlad plats för allt ert arbete.
        </p>
        <button className="cta-button">Testa gratis</button>
      </section>
    </div>
  );
};

export default About;