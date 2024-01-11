import { Bodies, Composite } from "matter-js";
import useGameStore from "../gameState/useGameStore";

//create Projectiless

export function addProjectiles() {
    const engine = useGameStore.getState().engine
    // const { position } = usePlayerState.getState().player
    const cw = useGameStore.getState().cw
    const ch = useGameStore.getState().ch
    //Projectiles
    const projectiles = [];
    for (let i = 0; i < 10; i++) {
        projectiles.push(
            Bodies.rectangle(cw + (i + 1) * 10, ch + (i + 1) * 10, 10, 10, {
                // isStatic: true,
                label: "projectiles",
                speedX: 0,
                speedY: -5,
            })
        )
    }
    useGameStore.setState({ projectiles })
    Composite.add(engine.world, [...projectiles]);
}
