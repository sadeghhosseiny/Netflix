import React from 'react';
import Banner from '../../components/banner/Banner';
import MovieRow from '../../components/movie row/MovieRow';
import Navbar from '../../components/navbar/Navbar';
import requests from '../../services/requests/requests';

function HomePage() {
    return (
        <>
            <Navbar />
            <Banner />
            <MovieRow LargeRow title={"Netflix Original"} fetchUrl={requests.fetchNetflixOriginal} />
            <MovieRow title={"Trending Now"} fetchUrl={requests.fetchTrending} />
            <MovieRow title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
            <MovieRow title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
            <MovieRow title={"Comdey Movies"} fetchUrl={requests.fetchComedyMovies} />
            <MovieRow title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
            <MovieRow title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
            <MovieRow title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
        </>
    );
}

export default HomePage;
