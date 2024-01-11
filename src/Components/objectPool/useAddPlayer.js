import { Bodies, Composite } from "matter-js";
import useGameStore from "../gameState/useGameStore";
import usePlayerState from "../gameState/usePlayerState";
import { useRef } from "react";

//create boundary walls

export default function useAddPlayer() {
    const t = useRef(0)
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
