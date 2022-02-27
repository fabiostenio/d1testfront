import React from 'react';
import {Link} from 'react-router-dom';
import { MovieContainer, Title, TextCarroseulNull} from './styles';
import Slider from "react-slick";



function Carousel({title, movies, icon, emptyMsg, slidesToShow}) {

  let w = window.screen.width;

  if(w<=450){
    slidesToShow = 3;
  }//end if 

    const settings = {
      dots: false,
      infinite: movies.length > slidesToShow,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 1
    };

  return (
    <div>
      <Title >{icon} {title}</Title> 
      <Slider {...settings}>
        {movies.length < 1 ? <TextCarroseulNull> <div> <h1 > {emptyMsg}  </h1> </div></TextCarroseulNull> : movies.map(movie => {
          const posterPathIsNull = movie.poster_path.split("/").at(-1) == 'null';
          if(!posterPathIsNull) {
            return (
              <div key = {movie.id} >
                <Link to = {`/movie/detail/${movie.id}`} > 
                  <MovieContainer src = {movie.poster_path} alt= {movie.title} />
                </Link>
              </div>
            )
          }
        })}
      </Slider>
    </div>
  );
}
 
export default Carousel;