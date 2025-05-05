import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  margin: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;

  @media (max-width: 1100px) {
    padding: 1.5rem;
  }
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 1.8rem;
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Modal({ onClose, children }) {
  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>&times;</CloseBtn>
        {children}
      </ModalContent>
    </Overlay>
  );
}
