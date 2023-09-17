import { NavLink, Outlet } from 'react-router-dom';
import { Header } from './Layout.styled';
import { Suspense } from 'react';

export function Layout() {
  return (
    <>
      <Header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
