import useGameStore from "../gameState/useGameStore";
import usePlayerState from "../gameState/usePlayerState";


export default function drawPlayer(body, p5) {
    const playerImage = useGameStore.getState().playerImage
    const playerGraphics = usePlayerState.getState().playerGraphic
    playerGraphics.push();
    playerGraphics.background(0, 255, 0)
    // rotate the image to match the body rotation
    playerGraphics.rotate(3.14 / 2);
    // webgl canvas center 0,0 of the image
    playerGraphics.imageMode(p5.CENTER)
    //
    playerGraphics.image(playerImage, 0, 0, 70, 70, 0, 0, playerImage.width * 0.25, playerImage.height);
    playerGraphics.pop();

    p5.push()
    p5.imageMode(p5.CENTER);
    p5.translate(body.position.x, body.position.y);
    p5.rotate(body.angle);
    p5.image(playerGraphics, 0, 0, 100, 100, 0, 0, playerGraphics.width, playerGraphics.height)
    p5.pop()
}