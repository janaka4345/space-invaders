import { Bodies, Composite } from "matter-js";
import useGameStore from "../gameState/useGameStore";
import usePlayerState from "../gameState/usePlayerState";

//create player

export function addPlayer() {
    const engine = useGameStore.getState().engine
    const cw = useGameStore.getState().cw
    const ch = useGameStore.getState().ch
    //player
    const player = Bodies.rectangle(cw / 2, ch - 60, 50, 50, {
        isStatic: true,
        label: "player",
    })
    usePlayerState.setState({ player })
    Composite.add(engine.world, [player]);
}
