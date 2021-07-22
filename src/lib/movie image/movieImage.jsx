import React from 'react';

function MovieImage(props) {
    const image_src = props?.imgsrc;
    console.log(props);
    return (
        <img className={props.className} src={image_src} alt="movie image" />
    );
}

export default MovieImage;
