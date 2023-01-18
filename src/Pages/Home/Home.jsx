import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchtTrendingMovies } from 'services/Api';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getTrendingMovies() {
      const result = await fetchtTrendingMovies();
      setTrending(result);
    }

    getTrendingMovies();
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
