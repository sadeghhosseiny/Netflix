import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Banner from '../../components/banner/Banner';
import MovieRow from '../../components/movie row/MovieRow';
import Navbar from '../../components/navbar/Navbar';
import { setAllMovies } from '../../Redux/actions/actions';
import { fetchData } from '../../services/get_movies/allMovies';
import requests from '../../services/requests/requests';

function HomePage() {
  const selector = useSelector(state => state.userReducer.allMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllMovies());
  }, []);

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
      {console.log('these are ALL MOVIES**************', selector)}
      <Navbar />
      <Banner />
      {
        AllMovies.map(item => <MovieRow key={item.id} item={item} />)
      }
      {/* <MovieRow LargeRow title={"Netflix Original"} fetchUrl={requests.fetchNetflixOriginal} />
            <MovieRow title={"Trending Now"} fetchUrl={requests.fetchTrending} />
            <MovieRow title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
            <MovieRow title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
            <MovieRow title={"Comdey Movies"} fetchUrl={requests.fetchComedyMovies} />
            <MovieRow title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
            <MovieRow title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
            <MovieRow title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} /> */}
    </>
  );
}

export default HomePage;
