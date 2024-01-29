export default function Img({
  image,
  name,
  extraStyles,
}: {
  image: string;
  name: string;
  extraStyles: string;
}) {
  const key = Math.random().toFixed(4);
  return (
    <img
      key={key}
      className={"animate-fadeIn " + extraStyles}
      src={image}
      alt={`${name} image`}
    />
  );
}
