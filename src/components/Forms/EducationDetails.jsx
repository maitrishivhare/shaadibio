export default function EducationDetails({ data, onChange }) {

  const handleChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="form-section">
      <h2 className="form-section__title">Education & Profession</h2>
      <div className="form-grid">

        <div className="form-field">
          <label>Highest Education</label>
          <input type="text" name="education" placeholder="e.g. B.Tech, MBA"
            value={data.education || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>College / University</label>
          <input type="text" name="college" placeholder="College name"
            value={data.college || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Profession</label>
          <input type="text" name="profession" placeholder="e.g. Software Engineer"
            value={data.profession || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Company / Organisation</label>
          <input type="text" name="company" placeholder="Company name"
            value={data.company || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Annual Income</label>
          <input type="text" name="income" placeholder="e.g. 8 LPA"
            value={data.income || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Contact Number</label>
          <input type="text" name="contact" placeholder="Phone number"
            value={data.contact || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email address"
            value={data.email || ""} onChange={handleChange} />
        </div>

        <div className="form-field form-field--full">
          <label>Residential Address</label>
          <textarea name="address" placeholder="Full address" rows="3"
            value={data.address || ""} onChange={handleChange} />
        </div>

      </div>
    </div>
  );
}