import React, { useEffect } from 'react';

const Button = (props) => {
  const { type, onClick, className, title, isAddedToList, setIsAddedToList } = props;
  return (
    <button title={title} type={type} onClick={onClick} className={className} >{props.children}</button>
  );
};

export default Button;
