import FormStep from "./FormStep";

type NavigationPropsType = {
  formSteps: string[];
  currStep: number;
};

const Navigation = ({ formSteps, currStep }: NavigationPropsType) => {
  return (
    <nav className="box-content my-10 ml-8">
      <ul className="flex flex-col gap-8">
        {formSteps.map((text, index) => {
          return (
            <li key={text}>
              <FormStep
                index={index + 1}
                text={text}
                isActive={index === currStep}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
