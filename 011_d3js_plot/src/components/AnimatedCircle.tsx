import { animated, useSpring } from "@react-spring/web";

const AnimatedCirle = ({ cx, cy }: { cx: number; cy: number }) => {
  const style = useSpring({
    config: {
      duration: 300,
    },
    cx: cx,
    cy: cy,
    fill: cx > 50 ? "tomato" : "cornflowerblue",
  });

  return <animated.circle {...style} r="2" />;
};

export default AnimatedCirle;
