import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem } from 'components/CastItem/CastItem';
import { fetchtCast } from 'services/Api';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews(movieId) {
      const result = await fetchtCast(movieId);
      setCast(result);
    }

    getReviews(movieId);
  }, [movieId]);

  return (
    <ul>
      {cast && cast.cast?.map(el => <CastItem cast={el} key={el.id} />)}
      {cast && cast.results.length === 0 && <h2>No casts was found</h2>}
    </ul>
  );
};

export default Cast;
