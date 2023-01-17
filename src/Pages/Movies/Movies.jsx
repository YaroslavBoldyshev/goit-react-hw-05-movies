import { SearchBar } from 'components/SearchBar/SearchBar';
import { SearchResults } from 'components/SearchResults/SearchResults';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (!filter) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a993acaefbe45c7033feacc337f4a924&query=${filter}`
    )
      .then(p => p.json())
      .then(p => setSearchResult(p.results));
  }, [filter]);

  const onSubmit = value => {
    setSearchParams(value !== '' ? { filter: value } : { filter: value });
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <SearchResults movies={searchResult} />
    </>
  );
};

export default Movies;
