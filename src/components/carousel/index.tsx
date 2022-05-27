import React from "react";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    // tablet: {
    //   breakpoint: { max: 1024, min: 464 },
    //   items: 1,
    //   slidesToSlide: 1, // optional, default to 1.
    // },
    // mobile: {
    //   breakpoint: { max: 464, min: 0 },
    //   items: 1,
    //   slidesToSlide: 1, // optional, default to 1.
    // },
  };
  return (
    <CarouselMulti
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div>
        <img
          src="https://images.pexels.com/photos/4056475/pexels-photo-4056475.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=250&w=360"
          alt=""
          width={"100%"}
          height={800}
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/10495920/pexels-photo-10495920.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=250&w=360"
          alt=""
          width={"100%"}
          height={800}
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/8145352/pexels-photo-8145352.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=250&w=360"
          alt=""
          width={"100%"}
          height={800}
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/7790592/pexels-photo-7790592.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=65&w=90"
          alt=""
          width={"100%"}
          height={800}
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/7693126/pexels-photo-7693126.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=65&w=90"
          alt=""
          width={"100%"}
          height={800}
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/8872548/pexels-photo-8872548.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=65&w=90"
          alt=""
          width={"100%"}
          height={800}
        />
      </div>
    </CarouselMulti>
  );
};

export default Carousel;
