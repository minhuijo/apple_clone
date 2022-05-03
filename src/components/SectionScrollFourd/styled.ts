import styled from "styled-components";

export const ScrollSection = styled.section`
  padding-top: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MidMessege = styled.p`
  width: 100%;
  max-width: 1000px;
  padding: 0 1rem;
  font-size: 2rem;
  color: #888;

  @media (min-width: 1024px) {
    font-size: 4vw;
  }
`;

export const Strong = styled.strong`
  color: rgb(29, 29, 31);
`;

export const CanvasCaption = styled.p`
  max-width: 1000px;
  color: #888;
  padding: 0 1rem;
  font-size: 1.2rem;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const BlendImg = styled.img`
  margin: 1rem;
  width: 80%;
`;
