import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleLogin = () => {
    setError("");
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("shaadi_user", JSON.stringify({ email: form.email }));
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
            Create Beautiful<br />Marriage Biodata
          </h2>
          <p className="auth-left__sub">
            Join thousands of families who trust ShaadiBio
            for their marriage biodata needs.
          </p>
          <div className="auth-left__features">
            <div className="auth-left__feature">
              <div className="auth-feature-icon">01</div>
              <span>3 Professional Templates</span>
            </div>
            <div className="auth-left__feature">
              <div className="auth-feature-icon">02</div>
              <span>Instant PDF Download</span>
            </div>
            <div className="auth-left__feature">
              <div className="auth-feature-icon">03</div>
              <span>Save & Edit Anytime</span>
            </div>
            <div className="auth-left__feature">
              <div className="auth-feature-icon">04</div>
              <span>No Watermark for Registered Users</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="auth-right">
        <div className="auth-form-box">

          <div className="auth-form-header">
            <h1>Welcome Back</h1>
            <p>Login to access your saved biodata</p>
          </div>

          {/* Guest Option */}
          <div className="auth-guest-box">
            <span>Just browsing?</span>
            <button onClick={() => navigate("/dashboard")}>
              Continue as Guest
            </button>
          </div>

          <div className="auth-divider">
            <span>or login with email</span>
          </div>

          {error && (
            <div className="auth-error">{error}</div>
          )}

          <div className="auth-field">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="auth-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button
            className={"auth-submit" + (loading ? " auth-submit--loading" : "")}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login to ShaadiBio"}
          </button>

          <p className="auth-switch">
            Don't have an account?{" "}
            <span onClick={() => navigate("/register")}>Register Free</span>
          </p>

        </div>
      </div>

    </div>
  );
}