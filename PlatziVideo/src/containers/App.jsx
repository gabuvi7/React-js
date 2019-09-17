import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Search from "../components/Search";
import "../assets/styles/App.scss";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";
import { useInitialVideos } from "../hooks/useInitialVideos";

const API = "http://localhost:3000/initalState";

export const App = () => {
  const videos = useInitialVideos(API);

  return (
    <div className="App">
      <Header />
      <Search />
      {videos &&
        Object.keys(videos).map((categorie) => {
          if (videos[categorie].length) {
            return (
              <Categories title={categorie} key={categorie}>
                <Carousel>
                  {videos[categorie].map((video) => {
                    return (
                      <CarouselItem
                        cover={video.cover}
                        alt={video.title}
                        key={video.id}
                        year={video.year}
                        title={video.title}
                        content={video.contentRating}
                        duration={video.duration}
                      />
                    );
                  })}
                </Carousel>
              </Categories>
            );
          }
          return null;
        })}
      <Footer />
    </div>
  );
};

export default App;
