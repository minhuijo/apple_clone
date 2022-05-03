import * as Styled from "./styled";

interface Props {
  menu: boolean;
}

const LocalNav = ({ menu }: Props) => {
  return (
    <>
      <Styled.LocalNav position={menu}>
        <Styled.LocalNavLinks>
          <Styled.LocalNavProduct>AirMug Pro</Styled.LocalNavProduct>
          <Styled.LocalNavItem>개요</Styled.LocalNavItem>
          <Styled.LocalNavItem>제품사양</Styled.LocalNavItem>
          <Styled.LocalNavItem>구입하기</Styled.LocalNavItem>
        </Styled.LocalNavLinks>
      </Styled.LocalNav>
    </>
  );
};

export default LocalNav;
