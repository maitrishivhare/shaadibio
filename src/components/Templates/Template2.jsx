import { useState, useRef } from "react";
import "../../styles/mughal.css";

const defaultData = {
  name: "Arbin Modi",
  dob: "27/08/1998",
  tob: "09:12 AM",
  pob: "Mumbai",
  rashi: "Gemini (Mithun)",
  manglik: "No",
  religion: "Hindu",
  height: "5 ft. 7 in.",
  complexion: "Fair",
  education: "Bachelor of Business Administration (BBA)",
  occupation: "Tata Communications Ltd., Delhi",
  fatherName: "Ashok Modi",
  fatherOcc: "Business - Clothing Store",
  motherName: "Jaya Modi",
  motherOcc: "Homemaker",
  siblings: "1 Brother (Unmarried)",
  contact: "9762845297 / 7358589427",
  address: "Flat No. 71, Mukatha Apartment, Bengaluru",
  photo: null,
};

const FIELDS = [
  ["name", "Name"],
  ["dob", "Date of Birth"],
  ["tob", "Time of Birth"],
  ["pob", "Place of Birth"],
  ["rashi", "Rashi"],
  ["manglik", "Manglik"],
  ["religion", "Religion"],
  ["height", "Height"],
  ["complexion", "Complexion"],
  ["education", "Education"],
  ["occupation", "Occupation"],
  ["fatherName", "Father's Name"],
  ["fatherOcc", "Father's Occupation"],
  ["motherName", "Mother's Name"],
  ["motherOcc", "Mother's Occupation"],
  ["siblings", "Siblings"],
  ["contact", "Contact Number"],
  ["address", "Address"],
];

function MughalArch() {
  const tiles = [0,1,2,3,4,5,6,7];
  return (
    <svg viewBox="0 0 400 180" className="mg-arch-svg" preserveAspectRatio="none">
      {/* Background */}
      <rect width="400" height="180" fill="#1B0A2E"/>
      {/* Geometric tiling pattern */}
      {tiles.map((i) => (
        <g key={i} transform={"translate(" + (i * 50) + ", 0)"}>
          <polygon points="25,0 50,25 25,50 0,25" fill="none" stroke="#C9A84C" strokeWidth="0.4" opacity="0.3"/>
          <polygon points="25,50 50,75 25,100 0,75" fill="none" stroke="#C9A84C" strokeWidth="0.4" opacity="0.3"/>
          <polygon points="25,100 50,125 25,150 0,125" fill="none" stroke="#C9A84C" strokeWidth="0.4" opacity="0.3"/>
        </g>
      ))}
      {/* Main Mughal Arch */}
      <path d="M60,180 L60,100 Q60,30 200,20 Q340,30 340,100 L340,180 Z" fill="#2D1554" stroke="#C9A84C" strokeWidth="2"/>
      {/* Inner arch */}
      <path d="M90,180 L90,108 Q90,55 200,45 Q310,55 310,108 L310,180 Z" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.6"/>
      {/* Arch top dome */}
      <path d="M170,22 Q200,8 230,22" fill="none" stroke="#C9A84C" strokeWidth="2"/>
      <circle cx="200" cy="12" r="6" fill="#C9A84C"/>
      <circle cx="200" cy="12" r="3" fill="#1B0A2E"/>
      {/* Left minaret */}
      <rect x="42" y="60" width="16" height="120" fill="#2D1554" stroke="#C9A84C" strokeWidth="1"/>
      <polygon points="42,60 50,40 58,60" fill="#C9A84C"/>
      <circle cx="50" cy="38" r="4" fill="#C9A84C"/>
      <rect x="44" y="80" width="12" height="8" fill="#C9A84C" opacity="0.4"/>
      <rect x="44" y="100" width="12" height="8" fill="#C9A84C" opacity="0.4"/>
      <rect x="44" y="120" width="12" height="8" fill="#C9A84C" opacity="0.4"/>
      {/* Right minaret */}
      <rect x="342" y="60" width="16" height="120" fill="#2D1554" stroke="#C9A84C" strokeWidth="1"/>
      <polygon points="342,60 350,40 358,60" fill="#C9A84C"/>
      <circle cx="350" cy="38" r="4" fill="#C9A84C"/>
      <rect x="344" y="80" width="12" height="8" fill="#C9A84C" opacity="0.4"/>
      <rect x="344" y="100" width="12" height="8" fill="#C9A84C" opacity="0.4"/>
      <rect x="344" y="120" width="12" height="8" fill="#C9A84C" opacity="0.4"/>
      {/* Star pattern */}
      <g transform="translate(200, 70)">
        <polygon points="0,-14 4,-5 14,-5 6,2 9,13 0,7 -9,13 -6,2 -14,-5 -4,-5" fill="#C9A84C" opacity="0.8"/>
      </g>
      {/* Bottom fade */}
      <path d="M0,170 Q100,160 200,165 Q300,160 400,170 L400,180 L0,180 Z" fill="#C9A84C" opacity="0.15"/>
      {/* Hanging lamp */}
      <line x1="200" y1="20" x2="200" y2="50" stroke="#C9A84C" strokeWidth="1"/>
      <ellipse cx="200" cy="55" rx="8" ry="10" fill="#C9A84C" opacity="0.7"/>
      <ellipse cx="200" cy="55" rx="4" ry="6" fill="#FFD700" opacity="0.5"/>
    </svg>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="mg-section-title">
      <span className="mg-section-line" />
      <span className="mg-section-text">{children}</span>
      <span className="mg-section-line" />
    </div>
  );
}

