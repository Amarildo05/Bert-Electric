export default function AboutUsHero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-60 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 z-0"
        src="/test.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay content */}
      <h1 className="relative text-5xl font-extrabold z-10 drop-shadow-lg text-gray-800">
        Kush Jemi Ne
      </h1>
      <p className="relative mt-4 max-w-xl text-lg z-10 drop-shadow text-gray-600">
        Ekspertë në instalime elektrike, kamera monitorimi, sisteme sigurie dhe
        sisteme audio.
      </p>
    </section>
  );
}