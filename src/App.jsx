import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import "./style/App.css";
import { Perf } from "r3f-perf";

function App() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 45, near: 0.001, far: 1000 }}>
        <Experience />
        <Perf position={"bottom-right"} />
      </Canvas>
    </div>
  );
}

export default App;
