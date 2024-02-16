import { subPlanType } from "../routes/SelectPlan";

type TogglePropsType = {
  subPlan: subPlanType;
  handleChangeBill: () => void;
};

const ButtonText = ({ text }: { text: string }) => {
  return <p className="md font-medium text-denim">{text}</p>;
};

/* The body of the Toggle element */
const Toggle = ({ subPlan, handleChangeBill }: TogglePropsType) => {
  const buttonPos: string =
    subPlan.billPeriod === "monthly" ? "left-1" : "left-5";
  return (
    <div className="flex justify-center items-center h-12 bg-very-light-gray my-8 rounded-lg">
      <ButtonText text="Monthly" />
      <label
        htmlFor="subType"
        className="mx-6 hover:cursor-pointer"
        onClick={() => handleChangeBill()}
      >
        <span className="block relative py-1 w-9 h-5 rounded-full bg-denim">
          <span
            className={
              "absolute w-3 h-3 bg-white rounded-full duration-100" +
              " " +
              buttonPos
            }
          ></span>
        </span>
      </label>
      <input
        type="checkbox"
        className="appearance-none"
        id="subType"
        name="yearly"
        checked={subPlan.billPeriod === "yearly"}
        readOnly
      />
      <ButtonText text="Yearly" />
    </div>
  );
};

export default Toggle;