function Row({ label, value }) {
  if (!value) return null;
  return (
    <div className="mg-row">
      <span className="mg-row__label">{label}</span>
      <span className="mg-row__dot">✦</span>
      <span className="mg-row__value">{value}</span>
    </div>
  );
}

export default function Template2({ formData, privacy, accentColor }) {
  const data = formData || {};
  const color = accentColor || "#C9A84C";

  return (
    <div className="mg-page" style={{ "--mg-color": color }}>
      <div className="mg-card">

        {/* Mughal Arch Header */}
        <div className="mg-arch-wrapper">
          <MughalArch />
          <div className="mg-arch-content">
            <div className="mg-photo-ring">
              {data.photo ? (
                <img src={data.photo} alt="Profile" />
              ) : (
                <div className="mg-photo-placeholder">👤</div>
              )}
            </div>
            <h1 className="mg-name">{data.name || "Your Name"}</h1>
            <p className="mg-subtitle">{data.profession || data.occupation || "Profession"}</p>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="mg-divider" style={{ color: color }}>
          <span>✦</span>
          <span>Marriage Biodata</span>
          <span>✦</span>
        </div>

        {/* Body */}
        <div className="mg-body">

          <div className="mg-section">
            <SectionTitle>Personal Details</SectionTitle>
            <Row label="Date of Birth"  value={data.dob} />
            <Row label="Time of Birth"  value={data.tob} />
            <Row label="Place of Birth" value={data.pob} />
            <Row label="Rashi"          value={data.rashi} />
            <Row label="Nakshatra"      value={data.nakshatra} />
            <Row label="Manglik"        value={data.manglik} />
            <Row label="Religion"       value={data.religion} />
            <Row label="Caste"          value={data.caste} />
            <Row label="Height"         value={data.height} />
            <Row label="Complexion"     value={data.complexion} />
            <Row label="Marital Status" value={data.maritalStatus} />
          </div>

          <div className="mg-section">
            <SectionTitle>Education & Profession</SectionTitle>
            <Row label="Education"  value={data.education} />
            <Row label="College"    value={data.college} />
            <Row label="Profession" value={data.profession} />
            <Row label="Company"    value={data.company} />
            {!privacy?.hideIncome && (
              <Row label="Income" value={data.income} />
            )}
          </div>

          <div className="mg-section">
            <SectionTitle>Family Details</SectionTitle>
            <Row label="Father's Name"       value={data.fatherName} />
            <Row label="Father's Occupation" value={data.fatherOcc} />
            <Row label="Mother's Name"       value={data.motherName} />
            <Row label="Mother's Occupation" value={data.motherOcc} />
            <Row label="Siblings"            value={data.siblings} />
            <Row label="Native Place"        value={data.nativePlace} />
            <Row label="Family Type"         value={data.familyType} />
          </div>

          {(data.rashi || data.nakshatra || data.gotra) && (
            <div className="mg-section">
              <SectionTitle>Horoscope Details</SectionTitle>
              <Row label="Rashi"     value={data.rashi} />
              <Row label="Nakshatra" value={data.nakshatra} />
              <Row label="Gotra"     value={data.gotra} />
            </div>
          )}

          {!privacy?.hideContact && (
            <div className="mg-section">
              <SectionTitle>Contact Details</SectionTitle>
              <Row label="Contact Number" value={data.contact} />
              <Row label="Email"          value={data.email} />
              <Row label="Address"        value={data.address} />
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="mg-footer" style={{ color: color }}>
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>

      </div>
    </div>
  );
}