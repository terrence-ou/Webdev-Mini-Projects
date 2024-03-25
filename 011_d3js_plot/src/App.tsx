import Plot from "./components/Plot";
import ScalableAxis from "./components/ScalableAxis";
import "./App.css";

function App() {
  return (
    <>
      <h1>D3js in React</h1>
      <h2>Animated scatter plot</h2>
      <Plot />
      <h2>Scalable Axis</h2>
      <ScalableAxis />
    </>
  );
}

export default App;
