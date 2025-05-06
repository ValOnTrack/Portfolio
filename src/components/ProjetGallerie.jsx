import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const GallerieWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;


const Vignette = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(20, 20, 20, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  flex-direction: column;
`;

const ZoomImage = styled.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 10px;
`;

const Controls = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const NavFleches = styled.div`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ left }) => (left ? 'left: 1rem;' : 'right: 1rem;')}
`;

const Counter = styled.div`
  color: white;
  margin-top: 1rem;
  font-size: 1rem;
`;

export default function Gallery({ images }) {
  const [index, setIndex] = useState(null);

  const open = (i) => setIndex(i);
  const close = () => setIndex(null);
  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <>
      <GallerieWrapper>
        {images.map((img, i) => (
          <Vignette key={i} src={img} alt={`image-${i}`} onClick={() => open(i)} />
        ))}
      </GallerieWrapper>

      {index !== null && (
        <Overlay>
          <Controls onClick={close}><FaTimes /></Controls>
          <NavFleches left onClick={prev}><FaChevronLeft /></NavFleches>
          <ZoomImage src={images[index]} alt={`zoom-${index}`} />
          <NavFleches onClick={next}><FaChevronRight /></NavFleches>
          <Counter>{index + 1} / {images.length}</Counter>
        </Overlay>
      )}
    </>
  );
}
