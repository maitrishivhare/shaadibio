import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleRegister = () => {
    setError("");
    if (!form.fullName || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("shaadi_user", JSON.stringify({
        fullName: form.fullName,
        email: form.email,
      }));
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <div className="auth-page">

      {/* Left Panel */}
      <div className="auth-left">
        <div className="auth-left__content">
          <div className="auth-brand" onClick={() => navigate("/")}>
            ShaadiBio
          </div>
          <h2 className="auth-left__title">
            Your Perfect<br />Biodata Awaits
          </h2>
          <p className="auth-left__sub">
            Register for free and unlock the full power of
            ShaadiBio — save, edit and share your biodata anytime.
          </p>

          {/* Steps */}
          <div className="auth-steps">
            <div className="auth-step">
              <div className="auth-step__num">01</div>
              <div className="auth-step__info">
                <h4>Create Account</h4>
                <p>Register free in under a minute</p>
              </div>
            </div>
            <div className="auth-step__connector" />
            <div className="auth-step">
              <div className="auth-step__num">02</div>
              <div className="auth-step__info">
                <h4>Fill Your Details</h4>
                <p>Personal, family & horoscope info</p>
              </div>
            </div>
            <div className="auth-step__connector" />
            <div className="auth-step">
              <div className="auth-step__num">03</div>
              <div className="auth-step__info">
                <h4>Download PDF</h4>
                <p>No watermark, high quality PDF</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Right Panel */}
      <div className="auth-right">
        <div className="auth-form-box">

          <div className="auth-form-header">
            <h1>Create Account</h1>
            <p>Join ShaadiBio for free — no credit card needed</p>
          </div>

          {/* Guest Option */}
          <div className="auth-guest-box">
            <span>Just browsing?</span>
            <button onClick={() => navigate("/dashboard")}>
              Continue as Guest
            </button>
          </div>

          <div className="auth-divider">
            <span>or register with email</span>
          </div>

          {error && (
            <div className="auth-error">{error}</div>
          )}

          {/* Two column row */}
          <div className="auth-row">
            <div className="auth-field">
              <label>Full Name <span className="auth-required">*</span></label>
              <input
                type="text"
                name="fullName"
                placeholder="Arbin Modi"
                value={form.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="auth-field">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="auth-field">
            <label>Email Address <span className="auth-required">*</span></label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="auth-row">
            <div className="auth-field">
              <label>Password <span className="auth-required">*</span></label>
              <input
                type="password"
                name="password"
                placeholder="Min. 6 characters"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="auth-field">
              <label>Confirm Password <span className="auth-required">*</span></label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Repeat password"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password strength */}
          {form.password.length > 0 && (
            <div className="auth-strength">
              <div className="auth-strength__bars">
                <div className={"auth-strength__bar" + (form.password.length >= 1 ? " active weak" : "")} />
                <div className={"auth-strength__bar" + (form.password.length >= 4 ? " active medium" : "")} />
                <div className={"auth-strength__bar" + (form.password.length >= 8 ? " active strong" : "")} />
              </div>
              <span className="auth-strength__label">
                {form.password.length < 4 ? "Weak" : form.password.length < 8 ? "Medium" : "Strong"}
              </span>
            </div>
          )}

          <div className="auth-terms">
            By registering, you agree to our{" "}
            <span>Terms of Service</span> and <span>Privacy Policy</span>.
          </div>

          <button
            className={"auth-submit" + (loading ? " auth-submit--loading" : "")}
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create My Account"}
          </button>

          <p className="auth-switch">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login here</span>
          </p>

        </div>
      </div>

    </div>
  );
}