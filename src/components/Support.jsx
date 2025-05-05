import React from 'react';
import styled from 'styled-components';
import AvisCard from './Avis';
import NavButton from './NavButton';


// AVATARS
import marc from '../assets/Images/soutiens/marc.jfif';
import margaux from '../assets/Images/soutiens/margaux.jfif';
import vincent from '../assets/Images/soutiens/vincent.jfif';
import florian from '../assets/Images/soutiens/florian.jfif';
import manon from '../assets/Images/soutiens/manon.png';
import lucas from '../assets/Images/soutiens/lucas.jfif';

// AUDIOS
import marcAudio from '../assets/audio/marc-audio.mp3';
import margauxAudio from '../assets/audio/margaux-audio.mp3';
import vincentAudio from '../assets/audio/vincent-audio.mp3';
import florianAudio from '../assets/audio/florian-audio.mp3';
import manonAudio from '../assets/audio/manon-audio.mp3';
import lucasAudio from '../assets/audio/lucas-audio.mp3';

// Data
const Avis = [
  { name: 'Marc', avatar: marc, audio: marcAudio },
  { name: 'Margaux', avatar: margaux, audio: margauxAudio },
  { name: 'Vincent', avatar: vincent, audio: vincentAudio },
  { name: 'Florian', avatar: florian, audio: florianAudio },
  { name: 'Manon', avatar: manon, audio: manonAudio },
  { name: 'Lucas', avatar: lucas, audio: lucasAudio },
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

  @media (max-width: 600px) {
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
      <CustomNavButton to="/portoflio">En savoir plus</CustomNavButton>
    </Section>
  );
}
