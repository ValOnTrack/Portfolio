import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../styles/GlobalStyle';

// Animation du curseur clignotant
const blink = keyframes`
  0%, 100% { opacity: 1 }
  50% { opacity: 0 }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 1ch;
  animation: ${blink} 0.8s step-start infinite;
  color: ${theme.colors.secondary};
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 3rem;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 600px;
  height: auto;

  @media (max-width: 1024px) {
    width: 450px;
  }

  @media (max-width: 900px) {
    width: 300px;
    margin-left: 0;
  }

  @media (max-width: 500px) {
    width: 220px;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;

  @media (max-width: 1200px) {
    margin: 1rem 0 0 0;
    align-items: center;
  }
`;

const DynamicText = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${theme.colors.secondary};

  @media (max-width: 1200px) {
    font-size: 2.2rem;
  }
`;

const StaticText = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${theme.colors.textPrimary};

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
`;
const fade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Highlight = styled.span`
  color: ${theme.colors.primary};
  font-size: 4rem;
  font-weight: 700;
  animation: ${fade} 0.4s ease-in;

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
`;

const ArrowContainer = styled.div`
  text-align: center;
  font-size: 4rem;
  margin-top: 6rem;
  color: ${theme.colors.secondary};
  animation: ${bounce} 1.5s infinite;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1200px) {
    font-size: 3rem;
    margin-top: 4rem;
  }
`;

export default function DisplayedSection() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts = ["Bonjour !", "01101000 01100101 01111001 !", "Hello ! ", "コニチワ ! "];
  const roles = [  "Développeur Front-End", "Intégrateur web", "Interface développeur","Développeur Web"];
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [animatedRole, setAnimatedRole] = useState(roles[0]);

  // Animation hello
  useEffect(() => {
    const currentText = texts[textIndex];

    if (!deleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }

    if (!deleting && charIndex === currentText.length) {
      const pause = setTimeout(() => setDeleting(true), 1000);
      return () => clearTimeout(pause);
    }

    if (deleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, Math.max(30, charIndex * 4));
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [charIndex, deleting, textIndex, texts]);

  // Animation des rôles 
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setAnimatedRole(roles[index]);
    }, 1500);

    return () => clearInterval(interval);
  },);

  return (
    <>
      <ContentWrapper>
        <Logo src='/assets/Images/Identité_Visuelle/logo.png' alt="Logo Valentin Dubosc" />
        <TextBlock>
          <DynamicText>
            {displayedText}<Cursor>|</Cursor>
          </DynamicText>
          <StaticText>Je suis Valentin,</StaticText>
          <Highlight key={animatedRole}>{animatedRole}</Highlight>

        </TextBlock>
      </ContentWrapper>

      <ArrowContainer
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </ArrowContainer>
    </>
  );
}
