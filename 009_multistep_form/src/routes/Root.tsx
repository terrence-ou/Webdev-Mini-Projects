import Navigation from "../components/Navigation";

const Root = () => {
  return (
    <div className="flex w-width h-height bg-white rounded-2xl">
      <aside className="box-border m-[16px] w-[300px] rounded-xl bg-desktop bg-center bg-cover">
        <Navigation />
      </aside>
      <section className="flex-grow"></section>
    </div>
  );
};

export default Root;
