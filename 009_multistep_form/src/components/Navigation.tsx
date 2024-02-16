import FormStep from "./FormStep";

type NavigationPropsType = {
  formSteps: string[];
  currStep: number;
};

const Navigation = ({ formSteps, currStep }: NavigationPropsType) => {
  return (
    <nav className="box-content my-10 ml-8 mobile:ml-0 mobile:my-8 mobile:h-[172px]">
      <ul className="flex flex-col mobile:flex-row mobile:justify-center gap-8 mobile:gap-4">
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
