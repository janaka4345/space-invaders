import { Bodies, Composite } from "matter-js";
import useGameStore from "../gameState/useGameStore";

//create Projectiless

export function addProjectiles() {
    const engine = useGameStore.getState().engine
    const numOfEnemies = useGameStore.getState().totalEnemies
    // const { position } = usePlayerState.getState().player
    const cw = useGameStore.getState().cw
    const ch = useGameStore.getState().ch
    //Projectiles
    const projectiles = [];
    const enemyProjectiles = [];
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
    for (let i = 0; i < 5 * numOfEnemies; i++) {
        enemyProjectiles.push(
            Bodies.rectangle(cw + (i + 2) * 20, ch + (i + 2) * 20, 10, 10, {
                // isStatic: true,
                label: "enemyProjectiles",
                speedX: 0,
                speedY: -5,
            })
        )
    }
    useGameStore.setState({ projectiles })
    useGameStore.setState({ enemyProjectiles })
    Composite.add(engine.world, [...projectiles, ...enemyProjectiles]);
}
