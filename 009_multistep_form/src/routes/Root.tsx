import Navigation from "./Navigation";

const Root = () => {
  return (
    <div className="flex w-width h-height bg-white rounded-2xl">
      <aside className="box-border m-[16px] w-[300px] rounded-xl">
        <Navigation />
      </aside>
      <section className="flex-grow"></section>
    </div>
  );
};

export default Root;
