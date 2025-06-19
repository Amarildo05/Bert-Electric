import { useNavigate } from "react-router-dom";

export default function ContactCTA() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/kontakt");
  };

  return (
    <section className="py-12 sm:py-16 px-8 bg-gray-100">
      <div
        onClick={handleCardClick}
        className="cursor-pointer max-w-4xl mx-auto text-center bg-white rounded-xl shadow-md p-8 transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-gray-50"
      >
        <h2 className="text-2xl font-bold text-gray-800">
          Keni nevojë për ndihmë apo informacion?
        </h2>
        <p className="text-gray-500 mt-2">
          Jemi gjithmonë të gatshëm t’ju ndihmojmë. Mund të na telefononi ose të
          na shkruani në WhatsApp.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
          {/* Phone - tel link */}
          <a
            href="tel:0695660789"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 text-blue-800 font-semibold text-base sm:text-lg hover:text-blue-600 transition hover:scale-110"
          >
            <i className="pi pi-phone" />
            069 566 0789
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/355695660789"
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 font-semibold text-base sm:text-lg hover:text-green-500 transition hover:scale-110"
          >
            <i className="pi pi-whatsapp" />
            Shkruaj në WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}