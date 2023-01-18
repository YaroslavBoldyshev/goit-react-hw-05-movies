import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem } from 'components/ReviewItem/ReviewItem';
import { fetchReviews } from 'services/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews(movieId) {
      const result = await fetchReviews(movieId);
      setReviews(result);
    }

    getReviews(movieId);
  }, [movieId]);

  return (
    <ul>
      {reviews &&
        reviews.results?.map(el => <ReviewItem review={el} key={el.id} />)}
      {reviews && reviews.results.length === 0 && <h2>No reviews was found</h2>}
    </ul>
  );
};

export default Reviews;
