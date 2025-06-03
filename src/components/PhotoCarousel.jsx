import { Carousel } from "primereact/carousel";

export default function PhotoCarousel({ images }) {
  const carouselItemTemplate = (image) => (
    <img
      src={image}
      alt="Carousel photo"
      className="w-full h-full object-cover p-3.5"
      loading="lazy"
    />
  );

  return (
    <section className="max-w-6xl mx-auto mb-12">
      <Carousel
        value={images}
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
            breakpoint: "768px",
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