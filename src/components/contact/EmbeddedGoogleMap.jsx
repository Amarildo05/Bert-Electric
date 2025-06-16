export default function EmbeddedGoogleMap() {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg h-96 fade-up">
      <iframe
        title="Bert Electric Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6047.102514637758!2d19.5572098!3d40.7278941!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134553366aff1031%3A0x269364c03c67b264!2sBert%20Electric!5e0!3m2!1sen!2s!4v1749079341813!5m2!1sen!2s"
        width="100%"
        height="100%"
        className="border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}