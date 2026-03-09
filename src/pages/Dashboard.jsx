import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalDetails from "../components/Forms/PersonalDetails";
import FamilyDetails from "../components/Forms/FamilyDetails";
import EducationDetails from "../components/Forms/EducationDetails";
import HoroscopeDetails from "../components/Forms/HoroscopeDetails";
import PhotoUpload from "../components/Forms/PhotoUpload";
import BiodataPreview from "../components/Preview/BiodataPreview";
import "../styles/dashboard.css";

const STEPS = [
  { id: 1, label: "Photo",     icon: "▣" },
  { id: 2, label: "Personal",  icon: "◉" },
  { id: 3, label: "Family",    icon: "⌂" },
  { id: 4, label: "Education", icon: "✦" },
  { id: 5, label: "Horoscope", icon: "✧" },
  { id: 6, label: "Preview",   icon: "▤" },
];

const TEMPLATES = [
  { id: "modern",      label: "Modern",      desc: "Pink gradient, clean layout" },
  { id: "mughal",      label: "Mughal Arch",  desc: "Royal dark blue & gold" },
  { id: "traditional", label: "Traditional", desc: "Classic maroon & cream" },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("shaadi_user") || "null");
  const isGuest = !user;

  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [privacy, setPrivacy] = useState({
    hideContact: false,
    hideIncome: false,
  });
  const [fontStyle, setFontStyle] = useState("serif");
  const [accentColor, setAccentColor] = useState("#E91E8C");
  const [formData, setFormData] = useState({
    name: "", gender: "", dob: "", age: "",
    height: "", religion: "", caste: "",
    motherTongue: "", nationality: "Indian",
    maritalStatus: "Unmarried", complexion: "",
    fatherName: "", fatherOcc: "",
    motherName: "", motherOcc: "",
    siblings: "", nativePlace: "", familyType: "",
    education: "", college: "", profession: "",
    company: "", income: "",
    rashi: "", nakshatra: "", gotra: "",
    tob: "", pob: "",
    contact: "", address: "", email: "",
    photo: null,
  });

  const updateForm = (data) =>
    setFormData((prev) => ({ ...prev, ...data }));

  const handleLogout = () => {
    localStorage.removeItem("shaadi_user");
    navigate("/");
  };

  const handleNext = () => {
    if (step < STEPS.length) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="db-page">

      {/* NAVBAR */}
      <nav className="db-nav">
        <div className="db-nav__left">
          <span className="db-nav__logo" onClick={() => navigate("/")}>
            ShaadiBio
          </span>
          <span className="db-nav__divider" />
          <span className="db-nav__page">Biodata Builder</span>
        </div>
        <div className="db-nav__right">
          {isGuest ? (
            <div className="db-nav__guest">
              <span className="db-nav__guest-badge">Guest Mode</span>
              <button className="db-nav__login-btn" onClick={() => navigate("/login")}>
                Login to Save
              </button>
            </div>
          ) : (
            <div className="db-nav__user">
              <div className="db-nav__avatar">
                {user.fullName ? user.fullName[0].toUpperCase() : user.email[0].toUpperCase()}
              </div>
              <span className="db-nav__username">
                {user.fullName || user.email}
              </span>
              <button className="db-nav__logout" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* MAIN LAYOUT */}
      <div className="db-layout">

        {/* FORM AREA */}
        <div className="db-form-area">

          {/* Step Progress */}
          <div className="db-steps">
            {STEPS.map((s) => (
              <div
                key={s.id}
                className={
                  "db-step" +
                  (step === s.id ? " db-step--active" : "") +
                  (step > s.id ? " db-step--done" : "")
                }
                onClick={() => setStep(s.id)}
              >
                <div className="db-step__circle">
                  {step > s.id ? "✓" : s.id}
                </div>
                <span className="db-step__label">{s.label}</span>
                {s.id < STEPS.length && <div className="db-step__line" />}
              </div>
            ))}
          </div>

          {/* Form Card */}
          <div className="db-form-card">

            {isGuest && (
              <div className="db-guest-banner">
                <span>
                  You are in <strong>Guest Mode</strong> — your biodata will have a watermark.
                </span>
                <button onClick={() => navigate("/register")}>
                  Register Free to Remove
                </button>
              </div>
            )}

            <div className="db-form-content">
              {step === 1 && <PhotoUpload data={formData} onChange={updateForm} />}
              {step === 2 && <PersonalDetails data={formData} onChange={updateForm} />}
              {step === 3 && <FamilyDetails data={formData} onChange={updateForm} />}
              {step === 4 && <EducationDetails data={formData} onChange={updateForm} />}
              {step === 5 && <HoroscopeDetails data={formData} onChange={updateForm} />}
              {step === 6 && (
                <BiodataPreview
                  formData={formData}
                  template={selectedTemplate}
                  isGuest={isGuest}
                  privacy={privacy}
                  fontStyle={fontStyle}
                  accentColor={accentColor}
                />
              )}
            </div>

            {/* Navigation */}
            <div className="db-form-nav">
              {step > 1 && (
                <button className="db-btn-back" onClick={handleBack}>
                  Back
                </button>
              )}
              <div className="db-form-nav__right">
                <span className="db-step-count">
                  Step {step} of {STEPS.length}
                </span>
                {step < STEPS.length && (
                  <button className="db-btn-next" onClick={handleNext}>
                    Next
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* SIDEBAR */}
        <div className="db-sidebar">

          <div className="db-sidebar__header">
            <h3>Choose Template</h3>
            <p>Select a design for your biodata</p>
          </div>

          <div className="db-templates">
            {TEMPLATES.map((t) => (
              <div
                key={t.id}
                className={"db-template-card" + (selectedTemplate === t.id ? " db-template-card--active" : "")}
                onClick={() => setSelectedTemplate(t.id)}
              >
                <div className={"db-template-thumb db-template-thumb--" + t.id}>
                  {t.id === "modern" && (
                    <div className="db-thumb-modern">
                      <div className="db-thumb-header" />
                      <div className="db-thumb-lines">
                        <div /><div /><div /><div />
                      </div>
                    </div>
                  )}
                  {t.id === "mughal" && (
                    <div className="db-thumb-mughal">
                      <div className="db-thumb-arch" />
                      <div className="db-thumb-lines">
                        <div /><div /><div />
                      </div>
                    </div>
                  )}
                  {t.id === "traditional" && (
                    <div className="db-thumb-traditional">
                      <div className="db-thumb-border">
                        <div className="db-thumb-lines">
                          <div /><div /><div /><div />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="db-template-info">
                  <span className="db-template-name">{t.label}</span>
                  <span className="db-template-desc">{t.desc}</span>
                </div>
                {selectedTemplate === t.id && (
                  <div className="db-template-check">✓</div>
                )}
              </div>
            ))}
          </div>

          {/* CUSTOMIZE PANEL */}
          <div className="db-customize">
            <div className="db-customize__header">
              <h3>Customize</h3>
              <p>Font, color & privacy</p>
            </div>

            {/* Font Selector */}
            <div className="db-customize__section">
              <label className="db-customize__label">Font Style</label>
              <div className="db-font-options">
                <div
                  className={"db-font-opt" + (fontStyle === "serif" ? " db-font-opt--active" : "")}
                  onClick={() => setFontStyle("serif")}
                >
                  <span style={{ fontFamily: "Cormorant Garamond, serif" }}>Aa</span>
                  <p>Serif</p>
                </div>
                <div
                  className={"db-font-opt" + (fontStyle === "sans" ? " db-font-opt--active" : "")}
                  onClick={() => setFontStyle("sans")}
                >
                  <span style={{ fontFamily: "Jost, sans-serif" }}>Aa</span>
                  <p>Modern</p>
                </div>
                <div
                  className={"db-font-opt" + (fontStyle === "decorative" ? " db-font-opt--active" : "")}
                  onClick={() => setFontStyle("decorative")}
                >
                  <span style={{ fontFamily: "Cinzel Decorative, cursive" }}>Aa</span>
                  <p>Fancy</p>
                </div>
              </div>
            </div>

            {/* Color Picker */}
            <div className="db-customize__section">
              <label className="db-customize__label">Accent Color</label>
              <div className="db-color-options">
                {[
                  { color: "#E91E8C", name: "Pink"   },
                  { color: "#C2185B", name: "Rose"   },
                  { color: "#1A237E", name: "Navy"   },
                  { color: "#7B1A1A", name: "Maroon" },
                  { color: "#1B5E20", name: "Green"  },
                  { color: "#4A148C", name: "Purple" },
                  { color: "#E65100", name: "Orange" },
                  { color: "#37474F", name: "Slate"  },
                ].map((c) => (
                  <div
                    key={c.color}
                    className={"db-color-dot" + (accentColor === c.color ? " db-color-dot--active" : "")}
                    style={{ background: c.color }}
                    title={c.name}
                    onClick={() => setAccentColor(c.color)}
                  />
                ))}
              </div>
              <div className="db-color-custom">
                <span>Custom</span>
                <input
                  type="color"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                />
              </div>
            </div>

            {/* Privacy Controls */}
            <div className="db-customize__section">
              <label className="db-customize__label">Privacy Controls</label>
              <div className="db-privacy-options">
                <div className="db-privacy-row">
                  <div className="db-privacy-info">
                    <span>Hide Contact Number</span>
                    <p>Won't show on biodata</p>
                  </div>
                  <div
                    className={"db-toggle" + (privacy.hideContact ? " db-toggle--on" : "")}
                    onClick={() => setPrivacy(prev => ({ ...prev, hideContact: !prev.hideContact }))}
                  >
                    <div className="db-toggle__thumb" />
                  </div>
                </div>
                <div className="db-privacy-row">
                  <div className="db-privacy-info">
                    <span>Hide Income / Salary</span>
                    <p>Won't show on biodata</p>
                  </div>
                  <div
                    className={"db-toggle" + (privacy.hideIncome ? " db-toggle--on" : "")}
                    onClick={() => setPrivacy(prev => ({ ...prev, hideIncome: !prev.hideIncome }))}
                  >
                    <div className="db-toggle__thumb" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {isGuest && (
            <div className="db-sidebar__watermark-note">
              <strong>Guest users</strong> get a watermark on their PDF.
              <span onClick={() => navigate("/register")}> Register free</span> to remove it.
            </div>
          )}

          <button
            className="db-sidebar__preview-btn"
            onClick={() => setStep(6)}
          >
            Preview Biodata
          </button>

        </div>
      </div>
    </div>
  );
}