export type ButtonPropsType = {
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

const NavButton = ({ onClick, disabled, children }: ButtonPropsType) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
        <g
          stroke={disabled ? "#A8A8A8" : "#000"}
          fill="none"
          fillRule="evenodd"
        >
          {children}
        </g>
      </svg>
    </button>
  );
};

export default NavButton;
