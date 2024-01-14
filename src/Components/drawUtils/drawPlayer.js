import usePlayerState from "../gameState/usePlayerState";

export default function drawPlayer(body, p5) {
    // const playerHealth = usePlayerState.getState().health
    const score = usePlayerState.getState().score
    p5.push();
    p5.fill(0, 0, 255);
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
    p5.fill(0);
    p5.textSize(32);
    p5.text(body.health, body.vertices[0].x, body.vertices[0].y)
    p5.pop()
    p5.push()
    p5.fill(255, 0, 0);
    p5.textSize(32);
    p5.text(score, body.vertices[1].x, body.vertices[1].y)
    p5.pop()

}