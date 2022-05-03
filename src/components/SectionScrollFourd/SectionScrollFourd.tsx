import * as Styled from "./styled";

interface Props {}

const SectionScrollFourd = (props: Props) => {
  return (
    <>
      <Styled.ScrollSection id="scroll-section-3">
        <Styled.MidMessege>
          <Styled.Strong>Retina Mug</Styled.Strong>
          <br />
          아이디어를 광활하게 펼칠
          <br />
          아름답고 부드러운 음료 공간.
        </Styled.MidMessege>

        <Styled.BlendImg src="img/blend-image-2.jpg" />

        <Styled.CanvasCaption className="canvas-caption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt expedita
          quis ullam eum nihil alias provident culpa impedit ab quibusdam,
          dolorum illum fugit tempora temporibus, explicabo magni blanditiis
          esse sed dolor odit accusamus voluptatem. Quod architecto
          necessitatibus eaque qui perferendis nobis laborum esse, fugiat nisi
          neque atque, iure doloremque? Sint nam incidunt eos architecto magni
          qui natus maiores porro quo dolore itaque placeat, possimus sit quam
          velit. Id amet ab iure quia asperiores sed consectetur, obcaecati qui
          repudiandae quisquam reiciendis inventore voluptatum vitae? Officiis,
          assumenda eos obcaecati nam sunt cum quam laudantium necessitatibus
          recusandae pariatur quis vero sit. Optio, beatae.
        </Styled.CanvasCaption>
      </Styled.ScrollSection>
    </>
  );
};

export default SectionScrollFourd;
