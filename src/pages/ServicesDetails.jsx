import { useParams, Link } from "react-router-dom";

const services = [
  {
    title: "Instalime Elektrike",
    slug: "instalime-elektrike",
    description:
      "Ne ofrojmë projektim dhe zbatim të kabinave elektrike, instalimeve shtëpiake dhe industriale. Shërbimi kryhet nga profesionistë të licencuar me vite eksperiencë.",
    features: [
      "Zbatim sipas standardeve të BE-së",
      "Materiale të çertifikuara",
      "Mbështetje teknike pas instalimit",
      "Kosto transparente dhe pa surpriza",
    ],
    image: "/ServicesPage/electrical-installation.jpg",
  },
  {
    title: "Sisteme Monitorimi/Kamera",
    slug: "kamera",
    description:
      "Ne ofrojmë instalime profesionale të sistemeve të kamerave për të gjitha llojet e hapësirave – nga shtëpitë dhe apartamentet, tek dyqanet, zyrat dhe ambientet industriale.",
    features: [
      "Kamera të brendshme dhe të jashtme me cilësi të lartë",
      "Akses në distancë përmes aplikacioneve mobile",
      "Regjistrues DVR/NVR dhe ruajtje në cloud",
      "Integrim me sisteme alarmi dhe audio",
    ],
    image: "/ServicesPage/Security-Cameras.png",
  },
  {
    title: "Sisteme Alarmi",
    slug: "alarmi",
    description:
      "Sistemet tona të alarmit ofrojnë mbrojtje të avancuar kundër vjedhjeve dhe zjarreve për ambiente banimi dhe biznese.",
    features: [
      "Detektorë lëvizjeje dhe tymi",
      "Njoftim në kohë reale përmes aplikacionit",
      "Pajisje me teknologji të fundit",
      "Instalim profesional dhe garanci",
    ],
    image: "/ServicesPage/alarm.jpg",
  },
  {
    title: "Sisteme Audio",
    slug: "audio",
    description:
      "Instalojmë dhe konfigurojmë sisteme audio për ambiente të ndryshme si shkolla, zyra, qendra tregtare, apo hapësira të mëdha publike.",
    features: [
      "Sisteme audio me shumë zona",
      "Pajisje për amplifikim dhe kontroll të volumit",
      "Altoparlantë për ambiente të jashtme dhe të brendshme",
      "Zgjidhje të personalizuara për nevoja të veçanta",
    ],
    image: "/ServicesPage/Audio-Systems.jpg",
  },
];

export default function ServicesDetails() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  return (
    <>
      {/* Header */}
      <section className="relative py-20 text-center">
        <h1 className="text-5xl font-extrabold z-10 text-blue-800 drop-shadow-[0_1px_5px_rgba(0,0,0,0.25)] lg:-top-8">
          {service.title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl z-10 text-gray-600 drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)] lg:-top-8">
          Shërbim i besueshëm dhe i personalizuar për çdo klient.
        </p>
      </section>

      {/* Main Content */}
      <section className="px-6 max-w-5xl mx-auto">
        <img
          src={service.image}
          alt={service.title}
          className="rounded-x my-14 shadow-md w-full max-h-[400px] object-cover"
        />

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Përshkrimi i Shërbimit
        </h2>
        <p className="text-gray-700 leading-relaxed">{service.description}</p>

        {/* Features */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Çfarë përfshin:
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.features.map((feature, index) => (
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
            className="inline-block px-6 py-3 bg-blue-800 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Na Kontaktoni për më shumë
          </Link>
        </div>
      </section>
    </>
  );
}