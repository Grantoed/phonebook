import { useDispatch } from 'react-redux';
import { Box } from 'components/Box';
import { logIn } from 'redux/auth/operations';
import { FormTitle, Form, Label, Input, Submit } from './LoginPage.styled';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogIn = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Box>
      <FormTitle>Sign In</FormTitle>
      <Form action="submit" autoComplete="off" onSubmit={handleLogIn}>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Submit type="submit">Log In</Submit>
      </Form>
    </Box>
  );
};
