export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 mb-16">
      {/* Faded background circle */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url(/images/blue-gradient-circle.png)", // update path
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          filter: "blur(8px)",
          zIndex: 0,
        }}
      />
      <h1 className="relative text-5xl font-extrabold z-10 drop-shadow-lg text-gray-800">
        Kush Jemi Ne
      </h1>
      <p className="relative mt-4 max-w-xl text-lg z-10 drop-shadow-md text-gray-500">
        Ekspertë në instalime elektrike, kamera monitorimi, sisteme sigurie dhe
        sisteme audio.
      </p>
    </section>
  );
}