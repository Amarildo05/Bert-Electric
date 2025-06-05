import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Store validation error messages
  const [error, setError] = useState("");

  // Store success messages
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Validate all fields before submission
  const validateForm = () => {
    const { name, email, phone, message } = formData;

    const nameParts = name.trim().split(" ");
    if (nameParts.length < 2) {
      setError("Ju lutem shkruani emrin dhe mbiemrin.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Ju lutem vendosni një email të vlefshëm.");
      return false;
    }

    const phonePattern = /^[0-9]{6,15}$/;
    if (!phonePattern.test(phone)) {
      setError("Vendosni numrin e telefonit në formatin e saktë.");
      return false;
    }

    if (message.trim().length === 0) {
      setError("Ju lutem shkruani mesazhin tuaj.");
      return false;
    }

    // If all validations pass, clear errors and return true
    setError("");
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields before sending
    if (!validateForm()) return;

    try {
      // Send form data to third-party service API
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Dicka shkoi gabim. Provoni përsëri më vonë.");
      }

      setSuccess(`Faleminderit, ${formData.name}! Mesazhi juaj u pranua.`);
      setFormData({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => setSuccess(""), 5000);
    } catch (err) {
      setError(err.message || "Dicka shkoi gabim.");
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-5 sm:p-6 rounded-lg shadow-md"
        noValidate
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">
          Na Kontaktoni
        </h2>

        {error && (
          <div className="text-center mb-4 text-red-600 font-semibold">
            {error}
          </div>
        )}

        {success && (
          <div className="text-center mb-4 text-green-600 font-semibold">
            {success}
          </div>
        )}

        {/* Name */}
        <div className="mb-3">
          <label
            htmlFor="name"
            className="block font-medium text-gray-700 mb-1"
          >
            Emri/Mbiemri <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="Shkruani emrin tuaj"
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block font-medium text-gray-700 mb-1"
          >
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="Shkruani email-in tuaj"
          />
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label
            htmlFor="phone"
            className="block font-medium text-gray-700 mb-1"
          >
            Numri i telefonit <span className="text-red-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="Numri i telefonit"
          />
        </div>

        {/* Message */}
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block font-medium text-gray-700 mb-1"
          >
            Mesazhi juaj <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700 resize-none"
            placeholder="Shkruani mesazhin tuaj"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 text-white bg-blue-800 hover:bg-blue-700 rounded-md shadow transition hover:scale-[1.02] text-sm font-semibold mx-auto block"
        >
          Dërgo Mesazhin
        </button>
      </form>
    </section>
  );
}