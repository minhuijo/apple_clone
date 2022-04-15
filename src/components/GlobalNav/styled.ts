import styled from "styled-components";

export const GlobalNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 44px;
  padding: 0 1rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const GlobalNavLink = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GlobalNavItem = styled.a`
  font-weight: 400;
`;
