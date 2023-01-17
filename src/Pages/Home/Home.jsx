import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  // const [savedLocation, setSavedLocation] = useState('');
  const location = useLocation();

  // console.log(location.pathname + location.search);
  // useMemo(() => {
  //   setSavedLocation(location);
  // }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=a993acaefbe45c7033feacc337f4a924`
    )
      .then(p => p.json())
      .then(p => setTrending(p.results));
  }, []);
  return (
    <>
      <Title>Trending Today</Title>
      <ul>
        {trending.length !== 0 &&
          trending.map(el => (
            <li key={el.id}>
              <Link
                to={`movies/${el.id}`}
                state={{ from: `${location.pathname + location.search}` }}
              >
                {el.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

const Title = styled.h1`
  padding: 16px;
`;
