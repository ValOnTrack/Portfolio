import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NavButton from '../components/NavButton';
import { FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import Monograme from '../assets/Images/monograme.png';

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

const LinkedInLink = styled.a`
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

  return (
    <HeaderNav>
      <LogoWrapper>
        <img src={Monograme} alt="Logo monogramme" style={{ height: '2rem' }} />
        <Logo>Valentin DUBOSC</Logo>
      </LogoWrapper>

      <Nav>
        <StyledLink to="/">Profil</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
        <NavButton to="/portfolio">Rencontrons nous</NavButton>
        <LinkedInLink
          href="https://www.linkedin.com/in/valentin-dubosc/"
          target="_blank"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin />
        </LinkedInLink>
      </Nav>

      <Burger onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Burger>

      <MobileMenu open={menuOpen}>
        <StyledLink to="/" onClick={() => setMenuOpen(false)}>Profil</StyledLink>
        <StyledLink to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</StyledLink>
        <NavButton to="/portfolio" onClick={() => setMenuOpen(false)}>Rencontrons nous</NavButton>
        <LinkedInLink
          href="https://www.linkedin.com/in/valentin-dubosc/"
          target="_blank"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin />
        </LinkedInLink>
      </MobileMenu>
    </HeaderNav>
  );
}
