import { useRef } from "react";
import { animated, useSpring } from "@react-spring/web";

const AnimatedCirle = ({ cx, cy }: { cx: number; cy: number }) => {
  const coord = useRef<number[]>([cx, cy]);
  const style = useSpring({
    config: {
      duration: 300,
    },
    from: {
      cx: coord.current[0],
      cy: coord.current[1],
      fill: cx > 50 ? "tomato" : "cornflowerblue",
    },
    to: { cx: cx, cy: cy, fill: cx > 50 ? "tomato" : "cornflowerblue" },
  });

  return <animated.circle {...style} r="2" />;
};

export default AnimatedCirle;
