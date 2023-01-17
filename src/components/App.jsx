import { Navigate, Route, Routes } from 'react-router-dom';
import { SheredLayout } from './SheredLayout/SheredLayout';
import { Error } from './Error/Error';
import { Home } from 'Pages/Home/Home';
import { Movies } from 'Pages/Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { AdditionalInfo } from './AdditionalInfo/AdditionalInfo';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SheredLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path=":detailsId" element={<AdditionalInfo />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
