import React, { useState } from 'react';
import styled from 'styled-components';
import projects from '../data/projetData';
import ProjectCard from '../components/ProjetCard';

const Wrapper = styled.div`
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: auto;
`;

const Titre = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Filters = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  background: ${({ $active, theme }) => $active ? theme.colors.primary : theme.colors.secondarytext};
  color: ${({ $active, theme }) => $active ? 'white' : theme.colors.textPrimary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 32px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: ${({ theme }) => theme.colors.primary };
    color: ${({ theme }) => theme.colors.white };
  }
`;


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; 
  }
`;

export default function Portfolio() {
  const [filter, setFilter] = useState('Tous');

  const filteredProjects = filter === 'Tous'
    ? projects
    : projects.filter(project => project.categorie === filter);

  const categories = ['Tous', 'Création', 'Developpement web', 'Marketing'];

  return (
    <Wrapper>
      <Titre>Mes projets</Titre>
      <Filters>
        {categories.map((cat) => (
          <FilterButton
          key={cat}
          $active={filter === cat} // avec $
          onClick={() => setFilter(cat)}
        >
          {cat}
        </FilterButton>
        
        ))}
      </Filters>

      <Grid>
        {filteredProjects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.titre}
            image_en_avant={proj.image_en_avant}
            slug={proj.slug}
          />
        ))}
      </Grid>
    </Wrapper>
  );
}