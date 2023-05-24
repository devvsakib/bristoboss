import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const BannerSlider = () => {
  const images = [1, 2, 3, 4, 5, 6]

  return (
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={true}
        interval={3000}
        transitionTime={1000}
        stopOnHover={false}
        dynamicHeight={false}
        swipeable={true}
        emulateTouch={true}
        useKeyboardArrows={true}
        centerMode={false}
        centerSlidePercentage={80}
        swipeScrollTolerance={5}
        axis={"horizontal"}
        thumbWidth={100}
      >
        {
          images.map((image, index) => (
            <div key={index} className="select-none cursor-grab md:h-[600px]">
              <img src={`/assets/home/0${image}.jpg`} />
            </div>
          ))

        }
      </Carousel>
  )
}

export default BannerSlider