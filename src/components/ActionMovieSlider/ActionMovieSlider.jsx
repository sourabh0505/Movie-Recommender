import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../UpcomingMovieSlider/slider.css";

function ActionMovieSlider() {
  const [actionMovieData, setActionMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=c891d1e6ccfd10d508f441af7c38c344&with_genres=28"
        );
        const data = await response.json();
        console.log(data);
        setActionMovieData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const baseImageUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="flex flex-col px-10">
      <h1 className="font-bold text-xl text-white">Action Movies</h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper flex flex-row flex-wrap justify-center my-2"
      >
        {actionMovieData?.results?.map((movie) => (
          <SwiperSlide key={movie.id} className="flex flex-col">
            <img
              src={`${baseImageUrl}${movie.poster_path}`}
              alt="movie-poster"
              className="transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:cursor-pointer hover:shadow-xl hover:shadow-white"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ActionMovieSlider;
