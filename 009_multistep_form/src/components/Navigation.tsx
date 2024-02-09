import FormStep from "./FormStep";

const Navigation = ({ formSteps }: { formSteps: string[] }) => {
  return (
    <nav className="box-content my-10 ml-8">
      <ul className="flex flex-col gap-8">
        {formSteps.map((text, index) => {
          return (
            <li key={text}>
              <FormStep index={index + 1} text={text} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
