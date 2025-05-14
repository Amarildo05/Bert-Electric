export default function Hero() {
  return (
    <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
      {/* Text Section */}
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
            BERT <span className="text-blue-500">ELECTRIC</span>
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Ekspertë në instalime elektrike, kamera monitorimi dhe sisteme
            sigurie. Ofrojmë vetëm cilësi të lartë me produkte ekskluzive nga{" "}
            <span className="font-semibold text-gray-700">Dahua</span>,{" "}
            <span className="font-semibold text-gray-700">Ezviz</span>, dhe{" "}
            <span className="font-semibold text-gray-700">Hikvision</span>.
          </p>
          <div className="mt-5 md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="/services"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
              >
                Shiko më shumë...
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded md:p-8">
          <div className="rounded-lg bg-white text-black w-full">
            <img
              src="./hero.jpeg"
              alt="Bert Electric"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}