import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const SheredLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

const Header = styled.header`
  display: flex;
  height: 50px;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 8px grey;
  background-color: #fff5f5;
`;
const Link = styled(NavLink)`
  padding: 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition-duration: 250ms;
  &.active {
    color: pink;
  }
  :hover:not(.active) {
    color: pink;
  }
`;
