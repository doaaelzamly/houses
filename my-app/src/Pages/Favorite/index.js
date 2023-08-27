import React from 'react';
import Card from '../../Components/Cards';
import Details from '../Details';

const Favorites = ({ favoriteCards }) => {
  return (
    <div>
      <h2>المفضلة</h2>
      {favoriteCards.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
};

export default Favorites;
