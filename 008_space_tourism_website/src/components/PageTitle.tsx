const PageTitle = ({ index, title }: { index: string; title: string }) => {
  return (
    <h3 className="desktop:grow w-full max-w-[1600px] desktop:px-[165px] tablet:px-pagepad mt-[76px] tablet:mt-10 items-start font-barlow-condensed text-h5 tablet:text-h5-tablet tracking-h5 tablet:tracking-h5-tablet text-white">
      <span className="font-bold text-white/25 pr-7">{index}</span>
      {title}
    </h3>
  );
};

export default PageTitle;
