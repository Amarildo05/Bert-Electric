export default function Hero() {
  return (
    <div>
      {/* Hero Image */}
      <img className="w-full h-90 opacity-80" src="./hero.jpeg" />

      {/* Title & Description */}
      <section className=" bg-[#413db6] text-[#f4f5fd] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
            Bert Electric
          </h1>
          <p className="mt-6 text-md md:text-lg font-medium leading-relaxed text-[#e0e1fc]">
            Ekspertë në instalime elektrike, kamera monitorimi dhe sisteme
            sigurie. Ofrojmë vetëm cilësi të lartë me produkte ekskluzive nga{" "}
            <span className="font-semibold text-white">Dahua</span>,{" "}
            <span className="font-semibold text-white">Ezviz</span>, dhe{" "}
            <span className="font-semibold text-white">Hikvision</span>.
          </p>
        </div>
      </section>
    </div>
  );
}