import { Bodies, Composite } from "matter-js";
import useGameStore from "../gameState/useGameStore";
import usePlayerState from "../gameState/usePlayerState";
// import useProjectilesState from "../gameState/useProjectilesState";

//create Projectiless

export function addProjectiles() {
    const engine = useGameStore.getState().engine
    // const { position } = usePlayerState.getState().player
    // const cw = useGameStore.getState().cw
    // const ch = useGameStore.getState().ch
    //Projectiles
    const projectiles = [];
    for (let i = 0; i < 10; i++) {
        projectiles.push(
            Bodies.rectangle(400 / 2, 400 / 2, 10, 10, {
                isStatic: true,
                label: "projectiles",
            })
        )
    }
    useGameStore.setState({ projectiles })
    Composite.add(engine.world, [...projectiles]);
}
