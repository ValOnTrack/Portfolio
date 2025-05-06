import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import projets from '../data/projetData.json';
import ProjetDetail from '../components/ProjetDetail'; 
import ProjetDescription from '../components/ProjetDescription'; 
import ProjetGallerie from '../components/ProjetGallerie';


const Wrapper = styled.div`
  padding: 3rem 1.5rem;
  max-width: 1200px;
  margin: auto;
`;

export default function ProjetPage() {
  const { slug } = useParams();
  const projet = projets.find(p => p.slug === slug);

  if (!projet) return <p>Projet introuvable</p>;

  return (
    <Wrapper>
      <ProjetDetail projet={projet} />
      <ProjetDescription description={projet.description} />
      <ProjetGallerie images={projet.images} />
    </Wrapper>
  );
}
