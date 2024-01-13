import { ReactP5Wrapper } from "@p5-wrapper/react";
import { Composite, Engine, Runner } from "matter-js";
import { useEffect } from "react";
import useGameStore from "./gameState/useGameStore";
import sketch from "./canvasSetup/sketch";

export default function Canvas() {
  const engine = useGameStore((state) => state.engine);
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
    </div>
  );
}
