type ContentAreaProps = {
  label: string;
  icon?: string;
  onIconClick?: () => void;
  children?: JSX.Element;
};

const ContentArea = ({
  label,
  icon,
  onIconClick,
  children,
}: ContentAreaProps) => {
  return (
    <div className="flex-1 flex flex-col border-gray-300 dark:border-gray-600 border-l overflow-auto">
      <section className="flex justify-between h-10 bg-gray-200 dark:bg-gray-900 px-4">
        <p className="leading-10 text-header-md font-bold tracking-[2px] text-gray-500">
          {label}
        </p>
        {icon && (
          <button onClick={onIconClick}>
            <img src={icon} alt="preview icon" />
          </button>
        )}
      </section>
      {children}
    </div>
  );
};

export default ContentArea;
