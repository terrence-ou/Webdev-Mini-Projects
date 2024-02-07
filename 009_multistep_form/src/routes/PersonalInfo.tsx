import Input from "../components/Input";
import Title from "../components/Title";

const PersonalInfo = () => {
  return (
    <div>
      <Title
        title="Personal Info"
        description="Please provide your name, email addressm and phone number."
      />
      <form className="flex flex-col gap-6">
        <Input
          inputName="name"
          label="Name"
          type="text"
          placeHolder="e.g. Stephen King"
        />{" "}
        <Input
          inputName="email"
          label="Email Address"
          type="email"
          placeHolder="e.g. stephenking@lorem.com"
        />{" "}
        <Input
          inputName="phone"
          label="Phone Number"
          type="tel"
          placeHolder="e.g. +1 234 567 890"
        />{" "}
      </form>
    </div>
  );
};

export default PersonalInfo;
