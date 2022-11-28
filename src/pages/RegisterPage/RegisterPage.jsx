import { Box } from 'components/Box';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormTitle,
  Form,
  Label,
  Input,
  Submit,
} from 'pages/LoginPage/LoginPage.styled';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box>
      <FormTitle>Register</FormTitle>
      <Form action="submit" autoComplete="off" onSubmit={handleSubmit}>
        <Label>
          Username
          <Input type="text" name="name" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Submit type="submit">Sign Up</Submit>
      </Form>
    </Box>
  );
};
