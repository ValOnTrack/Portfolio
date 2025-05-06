import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendarAlt, faTools, faLightbulb, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FaGithub } from 'react-icons/fa';

const Wrapper = styled.div`
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: space-between;

  h1 {
    flex: 1;
    text-align: center;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
  }
`;

const BackIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.primary};
`;
const IconLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-left: 2rem;
`;

const IconeLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;


const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  margin: auto;
  flex-wrap: wrap;
  max-width: 1000px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  min-width: 250px;
  max-width: 300px;
`;

const Section = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2rem;
    margin-bottom: 0.7rem;
    
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 1.1rem;
      margin-bottom: 0.9rem;
      display: flex;
      align-items: center;
      gap: 0.9rem;

      svg {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.textPrimary};
      }
    }
  }
`;

export default function ProjetDetail({ projet }) {
  const navigate = useNavigate();

  if (!projet) return <p>Projet introuvable.</p>;

  return (
    <Wrapper>
        <Header>
  <BackIcon icon={faArrowLeft} onClick={() => navigate(-1)} />
  
  <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  {projet.titre}
  {(projet.Git || projet.Page) && (
    <IconLinks>
      {projet.Git && (
        <IconeLink href={projet.Git} target="_blank" aria-label="Lien GitHub">
          <FaGithub />
        </IconeLink>
      )}
      {projet.Page && (
        <IconeLink href={projet.Page} target="_blank" aria-label="Lien vers le site">
          <FontAwesomeIcon icon={faGlobe} />
        </IconeLink>
      )}
    </IconLinks>
  )}
</h1>

</Header>


        <Content>
            <ImageWrapper>
                <Image src={projet.image_en_avant} alt={projet.titre} />
            </ImageWrapper>


        <Info>
          <Section>
            <h3>Récapitulatif</h3>
            <ul>
              {projet.recapitulatif?.map((item, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={index === 0 ? faCalendarAlt : index === 1 ? faTools : faLightbulb} />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section>
            <h3>Compétences</h3>
            <ul>
              {projet.competences?.map((comp, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={faLightbulb} />
                  {comp}
                </li>
              ))}
            </ul>
          </Section>
        </Info>
      </Content>
    </Wrapper>
  );
}
