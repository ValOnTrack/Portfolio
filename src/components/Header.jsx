import React, { useState,useEffect} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NavButton from '../components/NavButton';
import { FaLinkedin, FaBars, FaTimes,FaGithub } from 'react-icons/fa';
import Modal from './Modal';
import ContactOnglets from './ContactOnglets';
import ConfirmationMessage from './ConfirmationMessage';


const HeaderNav = styled.header`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  padding: 0.5rem;
  text-decoration: none;
  font-weight: 700;

  &.active {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const IconeLink = styled.a`
  display: flex;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  // Plus gros dans le menu mobile
  @media (max-width: 1100px) {
    font-size: 6.2rem;
  }
`;

const Burger = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 1100px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;       
  align-items: center;             
  gap: 2rem;
  position: absolute;
  top: 100%;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  padding: 2rem 1rem;
  z-index: 1000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 1100px) {
    display: none;
  }

  a {
    font-size: 1.3rem;
    text-align: center;
  }
`;
export default function Header() {


  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false); // confirmation

  useEffect(() => {
    if (isConfirmModalOpen) {
      const timer = setTimeout(() => setIsConfirmModalOpen(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isConfirmModalOpen]);

  return (
    <>
     {isModalOpen && (
  <Modal onClose={() => setIsModalOpen(false)}>
    <ContactOnglets
      onSuccess={() => {
        setIsModalOpen(false);
        setIsConfirmModalOpen(true);
      }}
    />
  </Modal>
)}

{isConfirmModalOpen && (
  <Modal onClose={() => setIsConfirmModalOpen(false)}>
    <ConfirmationMessage />
  </Modal>
)}
      <HeaderNav>
        <LogoWrapper>
          <img src='/assets/Images/Identité_Visuelle/monograme.png' alt="Logo monogramme" style={{ height: '2rem' }} />
          <Logo>Valentin DUBOSC</Logo>
        </LogoWrapper>

        <Nav>
          <StyledLink to="/">Profil</StyledLink>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
          <NavButton as="button" onClick={openModal}>
            Rencontrons nous
          </NavButton>
          <IconeLink
            href="https://github.com/ValOnTrack" 
            aria-label="GitHub profile"
          >
    <FaGithub />
  </IconeLink>
          <IconeLink
            href="https://www.linkedin.com/in/valentin-dubosc/"
            target="_blank"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </IconeLink>
        </Nav>

        <Burger onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </Burger>

        <MobileMenu open={menuOpen}>
          <StyledLink to="/" onClick={() => setMenuOpen(false)}>Profil</StyledLink>
          <StyledLink to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</StyledLink>
          <NavButton as="button" onClick={() => {
            setMenuOpen(false);
            openModal();
          }}>
            Rencontrons nous
          </NavButton>
          <IconeLink
            href="https://github.com/ValOnTrack" 
            target="_blank"
            aria-label="GitHub profile"
          >
    <FaGithub />
  </IconeLink>
          <IconeLink
            href="https://www.linkedin.com/in/valentin-dubosc/"
            target="_blank"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </IconeLink>
        </MobileMenu>
      </HeaderNav>
    </>
  );
}