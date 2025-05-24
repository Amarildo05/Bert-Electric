import { Carousel } from "primereact/carousel";

const carouselImages = [
  "/photos/store1.jpg",
  "/photos/tools.jpg",
  "/photos/vehicle.jpg",
  "/photos/onsite1.jpg",
  // add your images here
];

export default function PhotoCarousel() {
  const carouselItemTemplate = (image) => (
    <img
      src={image}
      alt="Store or work photo"
      className="w-full h-64 object-cover rounded-md shadow-md"
      loading="lazy"
    />
  );

  return (
    <section className="max-w-6xl mx-auto mb-20">
      <Carousel
        value={carouselImages}
        itemTemplate={carouselItemTemplate}
        numVisible={3}
        numScroll={1}
        responsiveOptions={[
          {
            breakpoint: "1024px",
            numVisible: 2,
            numScroll: 1,
          },
          {
            breakpoint: "600px",
            numVisible: 1,
            numScroll: 1,
          },
        ]}
        className="custom-carousel"
        circular
        autoplayInterval={4000}
        showIndicators={false}
        showNavigators={true}
      />
    </section>
  );
}