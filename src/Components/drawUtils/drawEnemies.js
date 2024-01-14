import { Body } from "matter-js"
import useGameStore from "../gameState/useGameStore"

const setNumOfEnemies = useGameStore.getState().setNumOfEnemies
export default function drawEnemies(body, p5) {

    if (body.health === 0) {
        body.label = 'enemies'
        Body.setPosition(body, { x: - Math.random() * 1200 - 120, y: - Math.random() * 1200 - 120 })
        Body.setVelocity(body, { x: 0, y: 0 })
        body.health = 100
        setNumOfEnemies(-1)
        return;
    }
    // p5.fill(255, 0, 0);
    p5.push();
    p5.fill(255, 0, 0);
    // p5.rectMode(p5.CENTER);
    // p5.rotate(body.angle);
    p5.quad(
        body.vertices[0].x,
        body.vertices[0].y,
        body.vertices[1].x,
        body.vertices[1].y,
        body.vertices[2].x,
        body.vertices[2].y,
        body.vertices[3].x,
        body.vertices[3].y
    );

    p5.pop();

    p5.push()
    p5.fill(0, 255, 0);
    p5.textSize(32);
    p5.text(body.health, body.vertices[0].x, body.vertices[0].y)
    p5.pop()

}