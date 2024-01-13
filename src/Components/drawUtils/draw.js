import { Body } from "matter-js";
import useGameStore from "../gameState/useGameStore";
import keyboardInputs from "./keyboardInputs";
import { addBotEnemy, fireEnemyProjectiles } from "./aiInputs";
import usePlayerState from "../gameState/usePlayerState";
import drawEnemies from "./drawEnemies";
import drawWalls from "./drawWalls";
import drawPlayer from "./drawPLayer";
import drawProjectiles from "./drawProjectiles";
import drawEnemyProjectiles from "./drawEnemyProjectiles";

export default function draw(p5) {
    const ch = useGameStore.getState().ch
    const cw = useGameStore.getState().cw
    const setNumOfEnemies = useGameStore.getState().setNumOfEnemies
    const image = useGameStore.getState().backgroundImage
    const setScore = usePlayerState.getState().setScore
    const totalEnemies = useGameStore.getState().totalEnemies
    const engine = useGameStore.getState().engine
    return () => {
        const numOfEnemies = useGameStore.getState().numOfEnemies
        p5.keyIsPressed ? keyboardInputs(p5) : null;
        p5.background(255, 255, 255);
        if (p5.frameCount % 100 === 0 && numOfEnemies < totalEnemies) {
            addBotEnemy(p5)
            setNumOfEnemies(1)
        }
        if (p5.frameCount % 50 === 0 && numOfEnemies > 0) {
            fireEnemyProjectiles(p5)
        }
        p5.image(image, 0, 0, cw, ch, 0, 0, image.width, image.height);
        engine.world.bodies.forEach((body) => {
            body.label === "enemiesEnter" && drawEnemies(body, p5);
            body.label === "wall" && drawWalls(body, p5)
            body.label === "player" && drawPlayer(body, p5)
            body.label === "projectilesFired" && drawProjectiles(body, p5)
            body.label === "enemyProjectileFired" && drawEnemyProjectiles(body, p5)

        });
        engine.detector.pairs.collisionActive.forEach((pair) => {
            // console.log(pair);
            //reseting the enemy upon collision
            if (pair.bodyA.label === "enemiesEnter" && pair.bodyB.label === "projectilesFired") {
                // pair.bodyA.label = 'enemies'
                // Body.setPosition(pair.bodyA, { x: - Math.random() * 1200 - 120, y: - Math.random() * 1200 - 120 })
                Body.setPosition(pair.bodyB, { x: - Math.random() * 120, y: - Math.random() * 120 })
                // Body.setVelocity(pair.bodyA, { x: 0, y: 0 })
                Body.setVelocity(pair.bodyB, { x: 0, y: 0 })
                //increase score
                setScore(10);
                //decrese enemy health
                pair.bodyA.health -= 20
                pair.bodyB.label = 'projectiles'
            }
            if (pair.bodyB.label === "enemiesEnter" && pair.bodyA.label === "projectilesFired") {
                // pair.bodyA.label = 'enemies'
                // Body.setPosition(pair.bodyA, { x: - Math.random() * 1200 - 120, y: - Math.random() * 1200 - 120 })
                Body.setPosition(pair.bodyA, { x: - Math.random() * 120, y: - Math.random() * 120 })
                // Body.setVelocity(pair.bodyA, { x: 0, y: 0 })
                Body.setVelocity(pair.bodyA, { x: 0, y: 0 })
                //increase score
                setScore(10);
                //decrese enemy health
                pair.bodyB.health -= 20
                pair.bodyA.label = 'projectiles'
            }

        })
    };
}
