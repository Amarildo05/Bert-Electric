import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

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
            className="w-18 h-18 rounded-full"
          />
        </div>

        {/* Nav Items */}
        <ul className="flex gap-3 uppercase">
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
    </nav>
  );
}