/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import "./MemberCard.css";

export default function MemberCard({
  img_source,
  selected,
  mouseIn,
  mouseOut,
}) {
  let [grayscale, opacity] = [80, 50];
  if (selected === undefined || selected === true) {
    [grayscale, opacity] = [0, 100];
  }

  return (
    <div className="box">
      <img
        src={img_source}
        onMouseOver={mouseIn}
        onMouseOut={mouseOut}
        style={{ filter: `grayscale(${grayscale}%) opacity(${opacity}%)` }}
      />
    </div>
  );
}
