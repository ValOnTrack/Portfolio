import React, { useState } from 'react';
import styled from 'styled-components';
import projects from '../data/projetData';
import ProjectCard from '../components/ProjetCard';

const Wrapper = styled.div`
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: auto;
`;

const Filters = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  background: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.secondarytext};
  color: ${({ active, theme }) => active ? 'white' : theme.colors.textPrimary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 32px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    color: white;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

export default function Portfolio() {
  const [filter, setFilter] = useState('Tous');

  const filteredProjects = filter === 'Tous'
    ? projects
    : projects.filter(project => project.categorie === filter);

  const categories = ['Tous', 'Création', 'Informatique', 'Marketing'];

  return (
    <Wrapper>
      <Filters>
        {categories.map((cat) => (
          <FilterButton
            key={cat}
            active={filter === cat}
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
            title={proj.title}
            image={proj.image}
            slug={proj.slug}
          />
        ))}
      </Grid>
    </Wrapper>
  );
}
