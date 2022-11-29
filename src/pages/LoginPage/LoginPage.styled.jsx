import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: ${p => p.theme.palette.primary.dark};
`;
