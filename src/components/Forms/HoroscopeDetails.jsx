export default function HoroscopeDetails({ data, onChange }) {

  const handleChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="form-section">
      <h2 className="form-section__title">Horoscope Details</h2>
      <p className="form-section__subtitle">Optional — fill if applicable</p>
      <div className="form-grid">

        <div className="form-field">
          <label>Rashi (Moon Sign)</label>
          <input type="text" name="rashi" placeholder="e.g. Mesh, Mithun"
            value={data.rashi || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Nakshatra</label>
          <input type="text" name="nakshatra" placeholder="e.g. Rohini, Ashwini"
            value={data.nakshatra || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Gotra</label>
          <input type="text" name="gotra" placeholder="Enter gotra"
            value={data.gotra || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Manglik</label>
          <select name="manglik" value={data.manglik || ""} onChange={handleChange}>
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
            <option>Partial</option>
          </select>
        </div>

        <div className="form-field">
          <label>Time of Birth</label>
          <input type="text" name="tob" placeholder="e.g. 10:30 AM"
            value={data.tob || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Place of Birth</label>
          <input type="text" name="pob" placeholder="e.g. Mumbai, Maharashtra"
            value={data.pob || ""} onChange={handleChange} />
        </div>

      </div>
    </div>
  );
}