export default function PersonalDetails({ data, onChange }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { [name]: value };

    if (name === "dob" && value) {
      const today = new Date();
      const birth = new Date(value);
      let age = today.getFullYear() - birth.getFullYear();
      const m = today.getMonth() - birth.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
      updated.age = age.toString();
    }

    onChange(updated);
  };

  return (
    <div className="form-section">
      <h2 className="form-section__title">Personal Details</h2>
      <div className="form-grid">

        <div className="form-field">
          <label>Full Name *</label>
          <input type="text" name="name" placeholder="Enter full name"
            value={data.name || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Gender *</label>
          <select name="gender" value={data.gender || ""} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-field">
          <label>Date of Birth *</label>
          <input type="date" name="dob"
            value={data.dob || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Age (auto-calculated)</label>
          <input type="text" name="age" placeholder="Auto-filled from DOB"
            value={data.age || ""} readOnly />
        </div>

        <div className="form-field">
          <label>Height</label>
          <input type="text" name="height" placeholder="e.g. 5 ft 6 in"
            value={data.height || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Complexion</label>
          <select name="complexion" value={data.complexion || ""} onChange={handleChange}>
            <option value="">Select</option>
            <option>Fair</option>
            <option>Wheatish</option>
            <option>Dark</option>
          </select>
        </div>

        <div className="form-field">
          <label>Religion *</label>
          <input type="text" name="religion" placeholder="e.g. Hindu, Muslim"
            value={data.religion || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Caste</label>
          <input type="text" name="caste" placeholder="Enter caste"
            value={data.caste || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Mother Tongue</label>
          <input type="text" name="motherTongue" placeholder="e.g. Hindi, Marathi"
            value={data.motherTongue || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Marital Status</label>
          <select name="maritalStatus" value={data.maritalStatus || "Unmarried"} onChange={handleChange}>
            <option>Unmarried</option>
            <option>Divorced</option>
            <option>Widowed</option>
          </select>
        </div>

        <div className="form-field">
          <label>Nationality</label>
          <input type="text" name="nationality" placeholder="e.g. Indian"
            value={data.nationality || "Indian"} onChange={handleChange} />
        </div>

      </div>
    </div>
  );
}