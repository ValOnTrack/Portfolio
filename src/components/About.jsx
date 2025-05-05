/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import photo from '../assets/Images/photo-valentin.jpg';
import { theme } from '../styles/GlobalStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf, faSyncAlt, faLaptopCode, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import ActionButton from '../components/ActionButton';


const SectionWrapper = styled.div`
  width: 100vw;
  background-color: ${theme.colors.primary};
  margin-top: 4rem;
`;

const Section = styled.section`
  max-width: 100%;
  padding: 2rem;
  text-align: center;
  color: ${theme.colors.white};
`;

const Title = styled.h2`
  font-size: 3.5rem;
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 900px) {
    font-size: 2.5rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  gap: 3rem;

  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 2rem;
    gap: 2rem;
  }
`;

const Photo = styled.img`
  width: 340px;
  height: 340px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 900px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 500px) {
    width: 180px;
    height: 180px;
  }
`;

const Text = styled.div`
  max-width: 550px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.7;

  @media (max-width: 900px) {
    font-size: 1rem;
    text-align: center;
    padding: 0 1rem;
  }
`;

const Qualities = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 4rem auto 3rem;
  max-width: 900px;
  gap: 3rem;

  @media (max-width: 900px) {
    gap: 1.5rem;
    margin: 2rem auto;
  }
`;

const Quality = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3rem;
  gap: 0.6rem;

  svg {
    font-size: 2.5rem;
  }

  @media (max-width: 900px) {
    font-size: 1.1rem;

    svg {
      font-size: 2rem;
    }
  }
`;


export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <Section>
        <Title>
           Qui suis-je ?
        </Title>

        <Container>
          <Photo src={photo} alt="Photo Valentin" />
          <Text>
            <p>Actuellement, élève en bachelor Tech and Business, je suis aujourd’hui à la recherche d’une alternance afin de poursuivre mes études.</p>
            <p>Mes diverses expériences professionnelles m’ont permis d’améliorer et de diversifier mes compétences et connaissances ainsi qu’une adaptabilité à toutes épreuves.</p>
            <p><strong>Le choix est entre vos mains !</strong></p>
          </Text>
        </Container>

        <Qualities>
          <Quality>
            <FontAwesomeIcon icon={faHourglassHalf} />
            <span>Réactivité</span>
          </Quality>
          <Quality>
            <FontAwesomeIcon icon={faSyncAlt} />
            <span>Adaptabilité</span>
          </Quality>
          <Quality>
            <FontAwesomeIcon icon={faLaptopCode} />
            <span>Rigueur</span>
          </Quality>
          <Quality>
            <FontAwesomeIcon icon={faFolderOpen} />
            <span>Autonomie</span>
          </Quality>
        </Qualities>

        <a href="/CV_Valentin.pdf" target="_blank" rel="noopener noreferrer">
            <ActionButton>Mon parcours</ActionButton> // a AJOUTER
        </a> 

      </Section>
    </SectionWrapper>
  );
}
