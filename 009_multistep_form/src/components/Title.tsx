type titlePropsType = {
  title: string;
  description: string;
};

const Title = ({ title, description }: titlePropsType) => {
  return (
    <div>
      <h1 className="text-heading mobile:text-heading-mobile font-bold mb-3 mobile:mb-2">
        {title}
      </h1>
      <p className="text-grey text-lg leading-body-lg mb-10">{description}</p>
    </div>
  );
};

export default Title;
