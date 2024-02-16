import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Navigation from "../components/Navigation";
import Button from "../components/Button";
import { RootState } from "../store";

const formSteps: string[] = ["your info", "select plan", "add-ons", "summary"];

// conver the form step to route path
function stepToPath(step: string): string {
  return step.split(" ").join("-");
}

function getCurrStep(currLocation: string): number {
  const currIndex = formSteps.findIndex(
    (step) => stepToPath(step) === currLocation
  );
  return currIndex === -1 ? formSteps.length : currIndex;
}

/* The body of the Root element */
const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currLocation = location.pathname.split("/").slice(-1)[0];
  // State and functions handling form navigation
  const [currStep, setCurrStep] = useState<number>(getCurrStep(currLocation));

  useEffect(
    function updateCurrStep() {
      setCurrStep(getCurrStep(currLocation));
    },
    [currLocation]
  );

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

  function toSubmit(): void {
    setCurrStep((prevStep) => prevStep + 1);
    navigate("completed");
  }

  // Verify personal infomation inputs
  const name = useAppSelector(
    (state: RootState) => state.subscriptionFormReducer.name
  );
  const email = useAppSelector(
    (state: RootState) => state.subscriptionFormReducer.email
  );
  const phone = useAppSelector(
    (state: RootState) => state.subscriptionFormReducer.phone
  );
  function verifyPersonalInfo(): boolean {
    if (name && email && phone) return true;
    return false;
  }

  return (
    <div className="box-border flex mobile:flex-col w-width mobile:w-dvw mobile:min-w-[375px] h-height mobile:h-full mobile:min-h-dvh bg-white rounded-2xl">
      <aside className="box-border m-[16px] mr-0 w-[274px] mobile:w-full mobile:h-[172px] mobile:m-0 rounded-xl mobile:rounded-none bg-desktop mobile:bg-mobile bg-center bg-cover">
        <Navigation formSteps={formSteps} currStep={currStep} />
      </aside>
      <section className="flex-grow flex flex-col justify-between mx-20 mt-14 mb-8 mobile:m-0 mobile:bg-bg">
        <div className="mobile:mx-4 mobile:bg-white mobile:px-5 mobile:py-8 mobile:translate-y-[-70px] mobile:rounded-xl mobile:shadow-lg">
          <Outlet />
        </div>
        <div className="flex flex-row-reverse justify-between font-medium text-lg mobile:bg-white mobile:p-4">
          {currStep < formSteps.length - 1 && (
            <Button
              text="Next Step"
              type="next"
              onClick={toNextStep}
              disabled={!verifyPersonalInfo()}
            />
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
