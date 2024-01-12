import { Bodies, Composite } from "matter-js";
import useGameStore from "../gameState/useGameStore";

//create Projectiless

export function addEnemies() {
    const engine = useGameStore.getState().engine
    // const { position } = usePlayerState.getState().player
    const cw = useGameStore.getState().cw
    const ch = useGameStore.getState().ch
    //Projectiles
    const enemies = [];
    for (let i = 0; i < 10; i++) {
        enemies.push(
            Bodies.rectangle(- i * 120 - 120, - i * 120 - 120, 50, 50, {
                // isStatic: true,
                label: "enemies",
                speedX: 5,
                speedY: 5,
                health: 100,
                restitution: 1,
                friction: 0
            })
        )
    }
    useGameStore.setState({ enemies })
    Composite.add(engine.world, [...enemies]);
}
