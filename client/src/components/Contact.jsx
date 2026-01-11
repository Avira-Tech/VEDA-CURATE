import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);

  const projectTypes = [
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "Branding",
    "E-Commerce",
    "SaaS Product",
    "Other",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector("#contact");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.trim().length < 2) error = "Name must be at least 2 characters";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Please enter a valid email";
        break;
      case "projectType":
        if (!value) error = "Please select a project type";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        else if (value.trim().length < 10) error = "Message must be at least 10 characters";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validateField(key, formData[key]);
    });
    setErrors(newErrors);

    // Check if form is valid
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", projectType: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const FloatingInput = ({ name, label, type = "text", options = null }) => {
    const hasValue = formData[name] !== "";
    const isFocused = focusedField === name;
    const hasError = errors[name];

    return (
      <div
        style={{
          position: "relative",
          marginBottom: "25px",
        }}
      >
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={() => setFocusedField(name)}
          placeholder=" "
          style={{
            width: "100%",
            padding: "20px 20px 20px 20px",
            background: "#1a1a1a",
            border: `2px solid ${hasError ? "#ff4444" : isFocused ? "#ff9800" : "#333"}`,
            borderRadius: "12px",
            color: "white",
            fontSize: "1rem",
            outline: "none",
            transition: "all 0.3s ease",
            appearance: "none",
          }}
          className="floating-input"
        />
        {options ? (
          <select
            name={name}
            value={formData[name]}
            onChange={handleChange}
            onFocus={() => setFocusedField(name)}
            onBlur={handleBlur}
            style={{
              width: "100%",
              padding: "20px 20px 20px 20px",
              background: "#1a1a1a",
              border: `2px solid ${hasError ? "#ff4444" : isFocused ? "#ff9800" : "#333"}`,
              borderRadius: "12px",
              color: "white",
              fontSize: "1rem",
              outline: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <option value="" style={{ background: "#1a1a1a" }}>
              Select project type
            </option>
            {options.map((opt) => (
              <option key={opt} value={opt} style={{ background: "#1a1a1a" }}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          <textarea
            name={name}
            value={formData[name]}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={() => setFocusedField(name)}
            rows="4"
            style={{
              width: "100%",
              padding: "20px 20px 20px 20px",
              background: "#1a1a1a",
              border: `2px solid ${hasError ? "#ff4444" : isFocused ? "#ff9800" : "#333"}`,
              borderRadius: "12px",
              color: "white",
              fontSize: "1rem",
              outline: "none",
              resize: "vertical",
              fontFamily: "inherit",
              transition: "all 0.3s ease",
            }}
          />
        )}
        <label
          style={{
            position: "absolute",
            left: "20px",
            top: hasValue || isFocused ? "10px" : "50%",
            transform: hasValue || isFocused ? "translateY(-100%) scale(0.85)" : "translateY(-50%)",
            background: hasValue || isFocused ? "#1a1a1a" : "transparent",
            padding: hasValue || isFocused ? "0 8px" : "0",
            color: hasError ? "#ff4444" : isFocused ? "#ff9800" : "#888",
            fontSize: hasValue || isFocused ? "0.85rem" : "1rem",
            fontWeight: hasValue || isFocused ? "600" : "400",
            pointerEvents: "none",
            transition: "all 0.3s ease",
            zIndex: 10,
          }}
        >
          {label}
        </label>
        {/* Error Message */}
        {hasError && (
          <span
            style={{
              position: "absolute",
              bottom: "-22px",
              left: "5px",
              color: "#ff4444",
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span>⚠</span> {errors[name]}
          </span>
        )}
      </div>
    );
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        padding: "120px 10%",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Effects */}
      <div
        style={{
          position: "absolute",
          top: "-30%",
          right: "-20%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255, 152, 0, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-15%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255, 87, 34, 0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
        className="contact-container"
      >
        {/* Left: Contact Info */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-50px)",
            transition: "all 0.8s ease",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 20px",
              background: "rgba(255, 152, 0, 0.1)",
              border: "1px solid rgba(255, 152, 0, 0.3)",
              borderRadius: "30px",
              marginBottom: "25px",
            }}
          >
            <span
              style={{
                color: "#ff9800",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              Get In Touch
            </span>
          </div>

          <h2
            style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            <span style={{ color: "white" }}>Let's Build </span>
            <span
              style={{
                background: "linear-gradient(135deg, #ff9800, #ff5722)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Something Amazing
            </span>
          </h2>

          <p
            style={{
              color: "#b0b0b0",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}
          >
            Ready to start your next project? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>

          {/* Contact Info Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { icon: "📧", label: "Email", value: "hello@vedacurate.com" },
              { icon: "📱", label: "Phone", value: "+1 (555) 123-4567" },
              { icon: "📍", label: "Location", value: "San Francisco, CA" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "20px",
                  background: "rgba(255, 152, 0, 0.03)",
                  border: "1px solid rgba(255, 152, 0, 0.1)",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 152, 0, 0.06)";
                  e.currentTarget.style.borderColor = "rgba(255, 152, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 152, 0, 0.03)";
                  e.currentTarget.style.borderColor = "rgba(255, 152, 0, 0.1)";
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "linear-gradient(135deg, rgba(255, 152, 0, 0.2), rgba(255, 87, 34, 0.1))",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    style={{
                      color: "#888",
                      fontSize: "0.85rem",
                      marginBottom: "5px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1rem",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div
          style={{
            background: "#1a1a1a",
            border: "1px solid #333",
            borderRadius: "24px",
            padding: "50px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(50px)",
            transition: "all 0.8s ease 0.2s",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Success Animation */}
          {isSubmitted && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(255, 152, 0, 0.05))",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
                animation: "fadeIn 0.5s ease",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "linear-gradient(135deg, #22c55e, #16a34a)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                  marginBottom: "25px",
                  animation: "scaleIn 0.5s ease",
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  marginBottom: "10px",
                }}
              >
                Message Sent!
              </h3>
              <p
                style={{
                  color: "#b0b0b0",
                }}
              >
                We'll get back to you soon.
              </p>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "white",
                marginBottom: "30px",
              }}
            >
              Send us a Message
            </h3>

            <FloatingInput
              name="name"
              label="Your Name"
              type="text"
            />

            <FloatingInput
              name="email"
              label="Email Address"
              type="email"
            />

            <FloatingInput
              name="projectType"
              label="Project Type"
              options={projectTypes}
            />

            <FloatingInput
              name="message"
              label="Tell us about your project"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                padding: "18px",
                background: isSubmitting
                  ? "#333"
                  : "linear-gradient(135deg, #ff9800, #ff5722)",
                border: "none",
                borderRadius: "12px",
                color: isSubmitting ? "#888" : "white",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                marginTop: "10px",
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 10px 30px rgba(255, 152, 0, 0.4)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }
              }}
            >
              {isSubmitting ? (
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "2px solid rgba(255,255,255,0.3)",
                      borderTopColor: "white",
                      borderRadius: "50%",
                      animation: "spin 1s linear infinite",
                    }}
                  />
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        .contact-container {
          grid-template-columns: 1fr !important;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .floating-input:focus,
        .floating-input:focus-within {
          box-shadow: 0 0 30px rgba(255, 152, 0, 0.1) !important;
        }
        @media (min-width: 969px) {
          .contact-container {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

