import { useEffect, useState } from 'react';
import axios from '../axios/axios';
import requests from '../requests/requests';

const fetchOriginalsMovie = () => {

    const [originalMovie, setOriginalMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(requests.fetchNetflixOriginal);
            setOriginalMovie(req.data.results[
                Math.floor(Math.random() * req.data.results.length - 1)
            ]
            );
            return req;
        };
        fetchData();
    }, []);
};

export default fetchOriginalsMovie;