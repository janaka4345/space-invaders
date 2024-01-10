import { Suspense } from "react";
import "./App.css";
import Canvas from "./Components/Canvas";

function App() {
  return (
    <div>
      <Suspense fallback={<h1>loading...</h1>}>
        <Canvas />
      </Suspense>
    </div>
  );
}
export default App;
