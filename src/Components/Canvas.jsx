import { ReactP5Wrapper } from "@p5-wrapper/react";
import sketch from "./drawUtils/sketch";
import { Composite, Engine, Runner } from "matter-js";
import { useEffect } from "react";
import useGameStore from "./gameState/useGameStore";

export default function Canvas() {
  const engine = useGameStore((state) => state.engine);
  const ch = useGameStore((state) => state.ch);
  const cw = useGameStore((state) => state.cw);
  // const setWidth = useGameStore((state) => state.setWidth);
  useEffect(() => {
    // create runner
    const runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
    // console.log(runner);

    return () => {
      Runner.stop(runner);
      Composite.clear(engine.world, engine.world.bodies);
      Composite.remove(engine.world, engine.world.bodies);
      Engine.clear(engine);
    };
  }, []);
  return (
    <div>
      <ReactP5Wrapper sketch={sketch} />
      {/* <button onClick={() => setWidth(600)}>change width</button> */}
    </div>
  );
}
