import useGameStore from "../gameState/useGameStore";

const ch = useGameStore.getState().ch
const cw = useGameStore.getState().cw
export default function drawEnemyProjectiles(body, p5) {
    p5.push();
    p5.rectMode(p5.CENTER);
    p5.fill(255, 255, 255);
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
    // setting the velocity of the bullet // due to energy loss bug in matterjs
    // Body.setPosition(body, { x: body.position.x, y: body.position.y + body.speedY })
    //restore the bullet object for reuse
    if (body.position.x < 0 || body.position.y < 0 || body.position.x > cw || body.position.y > ch) {
        body.label = 'enemyProjectiles'
    }

}