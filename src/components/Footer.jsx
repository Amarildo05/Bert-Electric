import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#14128f] via-[#413db6] to-[#14128f] text-[#f4f5fd] py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-28 text-xs sm:text-sm text-[#f4f5fd]">
        {/* Logo */}
        <div className="flex flex-col items-center text-center">
          <Link to="/" className="hover:scale-110 transition">
            <img
              src="/BertElectric-Logo.png"
              alt="Bert Electric Logo"
              className="w-18 h-18 sm:w-22 sm:h-22 rounded-full"
            />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center text-center sm:items-start justify-center gap-3">
          <a
            href="tel:0695660789"
            className="flex items-center gap-2 hover:scale-106 transition"
          >
            <i className="pi pi-phone text-lg" />
            069 566 0789
          </a>
          <a
            href="https://maps.app.goo.gl/oeKD1v5i2SVyYgUT8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:scale-106 transition"
          >
            <i className="pi pi-map-marker text-lg" />
            Lagja Apollonia, Rruga Jakov Mile, Fier 9301
          </a>
        </div>

        {/* Social Media */}
        <div className="flex flex-row sm:flex-col items-center text-center sm:items-start justify-center gap-3">
          <a
            href="https://instagram.com/bert_electric1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:scale-106 transition"
          >
            <i className="pi pi-instagram text-2xl" />
            bert_electric1
          </a>
          <a
            href="https://wa.me/355695660789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:scale-106 transition"
          >
            <i className="pi pi-whatsapp text-2xl" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <hr className="border-gray-600 mt-5 mb-4 w-full" />

      {/* Copyright */}
      <div className="text-center text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} Bert Electric. All rights reserved.
      </div>
    </footer>
  );
}