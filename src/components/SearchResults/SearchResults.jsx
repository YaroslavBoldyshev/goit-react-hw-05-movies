import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SearchResults = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(el => (
        <li key={el.id}>
          <Link
            to={`${el.id}`}
            state={{ from: `${location.pathname + location.search}` }}
          >
            {el.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

SearchResults.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
