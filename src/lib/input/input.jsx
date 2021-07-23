import React from 'react';

function Input(props) {
    console.log("this is input ,", { ...props });
    return (
        <input {...props} />
    );
}

export default Input;
