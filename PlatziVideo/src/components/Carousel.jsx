import React from "react";
import '../assets/styles/components/carousel.scss'; 
const Carousel = ({ children }) => (
  <React.Fragment>
    <section className="carousel">
      <div className="carousel__container">{children}</div>
    </section>
  </React.Fragment>
);

export default Carousel;
