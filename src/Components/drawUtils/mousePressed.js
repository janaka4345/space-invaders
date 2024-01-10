import { Bodies, Composite } from "matter-js";
import useGameStore from "../gameState/useGameStore";
function mousePressed(p5) {
    const engine = useGameStore.getState().engine
    if (
        p5.mouseX > p5.canvas.width ||
        p5.mouseY > p5.canvas.height ||
        p5.mouseX < 0 ||
        p5.mouseY < 0
    ) {
        return null;
    }

    const box = Bodies.rectangle(
        p5.mouseX,
        p5.mouseY,
        10 + Math.random() * 30,
        10 + Math.random() * 30,
        {
            // mass: 10,
            // restitution: 0.9,
            // friction: 0.005,
            // render: {
            //   fillStyle: "#0000ff",
            // },
            label: "box",
        }
    );
    Composite.add(engine.world, [box]);

}
export default mousePressed;