import { Bodies, Composite } from "matter-js";
import useGameStore from "../gameState/useGameStore";
const engine = useGameStore.getState().engine
const cw = useGameStore.getState().cw
const ch = useGameStore.getState().ch

//create boundary walls

export function addPlayer() {
    //player
    const player = Bodies.rectangle(cw / 2, ch - 60, 50, 50, {
        // isStatic: true,
        label: "player",
    })

    Composite.add(engine.world, [player]);
}
