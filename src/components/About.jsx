import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf, faSyncAlt, faLaptopCode, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 4rem;

  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;


const Inner = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 3rem 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h2`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.white};
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
  margin-bottom: 5rem;
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

  @media (min-width: 901px) {
    margin-right: 4rem;
  }

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
  max-width: 650px;
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
  margin: 4rem auto 2rem;
  max-width: 900px;
  gap: 8rem;
  margin-bottom: 4rem;
  

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
  gap: 1.6rem;

  svg {
    font-size: 4.5rem;
  }

  @media (max-width: 900px) {
    font-size: 1.1rem;

    svg {
      font-size: 2rem;
    }
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color : ${({ theme }) => theme.colors.secondary};
  }
`;

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <Inner>
        <Title>Qui suis-je ?</Title>

        <Container>
          <Photo src="/assets/Images/Identité_Visuelle/photo-valentin.jpg" alt="Photo Valentin" />
          <Text>
            <p>
            Passionné par la création d’interfaces modernes, accessibles et intuitives, je conçois des sites web responsives en m’appuyant sur des technologies comme HTML, CSS, JavaScript et React.

            </p>
            <p>
            Mes diverses expériences professionnelles m’ont permis de renforcer mes compétences techniques et de développer une adaptabilité à toute épreuve.
            </p>
            <p>
              <strong>Le choix est entre vos mains !</strong>
            </p>
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

        <a href="/assets/CV_DUBOSC_Valentin.pdf" target="_blank" rel="noopener noreferrer">
          <Button>Mon parcours</Button>
        </a>
      </Inner>
    </SectionWrapper>
  );
}