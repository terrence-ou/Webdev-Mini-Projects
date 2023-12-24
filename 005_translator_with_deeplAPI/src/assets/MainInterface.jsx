import Dropdown from "./Dropdown.jsx";
import TextArea from "./TextArea.jsx";

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
            defaultVal={"Detect Language"}
          />
        </div>
        <div>
          <span>ICON</span>
        </div>
        <div>
          <Dropdown 
            label="Target"
            defaultVal={"Chinese"}
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
