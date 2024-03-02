const Progress = ({ percentage }: { percentage: string }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gray-60"> </div>
      <span
        className="absolute top-0 left-0 h-[2px] bg-gray-0 duration-100"
        style={{ width: percentage + "%" }}
      >
        {""}
      </span>
    </div>
  );
};

export default Progress;
