import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box } from './Box';
import { AppBar } from './AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <Box>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  );
};
