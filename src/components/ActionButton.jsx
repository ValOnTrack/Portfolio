import styled from 'styled-components';

const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color : ${({ theme }) => theme.colors.secondary};
  }
`;

export default ActionButton;
