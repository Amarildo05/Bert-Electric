import { useParams } from "react-router-dom";
import { dahuaProducts } from "../data/productsDetails/DahuaProducts";
import { hikvisionProducts } from "../data/productsDetails/HikvisionProducts";
import { ezvizProducts } from "../data/productsDetails/EzvizProducts";
import { Image } from "primereact/image";

export default function ProductsDetails() {
  const { brand } = useParams();

  const productsMap = {
    dahua: dahuaProducts,
    hikvision: hikvisionProducts,
    ezviz: ezvizProducts,
  };

  const products = productsMap[brand] || [];

  return (
    <section className="py-10 sm:py-16 px-6 sm:px-4 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12 slide-fade-in">
          Produktet {brand.charAt(0).toUpperCase() + brand.slice(1)}
        </h2>

        <div className="space-y-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col sm:flex-row items-center gap-4 px-4 py-3 pop-fade-in"
            >
              <Image
                src={product.image}
                alt={product.name}
                preview
                imageClassName="w-full h-32 sm:w-44 md:w-64 object-contain rounded"
              />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Kodi: {product.code}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 mt-1">
                  {product.name}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mt-2">
                  {product.series}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}