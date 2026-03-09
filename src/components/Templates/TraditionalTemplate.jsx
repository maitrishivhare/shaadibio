import { useState, useRef } from "react";
import "../../styles/template.css";

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

function Corner() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      {/* Main stem curves */}
      <path d="M2,2 Q2,40 40,40 Q2,40 2,78" stroke="#7B1A1A" strokeWidth="2" fill="none"/>
      <path d="M2,2 Q40,2 40,40 Q40,2 78,2" stroke="#7B1A1A" strokeWidth="2" fill="none"/>

      {/* Center flower */}
      <circle cx="40" cy="40" r="4" fill="#7B1A1A"/>
      <ellipse cx="40" cy="33" rx="3" ry="5" fill="#C0392B" opacity="0.85"/>
      <ellipse cx="40" cy="47" rx="3" ry="5" fill="#C0392B" opacity="0.85"/>
      <ellipse cx="33" cy="40" rx="5" ry="3" fill="#C0392B" opacity="0.85"/>
      <ellipse cx="47" cy="40" rx="5" ry="3" fill="#C0392B" opacity="0.85"/>
      <ellipse cx="34.5" cy="34.5" rx="3" ry="5" fill="#A93226" opacity="0.7" transform="rotate(-45 34.5 34.5)"/>
      <ellipse cx="45.5" cy="34.5" rx="3" ry="5" fill="#A93226" opacity="0.7" transform="rotate(45 45.5 34.5)"/>
      <ellipse cx="34.5" cy="45.5" rx="3" ry="5" fill="#A93226" opacity="0.7" transform="rotate(45 34.5 45.5)"/>
      <ellipse cx="45.5" cy="45.5" rx="3" ry="5" fill="#A93226" opacity="0.7" transform="rotate(-45 45.5 45.5)"/>

      {/* Small flower top-left corner */}
      <circle cx="6" cy="6" r="3" fill="#7B1A1A"/>
      <ellipse cx="6" cy="2" rx="2" ry="3" fill="#C0392B" opacity="0.9"/>
      <ellipse cx="6" cy="10" rx="2" ry="3" fill="#C0392B" opacity="0.9"/>
      <ellipse cx="2" cy="6" rx="3" ry="2" fill="#C0392B" opacity="0.9"/>
      <ellipse cx="10" cy="6" rx="3" ry="2" fill="#C0392B" opacity="0.9"/>

      {/* Leaf sprigs along top curve */}
      <ellipse cx="20" cy="8" rx="4" ry="2" fill="#8B2500" opacity="0.6" transform="rotate(-30 20 8)"/>
      <ellipse cx="32" cy="5" rx="4" ry="2" fill="#8B2500" opacity="0.6" transform="rotate(-15 32 5)"/>

      {/* Leaf sprigs along left curve */}
      <ellipse cx="8" cy="20" rx="2" ry="4" fill="#8B2500" opacity="0.6" transform="rotate(-60 8 20)"/>
      <ellipse cx="5" cy="32" rx="2" ry="4" fill="#8B2500" opacity="0.6" transform="rotate(-75 5 32)"/>

      {/* Small bud dots along curves */}
      <circle cx="14" cy="11" r="2" fill="#C0392B" opacity="0.7"/>
      <circle cx="26" cy="6"  r="1.5" fill="#C0392B" opacity="0.7"/>
      <circle cx="11" cy="14" r="2" fill="#C0392B" opacity="0.7"/>
      <circle cx="6"  cy="26" r="1.5" fill="#C0392B" opacity="0.7"/>
    </svg>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="section-title">
      <span>{children}</span>
      <div className="section-title-line" />
    </div>
  );
}

function Row({ label, value }) {
  if (!value) return null;
  return (
    <div className="data-row">
      <span className="data-row__label">{label}</span>
      <span className="data-row__value">: {value}</span>
    </div>
  );
}

export default function TraditionalTemplate({ formData, privacy, accentColor }) {
  const data = formData || {};
  const color = accentColor || "#7B1A1A";

  return (
    <div className="biodata-page">
      <div className="biodata-card" style={{ borderColor: color }}>

        <div className="biodata-inner-border" style={{ borderColor: color }} />

        {/* Corners */}
        <div className="corner corner--tl"><Corner color={color} /></div>
        <div className="corner corner--tr"><Corner color={color} /></div>
        <div className="corner corner--bl"><Corner color={color} /></div>
        <div className="corner corner--br"><Corner color={color} /></div>

        <div className="biodata-content">

          <SectionTitle>Personal Details</SectionTitle>

          <div className="personal-details-row">
            <div className="personal-details-fields">
              <Row label="Name"          value={data.name} />
              <Row label="Date of Birth" value={data.dob} />
              <Row label="Time of Birth" value={data.tob} />
              <Row label="Place of Birth" value={data.pob} />
              <Row label="Rashi"         value={data.rashi} />
              <Row label="Nakshatra"     value={data.nakshatra} />
              <Row label="Manglik"       value={data.manglik} />
              <Row label="Religion"      value={data.religion} />
              <Row label="Caste"         value={data.caste} />
              <Row label="Height"        value={data.height} />
              <Row label="Complexion"    value={data.complexion} />
              <Row label="Marital Status" value={data.maritalStatus} />
              <Row label="Nationality"   value={data.nationality} />
              <Row label="Education"     value={data.education} />
              <Row label="College"       value={data.college} />
              <Row label="Occupation"    value={data.profession} />
              <Row label="Company"       value={data.company} />
              {!privacy?.hideIncome && (
                <Row label="Income" value={data.income} />
              )}
            </div>

            <div className="photo-box">
              {data.photo ? (
                <img src={data.photo} alt="Profile" />
              ) : (
                <span className="photo-placeholder">Photo</span>
              )}
            </div>
          </div>

          <SectionTitle>Family Details</SectionTitle>
          <Row label="Father's Name"       value={data.fatherName} />
          <Row label="Father's Occupation" value={data.fatherOcc} />
          <Row label="Mother's Name"       value={data.motherName} />
          <Row label="Mother's Occupation" value={data.motherOcc} />
          <Row label="Siblings"            value={data.siblings} />
          <Row label="Native Place"        value={data.nativePlace} />
          <Row label="Family Type"         value={data.familyType} />

          {(data.gotra || data.nakshatra) && (
            <>
              <SectionTitle>Horoscope Details</SectionTitle>
              <Row label="Rashi"     value={data.rashi} />
              <Row label="Nakshatra" value={data.nakshatra} />
              <Row label="Gotra"     value={data.gotra} />
            </>
          )}

          {!privacy?.hideContact && (
            <>
              <SectionTitle>Contact Details</SectionTitle>
              <Row label="Contact Number"    value={data.contact} />
              <Row label="Email"             value={data.email} />
              <Row label="Residential Address" value={data.address} />
            </>
          )}

        </div>
      </div>
    </div>
  );
}