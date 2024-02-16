import TextInput from "../components/TextInput";
import Title from "../components/Title";

const PersonalInfo = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <Title
        title="Personal Info"
        description="Please provide your name, email addressm and phone number."
      />
      <form
        className="flex flex-col gap-6"
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <TextInput
          inputName="name"
          label="Name"
          type="text"
          placeHolder="e.g. Stephen King"
        />{" "}
        <TextInput
          inputName="email"
          label="Email Address"
          type="email"
          placeHolder="e.g. stephenking@lorem.com"
        />{" "}
        <TextInput
          inputName="phone"
          label="Phone Number"
          type="tel"
          placeHolder="e.g. +1 234 567 890"
          pattern="^\+?\d{1,3}?\s?\d{3}\s?\d{3}\s?\d{4}$"
        />{" "}
      </form>
    </div>
  );
};

export default PersonalInfo;
