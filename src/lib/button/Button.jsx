import React from 'react';

const Button = (props) => {
  const { type, onClick, className, title, isAddedToList, setIsAddedToList } = props;
  // setIsAddedToList(true);
  // props.setIsAddedToList(true);
  // console.log('props button', props.setIsAddedToList);
  // console.log('props button', props);
  // console.log('SET', onClick);
  console.log('SET', setIsAddedToList);
  // console.log('props button', props.isAddedToList);
  return (
    <button type={type} onClick={onClick} className={className} >{title}</button>
  );
};

export default Button;
