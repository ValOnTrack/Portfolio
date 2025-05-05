import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 3rem 2rem;
  border-radius: 16px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Icon = styled(FaCheckCircle)`
  font-size: 4rem;
  color: white;
  animation: pop 0.4s ease-out;

  @keyframes pop {
    0% {
      transform: scale(0.6);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const Message = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 400px;
`;

export default function ConfirmationMessage() {
  return (
    <Wrapper>
      <Icon />
      <Message>
        Votre message a bien été envoyé !
      </Message>
    </Wrapper>
  );
}
