import React from 'react';
import styled from 'styled-components';

const CalendlyWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
`;

const CalendlyBox = styled.div`
  width: 100%;
  max-width: 850px;
  height: 550px;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    height: 450px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    height: 350px;
  }
`;

export default function ContactCalendly() {
  return (
    <CalendlyWrapper>
      <CalendlyBox>
        <iframe
          src="https://calendly.com/valentin-dubosc/reunion-telephonique-clone"
          title="Calendly"
          allow="camera; microphone; fullscreen"
        ></iframe>
      </CalendlyBox>
    </CalendlyWrapper>
  );
}


