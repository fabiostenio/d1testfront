import React, { useEffect, useState } from 'react';

import Carousel from '../../components/Carousel';
import Layout from '../../components/Layout';
import api from '../../services/api';

function MovieLists(ret) {
  
  var list = ret.match.params.list;
  //Conteúdo da página de populares
  const [trendingMovies, setTrendingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [likeMovies, SetLikesMovies] = useState([])

  useEffect(() => {
    //Filtrando o uso da API
    if(list=='tendencias'){
      api.get(`movies/getTrendings`).then((movies) => {
        setTrendingMovies(movies.data);
      })

    }else if(list=='populares'){
      api.get(`movies/getTopRatedMovies`).then((movies) => {
        setTopRatedMovies(movies.data);
      })
  
    }else if(list=='favoritos'){
      api.get(`movies/likeMovies`).then((movies) => {
        SetLikesMovies(movies.data); 
      })
    
    }//end if

  }, [])//end useEfects

  //Retornando apenas as veriáveis necessárias
  if(list=='tendencias'){
    
    return (
      <Layout>
        <Carousel slidesToShow = "4"  title = {"Tendências"} icon={<span class="icon material-icons">stars</span>}  movies = {trendingMovies} backgroundColor={"#30475E"}/>
      </Layout>
    );

  }else if(list=='populares'){
    return (
      <Layout>
        <Carousel slidesToShow = "4" title = {"Populares"} icon={<span class="icon material-icons">touch_app</span>} movies = {topRatedMovies} backgroundColor={"#A1B57D"}/>
      </Layout>
    );

  }else if(list=='favoritos'){
    return (
      <Layout>
        <Carousel slidesToShow = "4" title = {"Likes"} icon={<span class="icon material-icons">thumb_up_alt</span>} movies = {likeMovies} emptyMsg ={"Nenhum filme favoritado"} backgroundColor={"#B33030"}/>
      </Layout>
    );

  }//end if


  return (    
    <>
      ERRO 404: Página não encontrada
    </>
    );
    


}//end fn


  
export default MovieLists;