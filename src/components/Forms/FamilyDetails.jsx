export default function FamilyDetails({ data, onChange }) {

  const handleChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="form-section">
      <h2 className="form-section__title">Family Details</h2>
      <div className="form-grid">

        <div className="form-field">
          <label>Father's Name</label>
          <input type="text" name="fatherName" placeholder="Father's full name"
            value={data.fatherName || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Father's Occupation</label>
          <input type="text" name="fatherOcc" placeholder="Father's occupation"
            value={data.fatherOcc || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Mother's Name</label>
          <input type="text" name="motherName" placeholder="Mother's full name"
            value={data.motherName || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Mother's Occupation</label>
          <input type="text" name="motherOcc" placeholder="Mother's occupation"
            value={data.motherOcc || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Siblings</label>
          <input type="text" name="siblings" placeholder="e.g. 1 Brother, 1 Sister"
            value={data.siblings || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Native Place</label>
          <input type="text" name="nativePlace" placeholder="e.g. Pune, Maharashtra"
            value={data.nativePlace || ""} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label>Family Type</label>
          <select name="familyType" value={data.familyType || ""} onChange={handleChange}>
            <option value="">Select</option>
            <option>Nuclear</option>
            <option>Joint</option>
          </select>
        </div>

        <div className="form-field">
          <label>Family Status</label>
          <select name="familyStatus" value={data.familyStatus || ""} onChange={handleChange}>
            <option value="">Select</option>
            <option>Middle Class</option>
            <option>Upper Middle Class</option>
            <option>Rich</option>
            <option>Affluent</option>
          </select>
        </div>

      </div>
    </div>
  );
}