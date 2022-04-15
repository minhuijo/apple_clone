import * as Styled from "./styled";

interface Props {
  page: number;
}

const SectionScrollThrid = ({ page }: Props) => {
  return (
    <>
      <Styled.ScrollSection id="scroll-section-2">
        <Styled.ScrollMessage
          display={page === 2 ? "flex" : "none"}
          className="messageA"
        >
          <Styled.Message>
            <Styled.Small>편안한 촉감</Styled.Small>
            입과 하나 되다
          </Styled.Message>
        </Styled.ScrollMessage>
        <Styled.ScrollDescMessageA
          display={page === 2 ? "block" : "none"}
          className="messageB"
        >
          <p>
            편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를
            하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그,
            AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고
            오롯이 당신과 음료만 남게 되죠.
          </p>
          <Styled.DescPin className="pinB" />
        </Styled.ScrollDescMessageA>
        <Styled.ScrollDescMessageB
          display={page === 2 ? "block" : "none"}
          className="messageC"
        >
          <p>
            디자인 앤 퀄리티 오브 스웨덴,
            <br /> 메이드 인 차이나
          </p>
          <Styled.DescPin className="pinC" />
        </Styled.ScrollDescMessageB>
      </Styled.ScrollSection>
    </>
  );
};

export default SectionScrollThrid;
