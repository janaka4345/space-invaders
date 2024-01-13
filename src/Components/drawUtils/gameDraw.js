
import useGameStore from "../gameState/useGameStore";
import drawEnemies from "./drawEnemies";
import drawWalls from "./drawWalls";
import drawPlayer from "./drawPLayer";
import drawProjectiles from "./drawProjectiles";
import drawEnemyProjectiles from "./drawEnemyProjectiles";
import { handleGameLogic } from "../gameUtils/handleGameLogic";

export default function gameDraw(p5) {
    const ch = useGameStore.getState().ch
    const cw = useGameStore.getState().cw
    const image = useGameStore.getState().backgroundImage
    const engine = useGameStore.getState().engine

    return () => {
        p5.background(255, 255, 255);

        p5.image(image, 0, 0, cw, ch, 0, 0, image.width, image.height);
        //draw the world and everythin in it
        engine.world.bodies.forEach((body) => {
            body.label === "enemiesEnter" && drawEnemies(body, p5);
            body.label === "wall" && drawWalls(body, p5)
            body.label === "player" && drawPlayer(body, p5)
            body.label === "projectilesFired" && drawProjectiles(body, p5)
            body.label === "enemyProjectileFired" && drawEnemyProjectiles(body, p5)

        });
        handleGameLogic(p5)

    };
}
