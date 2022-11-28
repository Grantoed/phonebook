import { NavItem } from 'components/AppBar/AppBar.styled';
import { Box } from 'components/Box';

export const AuthNav = () => {
  return (
    <Box>
      <NavItem to="/register">Register</NavItem>
      <NavItem to="/login">Login</NavItem>
    </Box>
  );
};
