import * as React from 'react';
import Card from './Card';
import { IRobot } from '../containers/App'
import './CardList.css';

const CardList = ({ robots }: {robots: Array<IRobot>}) => {
  return (
    <div className="card-list">
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;