import completedIcon from "../assets/icon-thank-you.svg";

const Completed = () => {
  return (
    <div className="flex flex-col items-center w-[450px] mobile:w-full py-10">
      <img className="w-20 mb-8" src={completedIcon} alt="thank you icon" />
      <h1 className="mb-4 text-heading font-bold text-denim">Thank you!</h1>
      <p className="text-lg text-grey text-center mobile:px-4">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default Completed;
