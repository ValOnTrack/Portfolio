import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s ease;
  height: 250px; 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  &:hover img {
    filter: brightness(75%);
    transform: scale(1.03);
  }
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0,0,0,0.4);
  color: white;
  width: 100%;
  padding: 0.6rem;
  font-weight: 600;
  text-align: center;
`;

export default function ProjetCard({ title, image_en_avant, slug }) {
  return (
    <Card to={`/realisation/${slug}`}>
      <img src={image_en_avant} alt={title} />
      <Title>{title}</Title>
    </Card>
  );
}
