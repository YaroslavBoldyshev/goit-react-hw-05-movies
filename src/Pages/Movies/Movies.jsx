import { SearchBar } from 'components/SearchBar/SearchBar';
import { SearchResults } from 'components/SearchResults/SearchResults';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchtMoviesByName } from 'services/Api';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (!filter) {
      return;
    }
    async function getReviews(filter) {
      const result = await fetchtMoviesByName(filter);
      setSearchResult(result);
    }

    getReviews(filter);
  }, [filter]);

  const onSubmit = value => {
    setSearchParams(value !== '' ? { filter: value } : { filter: value });
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <SearchResults movies={searchResult} />
      {filter && searchResult.length === 0 && (
        <h1 style={{ margin: '15px' }}>No results...</h1>
      )}
    </>
  );
};

export default Movies;
