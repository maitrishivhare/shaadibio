import { useState, useRef } from "react";
import "../../styles/modern.css";

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

function SectionTitle({ children, icon }) {
  return (
    <div className="m-section-title">
      <span className="m-section-icon">{icon}</span>
      <span className="m-section-text">{children}</span>
    </div>
  );
}

function Row({ label, value }) {
  if (!value) return null;
  return (
    <div className="m-row">
      <span className="m-row__label">{label}</span>
      <span className="m-row__value">{value}</span>
    </div>
  );
}

export default function Template1({ formData, privacy, accentColor }) {
  const data = formData || {};
  const color = accentColor || "#E91E8C";

  return (
    <div className="m-page" style={{ "--m-color": color }}>
      <div className="m-card">

        {/* HEADER */}
        <div className="m-header" style={{ background: "linear-gradient(135deg, #1A1A2E, " + color + ")" }}>
          {data.photo && (
            <img src={data.photo} alt="Profile" className="m-photo" />
          )}
          <h1 className="m-name">{data.name || "Your Name"}</h1>
          <p className="m-tagline">{data.profession || data.occupation || "Profession"}</p>
          <div className="m-header-badges">
            {data.religion && <span className="m-badge">{data.religion}</span>}
            {data.rashi && <span className="m-badge">{data.rashi}</span>}
            {data.height && <span className="m-badge">{data.height}</span>}
          </div>
        </div>

        {/* BODY */}
        <div className="m-body">

          {/* Personal Details */}
          <div className="m-section">
            <SectionTitle icon="👤">Personal Details</SectionTitle>
            <div className="m-grid">
              <Row label="Date of Birth"  value={data.dob} />
              <Row label="Time of Birth"  value={data.tob} />
              <Row label="Place of Birth" value={data.pob} />
              <Row label="Rashi"          value={data.rashi} />
              <Row label="Nakshatra"      value={data.nakshatra} />
              <Row label="Manglik"        value={data.manglik} />
              <Row label="Religion"       value={data.religion} />
              <Row label="Caste"          value={data.caste} />
              <Row label="Mother Tongue"  value={data.motherTongue} />
              <Row label="Height"         value={data.height} />
              <Row label="Complexion"     value={data.complexion} />
              <Row label="Marital Status" value={data.maritalStatus} />
              <Row label="Nationality"    value={data.nationality} />
            </div>
          </div>

          {/* Education & Profession */}
          <div className="m-section">
            <SectionTitle icon="🎓">Education & Profession</SectionTitle>
            <div className="m-grid">
              <Row label="Education"   value={data.education} />
              <Row label="College"     value={data.college} />
              <Row label="Profession"  value={data.profession} />
              <Row label="Company"     value={data.company} />
              {!privacy?.hideIncome && (
                <Row label="Income" value={data.income} />
              )}
            </div>
          </div>

          {/* Family Details */}
          <div className="m-section">
            <SectionTitle icon="🏠">Family Details</SectionTitle>
            <div className="m-grid">
              <Row label="Father's Name"       value={data.fatherName} />
              <Row label="Father's Occupation" value={data.fatherOcc} />
              <Row label="Mother's Name"       value={data.motherName} />
              <Row label="Mother's Occupation" value={data.motherOcc} />
              <Row label="Siblings"            value={data.siblings} />
              <Row label="Native Place"        value={data.nativePlace} />
              <Row label="Family Type"         value={data.familyType} />
            </div>
          </div>

          {/* Horoscope */}
          {(data.rashi || data.nakshatra || data.gotra) && (
            <div className="m-section">
              <SectionTitle icon="✨">Horoscope Details</SectionTitle>
              <div className="m-grid">
                <Row label="Rashi"     value={data.rashi} />
                <Row label="Nakshatra" value={data.nakshatra} />
                <Row label="Gotra"     value={data.gotra} />
                <Row label="Manglik"   value={data.manglik} />
              </div>
            </div>
          )}

          {/* Contact Details */}
          {!privacy?.hideContact && (
            <div className="m-section">
              <SectionTitle icon="📞">Contact Details</SectionTitle>
              <div className="m-grid">
                <Row label="Contact" value={data.contact} />
                <Row label="Email"   value={data.email} />
                <Row label="Address" value={data.address} />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}