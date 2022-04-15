import styled from "styled-components";

export const ScrollSection = styled.section`
  padding-top: 50vh;
  display: flex;
  justify-content: center;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #888;
  padding: 0 1rem;
  max-width: 1000px;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const Strong = styled.strong`
  float: left;
  font-size: 3rem;
  color: rgb(29, 29, 31);
  margin-right: 0.2em;

  @media (min-width: 1024px) {
    font-size: 6rem;
  }
`;
