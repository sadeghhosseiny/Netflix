import React from 'react';

function MovieImage(props) {
    const image_src = props?.imgsrc;
    return (
        <img className={props.className} src={image_src} alt="movieImage" />
    );
}

export default MovieImage;
