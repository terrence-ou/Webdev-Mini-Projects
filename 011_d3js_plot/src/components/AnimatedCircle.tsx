import { animated, useSpring } from "@react-spring/web";

const AnimatedCirle = ({ cx, cy }: { cx: number; cy: number }) => {
  const style = useSpring({
    config: {
      duration: 500,
    },
    cx: cx,
    cy: cy,
    fill: cx > 250 ? "tomato" : "cornflowerblue",
  });

  return <animated.circle {...style} r="7" />;
};

export default AnimatedCirle;
