import { Link } from "react-router-dom";

const products = [
  {
    brand: "Dahua",
    subtitle: "Zgjidhjet më të kërkuara për siguri profesionale",
    image: "/Products/Banners/Dahua.jpg",
    logo: "/Products-logo/Dahua-logo.svg",
  },
  {
    brand: "Ezviz",
    subtitle: "Produkte të avancuara për shtëpinë tuaj",
    image: "/Products/Banners/Ezviz.jpg",
    logo: "/Products-logo/Ezviz-logo.svg",
  },
  {
    brand: "Hikvision",
    subtitle: "Teknologji lider për monitorim dhe mbrojtje",
    image: "/Products/Banners/Hikvision.jpg",
    logo: "/Products-logo/Hikvision-logo.svg",
  },
];

export default function ProductHighlights() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Produktet Kryesore</h2>
        <p className="text-gray-600 mt-2">
          Nga markat më të njohura në teknologji
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <img
                src={item.logo}
                alt={`${item.brand} Logo`}
                className="h-6 md:h-8 w-auto"
              />
              <span className="text-sm text-blue-800 font-medium uppercase">
                #Ekskluzive
              </span>
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
              <p className="text-sm text-gray-600 mt-1 mb-4">{item.subtitle}</p>
              <Link
                to="/produktet"
                className="inline-block px-4 py-2 text-sm text-white bg-blue-800 rounded hover:bg-blue-700 transition"
              >
                Shiko më shumë
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}