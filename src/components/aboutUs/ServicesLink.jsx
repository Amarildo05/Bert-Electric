import { Link } from "react-router-dom";

export default function ServicesLink() {
  return (
    <section className="text-center">
      <Link
        to="/services"
        className="inline-block mt-8 text-blue-800 hover:text-blue-600 transition hover:scale-110 font-semibold"
      >
        Shihni të gjitha shërbimet tona këtu &rarr;
      </Link>
    </section>
  );
}