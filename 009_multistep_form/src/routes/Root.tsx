import { useState } from "react";
import Navigation from "../components/Navigation";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const formSteps: string[] = ["your info", "select plan", "add-ons", "summary"];

function stepToPath(step: string): string {
  return step.split(" ").join("-");
}

function getCurrStep(currLocation: string): number {
  const currIndex = formSteps.findIndex(
    (step) => stepToPath(step) === currLocation
  );
  return currIndex === -1 ? 0 : currIndex;
}

const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currLocation = location.pathname.split("/").slice(-1)[0];
  const [currStep, setCurrStep] = useState<number>(getCurrStep(currLocation));
  function toNextStep(): void {
    setCurrStep((prevStep) => prevStep + 1);
    const nextPath = stepToPath(formSteps[currStep + 1]);
    navigate(nextPath);
  }
  function toPrevStep(): void {
    const prevPath = stepToPath(formSteps[currStep - 1]);
    setCurrStep((prevStep) => prevStep - 1);
    navigate(prevPath);
  }

  return (
    <div className="box-border flex w-width h-height bg-white rounded-2xl">
      <aside className="box-border m-[16px] mr-0 w-[300px] rounded-xl bg-desktop bg-center bg-cover">
        <Navigation formSteps={formSteps} />
      </aside>
      <section className="flex-grow flex flex-col justify-between mx-20 mt-14 mb-8">
        <Outlet />
        <div className="flex flex-row-reverse justify-between font-medium text-lg">
          {currStep !== formSteps.length - 1 && (
            <Button text="Next Step" type="next" onClick={toNextStep} />
          )}
          {currStep !== 0 && (
            <Button text="Go Back" type="back" onClick={toPrevStep} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Root;
