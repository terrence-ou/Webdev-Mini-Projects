import { useState } from "react";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Navigation from "../components/Navigation";
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

// The body of the Root element
const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currLocation = location.pathname.split("/").slice(-1)[0];

  const subscriptionForm = useAppSelector(
    (state: RootState) => state.subscriptionFormReducer
  );

  // State and functions handling form navigation
  const [currStep, setCurrStep] = useState<number>(getCurrStep(currLocation));

  function toNextStep(): void {
    // first check if all user information fields completed
    if (currStep === 0 && !checkInfoCompletion()) return;
    setCurrStep((prevStep) => prevStep + 1);
    const nextPath = stepToPath(formSteps[currStep + 1]);
    navigate(nextPath);
  }

  function toPrevStep(): void {
    const prevPath = stepToPath(formSteps[currStep - 1]);
    setCurrStep((prevStep) => prevStep - 1);
    navigate(prevPath);
  }

  function toSubmit(): void {
    setCurrStep((prevStep) => prevStep + 1);
    navigate("completed");
  }

  function checkInfoCompletion(): boolean {
    if (
      subscriptionForm.name === undefined ||
      subscriptionForm.email === undefined ||
      subscriptionForm.phone === undefined
    ) {
      return false;
    }
    return true;
  }

  return (
    <div className="box-border flex w-width h-height bg-white rounded-2xl">
      <aside className="box-border m-[16px] mr-0 w-[300px] rounded-xl bg-desktop bg-center bg-cover">
        <Navigation formSteps={formSteps} currStep={currStep} />
      </aside>
      <section className="flex-grow flex flex-col justify-between mx-20 mt-14 mb-8">
        <Outlet />
        <div className="flex flex-row-reverse justify-between font-medium text-lg">
          {currStep < formSteps.length - 1 && (
            <Button text="Next Step" type="next" onClick={toNextStep} />
          )}
          {currStep === formSteps.length - 1 && (
            <Button text="Confirm" type="confirm" onClick={toSubmit} />
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
