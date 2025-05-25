import { Link } from "react-router-dom";

const products = [
  {
    brand: "Dahua",
    subtitle: "Zgjidhjet më të kërkuara për siguri profesionale",
    image: "/Products/Banners/Dahua.jpg",
    logo: "/Products/Products-logo/Dahua-logo.png",
  },
  {
    brand: "Ezviz",
    subtitle: "Produkte të avancuara për shtëpinë tuaj Smart",
    image: "/Products/Banners/Ezviz.jpg",
    logo: "/Products/Products-logo/Ezviz-Logo.png",
  },
  {
    brand: "Hikvision",
    subtitle: "Lider ne teknologji për monitorim dhe mbrojtje",
    image: "/Products/Banners/Hikvision.jpg",
    logo: "/Products/Products-logo/Hikvision-Logo.png",
  },
];

export default function ProductHighlights() {
  return (
    <section className="py-16 px-8 mb-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Produktet Kryesore</h2>
        <p className="text-gray-500 mt-2">
          Zgjedhje të besuara nga markat më të njohura në teknologji
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-6 sm:mx-auto">
        {products.map((item, index) => (
          <Link
            to="/produktet"
            key={index}
            className="block bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-50"
          >
            <div className="flex items-center justify-between px-16 sm:px-4 md:px-7 p-3">
              <img
                src={item.logo}
                alt={`${item.brand} Logo`}
                className="h-6 w-auto"
              />
              <img
                src="/Products/Exclusive-logo.png"
                alt="Ekskluzive"
                className="h-10 w-auto"
              />
            </div>
            <img
              src={item.image}
              alt={`${item.brand} Produkte`}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.brand}
              </h3>
              <p className="text-sm text-gray-500 mt-1 mb-4">{item.subtitle}</p>
              <span className="inline-block px-4 py-2 text-sm text-white bg-blue-800 rounded hover:bg-blue-700 transition hover:scale-106">
                Shiko më shumë
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}