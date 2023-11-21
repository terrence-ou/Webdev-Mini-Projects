
export default function MemberCard({img_source, selected, mouseIn, mouseOut, yShift}){

  let [grayscale, opacity] = [80, 50];
  if (selected === undefined || selected === true){
    [grayscale, opacity] = [0, 100];
    }

  return (
    <div className="box" style={{transform: `translateY(${yShift}px)`}}>
      <img src={img_source} onMouseOver={mouseIn} onMouseOut={mouseOut}
          style={{filter:`grayscale(${grayscale}%) opacity(${opacity}%)`}}/>
    </div>
  )
}
