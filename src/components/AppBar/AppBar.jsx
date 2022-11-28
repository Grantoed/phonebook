import { Box } from 'components/Box';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavItem } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box as="header" display="flex" justifyContent="space-between">
      {isLoggedIn ? (
        <NavItem to="/contacts">Contacts</NavItem>
      ) : (
        <NavItem to="/">Home</NavItem>
      )}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
