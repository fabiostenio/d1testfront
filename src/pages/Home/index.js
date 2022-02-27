import React, { useEffect, useState } from 'react';

import Carousel from '../../components/Carousel';
import Layout from '../../components/Layout';
import api from '../../services/api';
import { BsSearch } from 'react-icons/bs';

import Input from '../../components/Input';



function Home() {

  const [trendingMovies, setTrendingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [likeMovies, SetLikesMovies] = useState([])
  const [searchMovies, setSearchMovies] = useState([]);
  const [search, setSearch] = useState('')
  useEffect(() => {
    api.get(`movies/getTrendings`).then((movies) => {
      setTrendingMovies(movies.data);
    })
    api.get(`movies/getTopRatedMovies`).then((movies) => {
      setTopRatedMovies(movies.data);
    })
    api.get(`movies/likeMovies`).then((movies) => {
      SetLikesMovies(movies.data);
    })
  }, [])
  useEffect(() => {
    if (search) {
      api.get(`movies/findMovie?search=${search}`).then(movie => {

        setSearchMovies(movie.data)
      })
    } else {
      setSearchMovies([])
    }
  }, [search])

  return (
    <Layout>
      <div class="ContainerHome">
        <Input placeholder='Pesquisar...' onChange={(event) => {
          const search = event.target.value.split(" ").join(" + ");
          setSearch(search)
        }} />
      </div>

      <div class="divTrailer">
        <iframe width="100%" height="415" src="https://www.youtube-nocookie.com/embed/rZmdsupzNKY?controls=0&autoplay=1&loop=1&mute=1" title="Homem Aranha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      </div>

      {search && <Carousel slidesToShow="4" title={"Pesquisa"} icon={<BsSearch />} movies={searchMovies} backgroundColor={"#AA14F0"} />}
      <Carousel slidesToShow="4" title={"Tendências"} icon={<span class="icon material-icons">stars</span>} movies={trendingMovies} backgroundColor={"#30475E"} />
      <Carousel slidesToShow="4" title={"Mais votados"} icon={<span class="icon material-icons">touch_app</span>} movies={topRatedMovies} backgroundColor={"#A1B57D"} />
      <Carousel slidesToShow="4" title={"Likes"} icon={<span class="icon material-icons">thumb_up_alt</span>} movies={likeMovies} emptyMsg={"Nenhum filme favoritado"} backgroundColor={"#B33030"} />
      </Layout>
  );
}

export default Home;