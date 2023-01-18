export async function fetchReviews(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a993acaefbe45c7033feacc337f4a924`
  );
  const reviews = await response.json();
  return reviews;
}

export async function fetchtCast(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a993acaefbe45c7033feacc337f4a924`
  );
  const cast = await response.json();
  return cast;
}

export async function fetchtMovieDetails(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=a993acaefbe45c7033feacc337f4a924`
  );
  const movieDetails = await response.json();
  return movieDetails;
}

export async function fetchtTrendingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=a993acaefbe45c7033feacc337f4a924`
  );
  const movieDetails = await response.json();
  return movieDetails.results;
}

export async function fetchtMoviesByName(filter) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=a993acaefbe45c7033feacc337f4a924&query=${filter}`
  );
  const movies = await response.json();
  return movies.results;
}
