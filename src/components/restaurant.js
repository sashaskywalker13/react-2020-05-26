import React, { useMemo } from 'react';

import Reviews from './reviews';
import Menu from './menu';
import Rate from './rate';

export default function Restaurant(props) {
  const activeRating = useMemo(
    () => props.restaurant.reviews.map((restaurant) => restaurant.rating),
    [props.restaurant.reviews]
  );
  const averageRating = useMemo(
    () =>
      (
        activeRating.reduce((sum, current) => sum + current, 0) /
        activeRating.length
      ).toFixed(1),
    [activeRating]
  );
  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <Reviews reviews={props.restaurant.reviews} />
      <p>общий рейтинг</p>
      <Rate rating={averageRating} />
    </div>
  );
}
