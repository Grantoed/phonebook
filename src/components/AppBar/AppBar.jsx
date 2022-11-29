import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { NavBar } from './AppBar.styled';
import Button from '@mui/material/Button';
import { NavItem } from './AppBar.styled';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';

const AuthAppBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Box as="header">
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      <NavBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Simple Phonebook
          </Typography>
          {pathname === '/login' ? (
            <Button
              component={NavItem}
              to="/register"
              variant="outlined"
              sx={{ my: 1, mx: 1.5 }}
            >
              Sign Up
            </Button>
          ) : (
            <Button
              component={NavItem}
              to="/login"
              variant="outlined"
              sx={{ my: 1, mx: 1.5 }}
            >
              Log In
            </Button>
          )}
        </Toolbar>
      </NavBar>
    </Box>
  );
};

const LoggedInAppBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box as="header">
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      <NavBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Simple Phonebook
          </Typography>
          <Typography variant="p" color="inherit" noWrap>
            {`Welcome, ${user.name}`}
          </Typography>
          <Button
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
            type="button"
            onClick={() => dispatch(logOut())}
          >
            Log Out
          </Button>
        </Toolbar>
      </NavBar>
    </Box>
  );
};

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <>{isLoggedIn ? <LoggedInAppBar /> : <AuthAppBar />}</>;
};
