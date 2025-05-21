import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Hyrje", path: "/" },
    { label: "Rreth Nesh", path: "/rreth-nesh" },
    { label: "Shërbimet", path: "/sherbimet" },
    { label: "Produktet", path: "/produktet" },
    { label: "Na Kontakto", path: "/kontakt" },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#14128f] via-[#413db6] to-[#14128f] text-[#f4f5fd] px-6 py-2 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer transition-transform duration-200 hover:scale-110"
          onClick={() => navigate("/")}
        >
          <img
            src="/BertElectric-Logo.png"
            alt="Bert Electric Logo"
            className="w-17 h-16 rounded-full"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-3">
          {navItems.map((item) => (
            <li
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 relative ${
                location.pathname === item.path
                  ? "bg-[#d1d5db] text-[#14128f] hover:scale-110 hover:shadow-xl"
                  : "hover:bg-[#d1d5db] hover:text-[#14128f] hover:scale-110 hover:shadow-xl"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-2 mt-2  p-4">
          {navItems.map((item) => (
            <li
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setMenuOpen(false); // Close menu after click
              }}
              className={`cursor-pointer w-2/3 px-4 py-2 text-center rounded-lg transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-[#d1d5db] text-[#14128f]"
                  : "hover:bg-[#d1d5db] hover:text-[#14128f]"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}