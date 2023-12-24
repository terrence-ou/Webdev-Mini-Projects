import Sidebar from "./Sidebar.jsx";
import MainInterface from "./MainInterface.jsx";


export default function Container(){


  return (
    <div className="flex w-[860px] h-[600px] bg-white rounded-xl overflow-hidden">
      <Sidebar />
      <MainInterface />
    </div>
  )
}
