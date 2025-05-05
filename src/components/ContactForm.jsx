import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`;

const Colonnes = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Champs = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    margin-bottom: 0.3rem;
  }

  input,
  textarea {
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }

  textarea {
    resize: vertical;
  }
`;

const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Envoie = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.7rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function ContactForm({ onSuccess }) {
  const [comment, setComment] = useState('');
  const caractMax = 500;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xeoggeqn", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      e.target.reset();
      setComment('');
      onSuccess();
    } else {
      alert("Une erreur est survenue. Merci de réessayer.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Colonnes>
        <Champs>
          <label>Identité *</label>
          <input name="nom" type="text" placeholder="Nom" required />
        </Champs>
        <Champs>
          <label style={{ visibility: 'hidden' }}>Prénom</label>
          <input name="prenom" type="text" placeholder="Prénom" required />
        </Champs>
      </Colonnes>

      <Champs>
        <label>E-mail *</label>
        <input name="email" type="email" placeholder="email@domaine.fr" required />
      </Champs>

      <Champs>
        <label>Téléphone</label>
        <input name="telephone" type="tel" placeholder="06********" />
      </Champs>

      <Champs>
        <label>Commentaire *</label>
        <textarea
          name="message"
          rows="4"
          maxLength={caractMax}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder={`Votre message (max ${caractMax} caractères)`}
          required
        />
      </Champs>

      <SubmitWrapper>
        <Envoie type="submit">Envoyer</Envoie>
      </SubmitWrapper>
    </Form>
  );
}
