import { styled } from "styled-components";
import NormalImage from "../assets/normal.png";
import SponsorImage from "../assets/premium.png";

const GallerySection = styled.section`
  position: relative;
  width: 40%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.$bgImage});
  overflow: hidden;

  & header{
    color: black;
    margin-top: 4.5rem;
  }

  & h2{
    margin: 0px;
    font-weight: 800;
    font-size: 1.7rem;
  }

  & h3{
    margin: 0px;
    margin-bottom: 0.1rem;
    font-weight: 400;
    font-size: 1.2rem;

  }
`


export default function GalleryImage({ userGroup }){

  const bgImage = userGroup === "sponsor" ? SponsorImage : NormalImage;
  const fontColor = userGroup === "sponsor" ? "white" : "black";

  return (
    <GallerySection $bgImage={bgImage} $fontColor={fontColor}>
      <header>
        <h3>Welcome to</h3>
        <h2>Nara Gallery</h2>
      </header>
    </GallerySection>
  );
}
