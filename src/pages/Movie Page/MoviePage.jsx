import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';

function MoviePage() {
    const [res2, setRes2] = useState("");
    const history = useHistory();
    const data = useParams();
    const data2 = useRouteMatch();
    console.log("PARAms", data);
    console.log("ROUteMATCH", data2);
    console.log(window.location.pathname);
    const temp = window.location.pathname;
    const id = temp.substr(1, temp.length);
    console.log(id);

    const overWriteUrl = () => {
        const urlPath = window.location.pathname;
        const res = urlPath.replace(/%20/gi, "-");
        setRes2(urlPath.replace(/%20/gi, " "));

        // history.replace({ pathname: `${res}` });
    };
    console.log(res2);
    useEffect(() => {
        const urlPath = window.location.pathname;
        setRes2(urlPath.replace(/%20/gi, " "));
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=cd778997bbca0bb69eb4f1347a8b2e1d&language=en-US&page=1&include_adult=false`)
            .then(res =>
                console.log(res.data)
            )
            .catch(err => console.log(err)
            );
    }, []);

    return (
        <div>
            {/* {() => overWriteUrl()} */}
            THIS IS MOVIE PAGE
            <div>
                {/* <img src={`https://image.tmdb.org/t/p/original${}`} alt="photo" /> */}
            </div>
        </div>
    );
}

export default MoviePage;
