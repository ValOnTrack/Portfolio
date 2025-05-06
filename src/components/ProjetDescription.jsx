import React from 'react';
import styled from 'styled-components';

const DescriptionWrapper = styled.div`
  max-width: 990px;
  padding: 0 1rem;
  margin: 0 AUTO 
`;

const Title = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.8;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function ProjetDescription({ description }) {
  return (
    <DescriptionWrapper>
      <Title>Description</Title>
      {description.split('\n').map((para, index) => (
        <Text key={index}>{para}</Text>
      ))}
    </DescriptionWrapper>
  );
}