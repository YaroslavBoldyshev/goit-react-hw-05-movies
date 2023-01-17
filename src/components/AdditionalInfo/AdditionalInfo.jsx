import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Casts } from 'components/Casts/Casts';
import { Reviews } from 'components/Reviews/Reviews';

const AdditionalInfo = () => {
  const [info, setInfo] = useState({});
  const { detailsId, movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/${detailsId}?api_key=a993acaefbe45c7033feacc337f4a924`
    )
      .then(p => p.json())
      .then(p => setInfo(p));
  }, [detailsId, movieId]);

  if (detailsId === 'credits' && info.cast) {
    if (info.cast.length === 0) {
      return <h2>No casts was found</h2>;
    }
    return info.cast.map(el => <Casts cast={el} key={el.id} />);
  }
  if (detailsId === 'reviews' && info.results) {
    if (info.results.length === 0) {
      return <h2>No reviews was found</h2>;
    }
    return info.results.map(el => <Reviews review={el} key={el.id} />);
  }
};

export default AdditionalInfo;
