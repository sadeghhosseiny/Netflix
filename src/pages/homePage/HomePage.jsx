import React from 'react';
import Banner from '../../components/banner/Banner';
import MovieRow from '../../components/movieRow/MovieRow';
import Navbar from '../../components/navbar/Navbar';
import requests from '../../services/requests/requests';

function HomePage() {

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
      <div style={{ minWidth: "460px" }}>
        {
          AllMovies.map((item, i) => <MovieRow key={i} item={item} />)
        }
      </div>

    </>
  );
}

export default HomePage;
