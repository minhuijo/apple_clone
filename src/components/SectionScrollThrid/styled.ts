import styled from "styled-components";

export const ScrollSection = styled.section`
  padding-top: 50vh;
`;

export const ScrollMessage = styled.div<{ display?: string }>`
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  height: 3em;
  font-size: 3.5rem;
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

export const Small = styled.small`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5em;

  @media (min-width: 1024px) {
    font-size: 1.5vw;
  }
`;

export const ScrollDescMessageA = styled.div<{ display?: string }>`
  width: 50%;
  font-weight: 700;
  display: ${(props) => props.display};
  position: fixed;
  top: 10%;
  left: 40%;

  @media (min-width: 1024px) {
    width: 20%;
    top: 20%;
    left: 53%;
  }
`;

export const ScrollDescMessageB = styled.div<{ display?: string }>`
  width: 50%;
  font-weight: 700;
  display: ${(props) => props.display};
  position: fixed;
  top: 15%;
  left: 45%;

  @media (min-width: 1024px) {
    width: 20%;
    left: 55%;
  }
`;

export const DescPin = styled.div`
  width: 1px;
  height: 100px;
  background-color: rgb(29, 29, 31);
`;
