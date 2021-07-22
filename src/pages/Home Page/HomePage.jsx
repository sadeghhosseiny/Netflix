import React from 'react';
import Banner from '../../components/banner/Banner';
import MovieRow from '../../components/movie row/MovieRow';
import Navbar from '../../components/navbar/Navbar';
import requests from '../../services/requests/requests';

function HomePage() {
    return (
        <div>
            <Navbar />
            <Banner />
            <MovieRow title={"Netflix Original"} fetchUrl={requests.fetchNetflixOriginal} />
            <MovieRow title={"Trending Now"} fetchUrl={requests.fetchTrending} />
            <MovieRow title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
        </div>
    );
}

export default HomePage;
