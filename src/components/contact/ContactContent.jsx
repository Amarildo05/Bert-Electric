import ContactInfo from "./ContactInfo";
import EmbeddedGoogleMap from "./EmbeddedGoogleMap";

export default function ContactContent() {
  return (
    <section className="bg-gray-100">
      <div className="items-center max-w-7xl mx-auto px-6 sm:px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactInfo />
        <EmbeddedGoogleMap />
      </div>
    </section>
  );
}