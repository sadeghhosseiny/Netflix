import React from 'react';

function MovieImage(props) {
  const image_src = props?.imgsrc;
  return (
    <div>
      <img onClick={props.onClick} className={props.className} src={image_src} alt="movieImage" />
    </div>
  );
}

export default MovieImage;
