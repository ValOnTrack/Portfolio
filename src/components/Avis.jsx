import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 1.2rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Audio = styled.audio`
  width: 100%;
  outline: none;
`;

export default function AvisCard({ name, avatar, audioSrc }) {
  return (
    <Card>
      <Avatar src={avatar} alt={name} loading="lazy" />
      <Name>{name}</Name>
      <audio controls src={audioSrc} preload="none" />
    </Card>
  );
}
