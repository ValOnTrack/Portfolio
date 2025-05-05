import React, { useState } from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactCalendly from './ContactCalendly';

const OngletButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const OngletButton = styled.button`
  background: ${({ $active, theme }) => $active ? theme.colors.primary : '#eee'};
  color: ${({ $active, theme }) => $active ? 'white' : theme.colors.textPrimary};
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
`;

export default function ContactTabs({ onSuccess }) {
  const [activeTab, setActiveTab] = useState('form');

  return (
    <div>
      <OngletButtons>
        <OngletButton $active={activeTab === 'form'} onClick={() => setActiveTab('form')}>
          Me contacter
        </OngletButton>
        <OngletButton $active={activeTab === 'calendly'} onClick={() => setActiveTab('calendly')}>
          Prendre RDV
        </OngletButton>
      </OngletButtons>

      {activeTab === 'form' && <ContactForm onSuccess={onSuccess} />}
      {activeTab === 'calendly' && <ContactCalendly />}
    </div>
  );
}