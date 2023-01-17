import styled from 'styled-components';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMemo } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const sevedLocation = useMemo(() => {
    return location;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a993acaefbe45c7033feacc337f4a924`
    )
      .then(p => p.json())
      .then(p => setMovie(p));
  }, [movieId]);
  if (movie) {
  }
  return (
    <>
      <Link to={`${sevedLocation.state?.from ?? '/'}`}>← Go back</Link>
      {movie && (
        <>
          <MainInfo>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
            />
            <Details>
              <h1>{movie.original_title}</h1>
              <p>User score: {movie.vote_average}</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              <p>{movie.genres.map(el => el.name + ' ')}</p>
            </Details>
          </MainInfo>
          <AdditionalInfo>
            <h3>Additional Info</h3>
            <Link to="credits">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </AdditionalInfo>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;

const MainInfo = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
  border-bottom: 1px solid black;
`;

const Image = styled.img`
  height: 400px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid black;
`;
