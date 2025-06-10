import { useParams, Link } from "react-router-dom";
import PhotoCarousel from "../components/PhotoCarousel";
import { servicesDetails } from "../data/servicesDetails/servicesDetailsData";

export default function ServicesDetails() {
  const { slug } = useParams();
  const serviceDetail = servicesDetails.find((s) => s.slug === slug);

  return (
    <>
      {/* Header */}
      <section className="relative py-18 text-center">
        <h1 className="text-5xl font-extrabold z-10 text-blue-800 drop-shadow-[0_1px_5px_rgba(0,0,0,0.25)] lg:-top-8">
          {serviceDetail.title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl z-10 text-gray-600 drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)] lg:-top-8">
          Shërbim i besueshëm dhe i personalizuar për çdo klient.
        </p>
      </section>

      {/* Carousel */}
      {serviceDetail.images && <PhotoCarousel images={serviceDetail.images} />}

      {/* Main Content */}
      <section className="px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Përshkrimi i Shërbimit
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {serviceDetail.description}
        </p>

        {/* Features */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Çfarë përfshin:
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {serviceDetail.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <i className="pi pi-check-circle text-blue-800 text-xl mt-1" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center my-10">
          <Link
            to="/kontakt"
            className="inline-block px-6 py-3 text-white transition duration-150 ease-in-out bg-blue-800 rounded-md hover:bg-blue-700 shadow hover:scale-106"
          >
            Na Kontaktoni për më shumë
          </Link>
        </div>
      </section>
    </>
  );
}