import { Switch } from "@headlessui/react";
import React from "react";

type SwitchProps = {
  switchOn: boolean;
  setSwitchOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeSwitch = ({
  switchOn,
  setSwitchOn,
}: SwitchProps): React.JSX.Element => {
  return (
    <div className="flex gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        className={`w-5 h-5 duration-75 ${
          switchOn ? "stroke-white" : "stroke-gray-600"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>
      <Switch
        checked={switchOn}
        onChange={setSwitchOn}
        className="bg-gray-600 box-border relative inline-flex h-6 w-12 py-[6px] shrink-0 cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        <span
          aria-hidden="true"
          className={`${switchOn ? "translate-x-[6px]" : "translate-x-[30px]"}
            pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        className={`w-5 h-5 duration-75 ${
          !switchOn ? "stroke-white" : "stroke-gray-600"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    </div>
  );
};

export default ThemeSwitch;
