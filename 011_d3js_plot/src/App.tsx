import ScatterPlot from "./components/ScatterPlot";
import ScalableAxis from "./components/ScalableAxis";
import ResizablePlot from "./components/ResizablePlot";
import "./App.css";

function App() {
  return (
    <main>
      <h1>D3.js in React Quick Start</h1>
      <div>
        <h2>Animated scatter plot</h2>
        <ScatterPlot />
        <h2>Scalable Axis</h2>
        <ScalableAxis />
        <h2>Plot Sizing</h2>
        <ResizablePlot />
      </div>
    </main>
  );
}

export default App;
