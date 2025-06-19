export default function ContactInfo() {
  return (
    <div className="text-gray-700 slide-fade-in">
      <h2 className="text-center lg:text-start text-3xl font-bold text-blue-800 mb-8">
        Informacione Kontakti
      </h2>

      <div className="grid grid-cols-2 gap-x-2 gap-y-8 text-sm sm:text-base">
        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold flex items-center gap-3 text-lg">
            <i className="pi pi-phone text-blue-800 text-xl" />
            Numër telefoni
          </h3>
          <a
            href="tel:0695660789"
            className="ps-4 text-blue-800 transition hover:scale-110"
          >
            069 566 0789
          </a>
        </div>

        {/* Adress */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold flex items-center gap-3 text-lg">
            <i className="pi pi-map-marker text-blue-800 text-xl" />
            Adresa
          </h3>
          <a
            href="https://maps.app.goo.gl/oeKD1v5i2SVyYgUT8"
            target="_blank"
            rel="noopener noreferrer"
            className="ps-2 transition hover:scale-110"
          >
            Lagja Apollonia, Rruga Jakov Mile, Fier 9301, Shqipëri
          </a>
        </div>

        {/* Instagram */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold flex items-center gap-3 text-lg">
            <i className="pi pi-instagram text-blue-800 text-xl" />
            Instagram
          </h3>
          <a
            href="https://instagram.com/bert_electric1"
            target="_blank"
            rel="noopener noreferrer"
            className="ps-2 transition hover:scale-110"
          >
            @bert_electric1
          </a>
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold flex items-center gap-3 text-lg">
            <i className="pi pi-whatsapp text-blue-800 text-xl" />
            WhatsApp
          </h3>
          <a
            href="https://wa.me/355695660789"
            target="_blank"
            rel="noopener noreferrer"
            className="ps-2 transition hover:scale-110"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}