export default function AboutUsHero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-28 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: "url(/test.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <h1 className="relative text-5xl font-extrabold z-10 drop-shadow-lg text-gray-800">
        Kush Jemi Ne
      </h1>
      <p className="relative mt-4 max-w-xl text-lg z-10 drop-shadow text-gray-500">
        Ekspertë në instalime elektrike, kamera monitorimi, sisteme sigurie dhe
        sisteme audio.
      </p>
    </section>
  );
}