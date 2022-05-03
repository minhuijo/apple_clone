import * as Styled from "./styled";

interface Props {
  page: number;
  currentScene: number;
}

const SectionsScrollFirst = ({ page, currentScene }: Props) => {
  return (
    <>
      <Styled.ScrollSection id="scroll-section-0">
        <Styled.Title>AirMug Pro</Styled.Title>
        <Styled.CanvasElem>
          <Styled.Canvas
            id="video-canvas-0"
            width="1920"
            height="1080"
            style={
              currentScene !== 0 ? { display: "none" } : { display: "block" }
            }
          ></Styled.Canvas>
        </Styled.CanvasElem>

        <Styled.ScrollMessage
          className="messageA"
          display={page === 0 ? "flex" : "none"}
        >
          <Styled.Message>
            온전히 빠져들게 하는
            <br />
            최고급 세라믹
          </Styled.Message>
        </Styled.ScrollMessage>
        <Styled.ScrollMessage
          className="messageB"
          display={page === 0 ? "flex" : "none"}
        >
          <Styled.Message>
            주변 맛을 느끼게 해주는
            <br />
            주변 맛 허용 모드
          </Styled.Message>
        </Styled.ScrollMessage>
        <Styled.ScrollMessage
          className="messageC"
          display={page === 0 ? "flex" : "none"}
        >
          <Styled.Message>
            온종일 편안한
            <br />
            맞춤형 손잡이
          </Styled.Message>
        </Styled.ScrollMessage>
        <Styled.ScrollMessage
          className="messageD"
          display={page === 0 ? "flex" : "none"}
        >
          <Styled.Message>
            새롭게 입가를
            <br />
            찾아온 매혹
          </Styled.Message>
        </Styled.ScrollMessage>
      </Styled.ScrollSection>
    </>
  );
};

export default SectionsScrollFirst;
