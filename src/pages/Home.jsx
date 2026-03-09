import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* ── NAVBAR ── */}
      <nav className="home-nav">
        <div className="home-nav__logo">
          💍 <span>ShaadiBio</span>
        </div>
        <div className="home-nav__links">
          <button className="home-nav__login" onClick={() => navigate("/login")}>Login</button>
          <button className="home-nav__register" onClick={() => navigate("/register")}>Register</button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="home-hero__badge">✨ India's #1 Marriage Biodata Generator</div>
        <h1 className="home-hero__title">
          Create Your Perfect<br />
          <span className="home-hero__highlight">Marriage Biodata</span><br />
          in Minutes
        </h1>
        <p className="home-hero__subtitle">
          Choose from beautiful templates, fill your details, and download
          a professional biodata instantly. Free for everyone!
        </p>
        <div className="home-hero__actions">
          <button className="home-hero__cta" onClick={() => navigate("/dashboard")}>
            Get Started — It's Free 💍
          </button>
          <button className="home-hero__secondary" onClick={() => navigate("/login")}>
            Login to Save Biodata
          </button>
        </div>
        <p className="home-hero__note">
          🔓 No account needed &nbsp;|&nbsp; 📄 Download instantly &nbsp;|&nbsp; 💎 Premium templates
        </p>

        {/* Floating cards */}
<div className="home-hero__floats">
  <div className="home-hero__float">
    <span className="home-hero__float-icon">📋</span>
    <span>Personal Details</span>
  </div>
  <div className="home-hero__float">
    <span className="home-hero__float-icon">🏠</span>
    <span>Family Details</span>
  </div>
  <div className="home-hero__float">
    <span className="home-hero__float-icon">⭐</span>
    <span>3 Templates</span>
  </div>
  <div className="home-hero__float">
    <span className="home-hero__float-icon">📥</span>
    <span>PDF Download</span>
  </div>
