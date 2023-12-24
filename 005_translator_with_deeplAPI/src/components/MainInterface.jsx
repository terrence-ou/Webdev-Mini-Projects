import Dropdown from "./Dropdown.jsx";
import TextArea from "./TextArea.jsx";

import switchIcon from "../assets/switch_icon.svg";

// move this to independent data
const sourceListItems = ["Detect Language", "English", "Chinese"];
const targetListItems = ["English", "Korean", "German"];

export default function MainInterface(){

  return (
    <div 
      className="w-[70%] h-full pl-8 pr-12 py-uniform_y bg-zinc-200"
    >
      <section
        id="languages"
        className="flex content-center justify-between"
      >
        <div>
          <Dropdown 
            label="Source"
            listItems={sourceListItems}
          />
        </div>
        <button 
          className="focus:outline-none"
        >
          <img 
            className="w-5"
            src={switchIcon} 
            alt="switch icon"/>
        </button>
        <div>
          <Dropdown 
            label="Target"
            listItems={targetListItems}
          />
        </div>
      </section>

      <section id="source">
        <h3>Source Text</h3>
        <TextArea />
      </section>

      <section id="result">
        <h3>Result</h3>
        <p>Language detected:</p>
        <TextArea />
      </section>
    </div>
  )
}
