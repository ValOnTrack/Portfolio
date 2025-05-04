import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
  }
`;

export default NavButton;
