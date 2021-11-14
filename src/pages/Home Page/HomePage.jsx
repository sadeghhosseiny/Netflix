import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Banner from '../../components/banner/Banner';
import MovieRow from '../../components/movie row/MovieRow';
import Navbar from '../../components/navbar/Navbar';
import { fetchData } from '../../services/get_movies/allMovies';
import requests from '../../services/requests/requests';

function HomePage() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setAllMovies());
  // }, []);

  const AllMovies = [
    {
      title: "Netflix Original",
      fetchUrl: requests.fetchNetflixOriginal
    },
    {
      title: "Trending Now",
      fetchUrl: requests.fetchTrending
    },
    {
      title: "Top Rated",
      fetchUrl: requests.fetchTopRated
    },
    {
      title: "Action Movies",
      fetchUrl: requests.fetchActionMovies
    },
    {
      title: "Comdey Movies",
      fetchUrl: requests.fetchComedyMovies
    },
    {
      title: "Horror Movies",
      fetchUrl: requests.fetchHorrorMovies
    },
    {
      title: "Romance Movies",
      fetchUrl: requests.fetchRomanceMovies
    },
    {
      title: "Documentaries",
      fetchUrl: requests.fetchDocumentaries
    }
  ];
  return (
    <>
      <Navbar />
      <Banner />
      {
        AllMovies.map((item, i) => <MovieRow key={i} item={item} />)
      }

    </>
  );
}

export default HomePage;
