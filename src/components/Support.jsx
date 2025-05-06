import React from 'react';
import styled from 'styled-components';
import AvisCard from './Avis';
import NavButton from './NavButton';


// Data
const Avis = [
  { name: 'Marc', avatar: '/assets/Images/soutiens/marc.jfif', audio: '/assets/audio/marc-audio.mp3' },
  { name: 'Margaux', avatar: '/assets/Images/soutiens/margaux.jfif', audio: '/assets/audio/margaux-audio.mp3' },
  { name: 'Vincent', avatar: '/assets/Images/soutiens/vincent.jfif', audio: '/assets/audio/vincent-audio.mp3' },
  { name: 'Florian', avatar: '/assets/Images/soutiens/florian.jfif', audio: '/assets/audio/florian-audio.mp3' },
  { name: 'Manon', avatar: '/assets/Images/soutiens/manon.png', audio: '/assets/audio/manon-audio.mp3' },
  { name: 'Lucas', avatar: '/assets/Images/soutiens/lucas.jfif', audio: '/assets/audio/lucas-audio.mp3' },
];



const Section = styled.section`
  padding: 4rem 1rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  svg {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.1rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem auto;
  max-width: 1200px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 770px) {
    grid-template-columns: 1fr;
  }
`;

const Avertissement = styled.p`
  font-size: 0.8rem;
  color: #666;
  font-style: italic; 
  margin-bottom: 2rem;
`;

const CustomNavButton = styled(NavButton)`
  font-size: 1.5rem; 
 
  padding: 0.6rem 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function Support() {
  return (
    <Section id="soutien">
      <Title>
        Laissons leur la parole !
      </Title>

      <Text>
        Retrouvez ci-dessous les retours de collaborateurs que j’ai pu rencontrer lors de mon parcours professionnel.
      </Text>

      <CardsContainer>
        {Avis.map((item, index) => (
          <AvisCard
            key={index}
            name={item.name}
            avatar={item.avatar}
            audioSrc={item.audio}
          />
        ))}
      </CardsContainer>

      <Avertissement>*Voix générées par IA</Avertissement>
      <CustomNavButton to="/portfolio">En savoir plus</CustomNavButton>
    </Section>
  );
}
