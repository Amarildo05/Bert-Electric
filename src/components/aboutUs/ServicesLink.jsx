import { Link } from "react-router-dom";

export default function ServicesLink() {
  return (
    <section className="text-center text-base md:text-lg mb-14">
      <Link
        to="/sherbimet"
        className="inline-block mt-8 text-blue-800 hover:text-blue-600 transition hover:scale-110 font-semibold"
      >
        Shikoni të gjitha shërbimet tona këtu &rarr;
      </Link>
    </section>
  );
}