import * as React from 'react';
import './Card.css';

interface CardStatelessProps {
  name: string,
  email: string,
  id: number
}

const Card: React.SFC<CardStatelessProps> = ({ name, email, id }) => {
  return (
    <div className='card-container'>
      <img alt='robots' src={`https://robohash.org/${id}?set=set4&size=180x180`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;