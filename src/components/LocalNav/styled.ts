import styled from "styled-components";

export const LocalNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 52px;
  border-bottom: 1px solid #ddd;
  padding: 0 1rem;
  position: absolute;
  z-index: 11;
  top: 45px;
  left: 0;
`;

export const LocalNavLinks = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LocalNavItem = styled.a`
  margin-left: 2em;
  font-size: 0.8rem;
`;

export const LocalNavProduct = styled.a`
  margin-right: auto;
  font-size: 1.4rem;
  font-weight: bold;
`;
