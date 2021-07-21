import React from 'react';

function Button(props) {
    console.log(props.className);
    return (
        <button className={props.className} >{props.title}</button>
    );
}

export default Button;
