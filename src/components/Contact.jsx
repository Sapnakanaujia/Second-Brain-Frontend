import React, { useEffect, useState } from "react";
import bg from "../assets/bg.png";
import sider1 from "../assets/sider1.png";
import sider2 from "../assets/sider2.png";

const CONTACT_API = "https://vernanbackend.ezlab.in/api/contact-us/";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    let t;
    if (success) t = setTimeout(() => setSuccess(false), 3500);
    return () => clearTimeout(t);
  }, [success]);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^\d{7,15}$/.test(form.phone))
      e.phone = "Enter a valid phone (7-15 digits)";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    setServerError("");
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setLoading(true);
    try {
      const resp = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!resp.ok) {
        const text = await resp.text().catch(() => "");
        throw new Error(`Server responded ${resp.status} ${text}`);
      }

      await resp.json();
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      setServerError(
        "Something went wrong while submitting the form. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen contact-bg"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-6xl mx-auto px-0 py-10 lg:py-24 relative">
        <img
          src={sider2}
          alt="decor left"
          className="hidden sm:block pointer-events-none absolute left-0 bottom-0 w-56 lg:w-80 opacity-95 -translate-x-10"
        />

        <img
          src={sider1}
          alt="decor right"
          className="hidden sm:block pointer-events-none absolute right-0 top-4 w-44 lg:w-72 opacity-95 translate-x-12"
        />

        <div className="min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center h-full px-6">
            <p className="text-justify sm:text-base  text-black-700 max-w-xl">
              Whether you have an idea, a question, or simply want to explore
              how V can work together, V're just a message away.<br /> Let's catch up
              over coffee. <br />Great stories always begin with a good conversation.
            </p>
          </div>

          <div className="order-1 lg:order-2 p-50 mt-32 items-center">
            <h1 className="text-xl sm:text-xl lg:text-2xl text-center font-serif text-gray-800">
              Join the Story
            </h1>
            <h2 className="text-xl sm:text-xl font-serif text-center text-gray-800">
              Ready to bring your vision to life? Let's talk.
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name*"
                className={`w-full px-2 py-2 rounded-md text-sm sm:text-base border ${
                  errors.name ? "border-red-400" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-orange-200 transition`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "err-name" : undefined}
              />
              {errors.name && (
                <p id="err-name" className="text-sm text-red-500 mt-1">
                  {errors.name}
                </p>
              )}

              <label htmlFor="email" className="sr-only">
                Your email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Your email*"
                className={`w-full px-2 py-2 rounded-md text-sm sm:text-base border ${
                  errors.email ? "border-red-400" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-orange-200 transition`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "err-email" : undefined}
              />
              {errors.email && (
                <p id="err-email" className="text-sm text-red-500 mt-1">
                  {errors.email}
                </p>
              )}

              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                id="phone"
                inputMode="numeric"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Phone*"
                className={`w-full px-2 py-2 rounded-md text-sm sm:text-base border ${
                  errors.phone ? "border-red-400" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-orange-200 transition`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "err-phone" : undefined}
              />
              {errors.phone && (
                <p id="err-phone" className="text-sm text-red-500 mt-1">
                  {errors.phone}
                </p>
              )}

              <label htmlFor="message" className="sr-only">
                Your message
              </label>
              <textarea
                id="message"
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message*"
                className={`w-full px-2 py-2 rounded-md text-sm sm:text-base border ${
                  errors.message ? "border-red-400" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-orange-200 transition resize-none`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "err-message" : undefined}
              />
              {errors.message && (
                <p id="err-message" className="text-sm text-red-500 mt-1">
                  {errors.message}
                </p>
              )}

              <div className="flex items-center justify-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-orange-500 text-white font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setForm({ name: "", email: "", phone: "", message: "" });
                    setErrors({});
                    setServerError("");
                  }}
                  className="hidden sm:inline-block px-4 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
                >
                  Reset
                </button>
              </div>

              <div className="px-15 flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-4 text-sm text-orange-600 font-medium">
                <a
                  href="mailto:vernita@varnafilms.co.in"
                  className="hover:underline"
                >
                  vernita@varnafilms.co.in
                </a>
                <span className="hidden sm:inline">|</span>
                <a href="tel:+919873684567" className="hover:underline">
                  +91 98736 84567
                </a>
              </div>

              {serverError && (
                <p className="text-center text-sm text-red-600">
                  {serverError}
                </p>
              )}

              {success && (
                <div
                  role="status"
                  className="text-center text-sm text-green-700 font-medium"
                >
                  Form Submitted
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="sm:hidden fixed left-4 right-4 bottom-6 z-50">
        <div className="flex items-center gap-3">
          <a
            href="tel:+919873684567"
            className="flex-1 text-center py-3 rounded-full bg-white/95 border shadow text-sm font-medium"
          >
            Call Us
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('form button[type="submit"]');
              if (el) el.click();
            }}
            className="w-16 h-12 rounded-full flex items-center justify-center bg-orange-500 text-white shadow"
          >
            Send
          </a>
        </div>
      </div>
    </div>
  );
}
