import { ReactP5Wrapper } from "@p5-wrapper/react";
import sketch from "./drawUtils/sketch";
import { Bodies, Composite, Engine, Runner } from "matter-js";
import { useEffect } from "react";
import useStore from "./gameState/useStore";

export default function Canvas() {
  const engine = useStore((state) => state.engine);
  const ch = useStore((state) => state.ch);
  const cw = useStore((state) => state.cw);
  useEffect(() => {
    console.log("effect ran");
    // create runner
    const runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
    // console.log(runner);

    //create boundary walls
    Composite.add(engine.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, {
        isStatic: true,
        label: "wall",
      }),
      Bodies.rectangle(-10, ch / 2, 20, ch, {
        isStatic: true,
        label: "wall",
      }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, {
        isStatic: true,
        label: "wall",
      }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, {
        isStatic: true,
        label: "wall",
      }),
      Bodies.rectangle(cw / 2, ch / 2, 100, 20, {
        isStatic: true,
        label: "wall",
        angle: Math.PI / 4,
      }),
    ]);

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
