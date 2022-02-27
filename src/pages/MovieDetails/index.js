import React,{useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';
import api from '../../services/api';

function MovieDetails() {
  const [fav, setFav] = useState(false);
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState('');
  const [movieId, setMovieId] = useState(0);
  const [totalStars, setTotalStars] = useState(0)


  const handleSetLikes = (id) => {
    api.get(`movies/likeMoviesId`).then((likeMovies) => {
      const isLikes = likeMovies.data.find(favorite => favorite.movie == id);
      isLikes ? setFav(true) : setFav(false)
    });
  }
  const handleSendLikes = async (id) => {
    //Não marcado
    if(!fav) {
      await api.post(`movies/likeMovies`, {
        id
      });
    } else {
      await api.delete(`movies/likeMovies/${id}`);
    }//end if

    
    handleSetLikes(id)
  }
  useEffect(() => {
    const urlSplit = window.location.href.split("/");
    const id = urlSplit[urlSplit.length-1];
    //alert(id);
    setMovieId(parseInt(id));
    let genresArray = [];
    api.get(`movies/getDetails/${id}`).then(movie => {     
      const totalVote = Math.floor(movie.data.vote_average / 2)
      setTotalStars(totalVote);
      movie.data.genres.forEach((genre) => {
        genresArray.push(genre.name)
      })
      const genres = genresArray.join(', ')
      setGenres(genres);
      setMovie(movie.data);
    })
    handleSetLikes(id);
  }, [])

  return (
    <Layout>
      
      <div class="Details">

        <div class="DetailsInLineBlock Container">
          <img class="Poster" src={movie.poster_path} /> 
        </div>

        <div class="DetailsInLineBlock Information">
          
          <h1 class="Title">{movie.title}</h1>
          <div class="Gender">
          <span> {genres} </span>
          </div>
          <div class="LikeIcon">
            {fav ? <span class="icon material-icons" onClick = {() => {
              handleSendLikes(movieId)
            }} >thumb_up_alt</span> : <span class="icon material-icons" onClick = {() => {
              handleSendLikes(movieId)
            }}>thumb_up_off_alt</span> }  
          
          </div>

          <div class="StarIcon">

          { [...Array(5)].map((_, index) => {
            if(totalStars > index) {
              return <span key={index}> <AiFillStar /> </span> ;
            } else {
              return <span key={index}> <AiOutlineStar /></span>
            }

          })}

          </div>
        
          <div class="Text">
              Sinopse: {movie.overview}
          </div>

        </div>

      </div>
        
    </Layout>
  );
}

export default MovieDetails;