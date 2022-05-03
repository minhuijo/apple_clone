import styled from "styled-components";

export const ScrollSection = styled.section`
  padding-top: 50vh;
`;

export const Title = styled.h1`
  position: relative;
  top: -10vh;
  font-size: 4rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 9vw;
  }
`;

export const ScrollMessage = styled.div<{ display?: string }>`
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  height: 3em;
  font-size: 2.5rem;
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  top: 35vh;
  left: 0;
  width: 100%;
  opacity: 0;

  @media (min-width: 1024px) {
    font-size: 4vw;
  }
`;

export const Message = styled.p`
  line-height: 1.2;
  font-weight: bold;
  text-align: center;
`;

export const CanvasElem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: -1;
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 50%;
  left: 50%;
`;
