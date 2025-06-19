import { Link } from "react-router-dom";
import { brandCards } from "../../data/products/BrandCards";

export default function BrandCards() {
  return (
    <section className="py-10 sm:py-16 px-14 sm:px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {brandCards.map((brand, index) => (
          <Link
            key={index}
            to={brand.route}
            className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-gray-50 pop-fade-in"
          >
            <img
              src={brand.logo}
              alt={brand.alt}
              className="h-8 sm:h-10 mb-4 object-contain"
            />
            <div className="mt-4 flex items-center justify-center gap-2 text-blue-700 font-semibold text-base sm:text-lg hover:scale-108 transition">
              <span className="tracking-wide">{brand.name}</span>
              <i
                className="pi pi-arrow-circle-right"
                style={{ fontSize: "1.2rem" }}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}