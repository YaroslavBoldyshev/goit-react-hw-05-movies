import styled from 'styled-components';
import {
  useLocation,
  useParams,
  Link,
  Outlet,
  NavLink,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMemo } from 'react';
import { fetchtMovieDetails } from 'services/Api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const sevedLocation = useMemo(() => {
    return location;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function getMovieDetails(movieId) {
      const result = await fetchtMovieDetails(movieId);
      setMovie(result);
    }

    getMovieDetails(movieId);
  }, [movieId]);

  if (!movie) {
    return;
  }
  return (
    <>
      <GoBackBtn to={`${sevedLocation.state?.from ?? '/'}`}>
        ← Go back
      </GoBackBtn>
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
            <Link to="cast">Cast</Link>
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

const GoBackBtn = styled(NavLink)`
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 0 10px;
  height: 30px;
  width: 140px;
  border-radius: 5px;
  background-color: pink;
  text-decoration: none;
  font-weight: 500;
  transition-duration: 250ms;
  :hover {
    background-color: #ffe6e6;
  }
`;
