import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NavButton from '../components/NavButton';
import { FaLinkedin } from 'react-icons/fa'; 
import Monograme from '../assets/monograme.png';

const HeaderNav = styled.header`
  padding-top: 1.5rem ;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  padding: 0.5rem;
  text-decoration: none;
  font-weight: 700;
  transition: background-color 0.3s ease;

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
  font-size: 3rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function Header() {
  return (
    <HeaderNav>
      <LogoWrapper>
        <img src={Monograme} alt="Logo monogramme" style={{ height: '2rem' }} />
        <Logo>Valentin DUBOSC</Logo> 
      </LogoWrapper>

      <Nav>
        <StyledLink to="/">Profil</StyledLink>
        <StyledLink to="/parcours">Parcours</StyledLink>
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
    </HeaderNav>
  );
}