</div>
</section>
      {/* ── HOW IT WORKS ── */}
      <section className="home-steps">
        <div className="home-section__label">Simple Process</div>
        <h2 className="home-section__title">Create Biodata in 3 Easy Steps</h2>
        <div className="home-steps__grid">
          <div className="home-step">
            <div className="home-step__num">01</div>
            <div className="home-step__icon">📝</div>
            <h3>Fill Your Details</h3>
            <p>Enter personal, family, education and horoscope details in our simple form.</p>
          </div>
          <div className="home-step__arrow">→</div>
          <div className="home-step">
            <div className="home-step__num">02</div>
            <div className="home-step__icon">🎨</div>
            <h3>Choose Template</h3>
            <p>Pick from Traditional, Modern or Mughal Arch designs. Preview in real-time.</p>
          </div>
          <div className="home-step__arrow">→</div>
          <div className="home-step">
            <div className="home-step__num">03</div>
            <div className="home-step__icon">📥</div>
            <h3>Download PDF</h3>
            <p>Download your beautiful biodata as PDF instantly. Register to remove watermark.</p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="home-features">
        <div className="home-section__label">Why ShaadiBio</div>
        <h2 className="home-section__title">Everything You Need</h2>
        <div className="home-features__grid">
          {[
            { icon: "🎨", title: "3 Beautiful Templates", desc: "Traditional, Modern & Mughal Arch designs crafted for Indian weddings." },
            { icon: "👁️", title: "Real-time Preview", desc: "See your biodata update live as you type. No guessing!" },
            { icon: "📱", title: "Mobile Friendly", desc: "Works perfectly on phone, tablet and desktop." },
            { icon: "📥", title: "Instant PDF", desc: "Download high-quality PDF in one click." },
            { icon: "🔒", title: "Privacy Controls", desc: "Hide contact details and income information easily." },
            { icon: "💾", title: "Save & Edit", desc: "Register free to save your biodata and edit anytime." },
          ].map((f, i) => (
            <div className="home-feature-card" key={i}>
              <div className="home-feature-card__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEMPLATE PREVIEWS ── */}
      <section className="home-templates">
        <div className="home-section__label">Templates</div>
        <h2 className="home-section__title">Pick Your Style</h2>
        <div className="home-templates__grid">
          <div className="home-template-card">
            <div className="home-template-card_preview home-template-card_preview--modern">
              <div className="ht-modern-header">
                <div className="ht-modern-photo" />
                <div>
                  <div className="ht-line ht-line--name" />
                  <div className="ht-line ht-line--sub" />
                  <div style={{display:"flex", gap:"4px", marginTop:"6px"}}>
                    <div className="ht-badge" />
                    <div className="ht-badge" />
                  </div>
                </div>
              </div>
              <div className="ht-section-block">
                <div className="ht-line ht-line--label" />
                <div className="ht-grid">
                  {[...Array(6)].map((_,i) => <div key={i} className="ht-grid-item" />)}
                </div>
              </div>
            </div>
            <div className="home-template-card__info">
              <span className="home-template-card__tag">Modern</span>
              <h3>Pink Modern</h3>
              <p>Clean, professional layout with pink gradient header</p>
            </div>
          </div>

          <div className="home-template-card home-template-card--featured">
            <div className="home-template-card__badge">Most Popular</div>
            <div className="home-template-card_preview home-template-card_preview--mughal">
              <div className="ht-mughal-arch" />
              <div className="ht-mughal-photo" />
              <div className="ht-line ht-line--gold-name" />
              <div className="ht-line ht-line--gold-sub" />
              <div style={{marginTop:"8px"}}>
                {[...Array(4)].map((_,i) => <div key={i} className="ht-mughal-row" />)}
              </div>
            </div>
            <div className="home-template-card__info">
              <span className="home-template-card_tag home-template-card_tag--gold">Premium</span>
              <h3>Mughal Arch</h3>
              <p>Royal dark blue & gold with ornate Mughal architecture</p>
            </div>
          </div>

          <div className="home-template-card">
            <div className="home-template-card_preview home-template-card_preview--traditional">
              <div className="ht-trad-border">
                <div className="ht-line ht-line--trad-title" />
                <div style={{display:"flex", gap:"6px", marginTop:"6px"}}>
                  <div style={{flex:1}}>
                    {[...Array(5)].map((_,i) => <div key={i} className="ht-trad-row" />)}
                  </div>
                  <div className="ht-trad-photo" />
                </div>
              </div>
            </div>
            <div className="home-template-card__info">
              <span className="home-template-card_tag home-template-card_tag--maroon">Traditional</span>
              <h3>Traditional</h3>
              <p>Classic maroon & cream with floral corner ornaments</p>
            </div>
          </div>
        </div>

        <button className="home-templates__cta" onClick={() => navigate("/dashboard")}>
          Try All Templates Free →
        </button>
      </section>

      {/* ── GUEST VS REGISTERED ── */}
      <section className="home-plans">
        <div className="home-section__label">Plans</div>
        <h2 className="home-section__title">Free vs Registered</h2>
        <div className="home-plans__grid">
          <div className="home-plan-card">
            <div className="home-plan-card__icon">🔓</div>
            <h3>Guest User</h3>
            <p className="home-plan-card__sub">No account needed</p>
            <ul>
              <li>✅ Fill all details</li>
              <li>✅ All 3 templates</li>
              <li>✅ Real-time preview</li>
              <li>✅ Download PDF</li>
              <li>❌ Watermark on PDF</li>
              <li>❌ Cannot save biodata</li>
            </ul>
            <button onClick={() => navigate("/dashboard")}>Continue as Guest</button>
          </div>
          <div className="home-plan-card home-plan-card--featured">
            <div className="home-plan-card__icon">💎</div>
            <h3>Registered User</h3>
            <p className="home-plan-card__sub">Free registration</p>
            <ul>
              <li>✅ Everything in Guest</li>
              <li>✅ No watermark on PDF</li>
              <li>✅ Save biodata</li>
              <li>✅ Edit anytime</li>
              <li>✅ Multiple biodatas</li>
              <li>✅ Privacy controls</li>
            </ul>
            <button onClick={() => navigate("/register")}>Register Free</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="home-footer">
        <div className="home-footer__logo">💍 ShaadiBio</div>
        <p>India's most beautiful marriage biodata generator</p>
        <p className="home-footer__copy">© 2026 ShaadiBio. Made with ❤️ for Indian weddings.</p>
      </footer>

    </div>
  );
}