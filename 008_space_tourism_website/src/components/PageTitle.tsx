const PageTitle = ({ index, title }: { index: string; title: string }) => {
  return (
    <h3 className="grow w-full max-w-[1600px] px-[165px] mt-[76px] items-start font-barlow-condensed text-h5 tracking-h5 text-white">
      <span className="font-bold text-white/25 pr-7">{index}</span>
      {title}
    </h3>
  );
};

export default PageTitle;
