import { Body } from "matter-js"
import useGameStore from "../gameState/useGameStore"

const setNumOfEnemies = useGameStore.getState().setNumOfEnemies
export default function drawEnemies(body, p5) {
    const enemyGraphic = useGameStore.getState().enemyGraphic
    const enemyShader = useGameStore.getState().enemyShader
    if (body.health === 0) {
        body.label = 'enemies'
        Body.setPosition(body, { x: - Math.random() * 1200 - 120, y: - Math.random() * 1200 - 120 })
        Body.setVelocity(body, { x: 0, y: 0 })
        body.health = 100
        setNumOfEnemies(-1)
        return;
    }
    // p5.fill(255, 0, 0);

    enemyGraphic.push();
    enemyGraphic.rect(0, 0, 5, 5,)
    enemyShader.setUniform('u_time', p5.millis() / 1000.0)
    enemyGraphic.pop()
    // p5.fill(255, 0, 0);
    // // p5.rectMode(p5.CENTER);
    // // p5.rotate(body.angle);
    // p5.quad(
    //     body.vertices[0].x,
    //     body.vertices[0].y,
    //     body.vertices[1].x,
    //     body.vertices[1].y,
    //     body.vertices[2].x,
    //     body.vertices[2].y,
    //     body.vertices[3].x,
    //     body.vertices[3].y
    // );
    // p5.pop();
    p5.push()
    p5.imageMode(p5.CENTER);
    p5.translate(body.position.x, body.position.y)
    p5.rotate(body.angle)
    p5.image(enemyGraphic, 0, 0, 100, 100, 0, 0, enemyGraphic.width, enemyGraphic.height)
    p5.pop()

}