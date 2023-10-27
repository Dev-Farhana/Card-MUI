import React from 'react';
const Card = ({name,image, profession,agency ,index}) => {  
    return (
    <div className='Card'>
        <img src={image}  />
            <h2> {name} </h2>
            <p> {profession} </p>
            <p>{agency} </p>
     </div>
  )
}

export default Card;

