import { Link } from "react-router-dom";

export default function BrandCards() {
  return (
    <section className="py-16 px-14 sm:px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card – Dahua */}
        <Link
          to="/produktet/dahua"
          className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-gray-50"
        >
          <img
            src="/Products/Products-logo/Dahua-logo.png"
            alt="Dahua Logo"
            className="h-12 mb-4 object-contain"
          />
          <div className="mt-4 flex items-center justify-center gap-2 text-blue-700 font-semibold text-lg hover:scale-108 transition">
            <span className="tracking-wide">Dahua</span>
            <i
              className="pi pi-arrow-circle-right"
              style={{ fontSize: "1.2rem" }}
            />
          </div>
        </Link>

        {/* Card – Ezviz */}
        <Link
          to="/produktet/ezviz"
          className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-gray-50"
        >
          <img
            src="/Products/Products-logo/Ezviz-Logo.png"
            alt="Ezviz Logo"
            className="h-12 mb-4 object-contain"
          />
          <div className="mt-4 flex items-center justify-center gap-2 text-blue-700 font-semibold text-lg hover:scale-108 transition">
            <span className="tracking-wide">Ezviz</span>
            <i
              className="pi pi-arrow-circle-right"
              style={{ fontSize: "1.2rem" }}
            />
          </div>
        </Link>

        {/* Card – Hikvision */}
        <Link
          to="/produktet/hikvision"
          className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-gray-50"
        >
          <img
            src="/Products/Products-logo/Hikvision-Logo.png"
            alt="Hikvision Logo"
            className="h-10 mb-4 object-contain"
          />
          <div className="mt-4 flex items-center justify-center gap-2 text-blue-700 font-semibold text-lg hover:scale-108  transition">
            <span className="tracking-wide">Hikvision</span>
            <i
              className="pi pi-arrow-circle-right"
              style={{ fontSize: "1.2rem" }}
            />
          </div>
        </Link>
      </div>
    </section>
  );
}