import * as Styled from "./styled";

interface Props {}

const GlobalNav = (props: Props) => {
  return (
    <>
      <Styled.GlobalNav>
        <Styled.GlobalNavLink>
          <Styled.GlobalNavItem>Rooms</Styled.GlobalNavItem>
          <Styled.GlobalNavItem>Ideas</Styled.GlobalNavItem>
          <Styled.GlobalNavItem>Stores</Styled.GlobalNavItem>
          <Styled.GlobalNavItem>Contact</Styled.GlobalNavItem>
        </Styled.GlobalNavLink>
      </Styled.GlobalNav>
    </>
  );
};

export default GlobalNav;
