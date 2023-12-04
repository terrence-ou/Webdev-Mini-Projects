import { styled } from "styled-components";


// Styles
const Box = styled.div`
  border-radius: 10px;
  overflow: hidden;
`

const Img = styled.img`
   width:100%;
   height:100%;
   object-fit:cover;
   transition: 400ms;
   border-radius: 10px;
   filter: grayscale(${props => props.$grayscale}) opacity(${props => props.$opacity});
`


export default function MemberCard({ img_source, selected, mouseIn, mouseOut }) {

  let [grayscale, opacity] = [80, 0.5];

  if (selected === undefined || selected === true) {
    [grayscale, opacity] = [0, 1.0];
  }

  return (
    <Box>
      <Img
        src={img_source}
        onMouseOver={mouseIn}
        onMouseOut={mouseOut}
        selected={selected}
        $grayscale={grayscale}
        $opacity={opacity}
      />
    </Box>
  );
}
