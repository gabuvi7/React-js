import React, {Component} from "react";
import Header from "../Components/Header";
import Search from "../components/Search";
import "../assets/styles/App.scss";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

const App = () => (
  <div className="App">
    <Header />
    <Search />
    <Categories title="Mi lista">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories title="Tendencias">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories title="Originales de la plataforma">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>
    <Footer />
  </div>
);

export default App;