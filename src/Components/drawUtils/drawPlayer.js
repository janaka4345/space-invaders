import useGameStore from "../gameState/useGameStore";
import usePlayerState from "../gameState/usePlayerState";


export default function drawPlayer(body, p5) {
    // const playerImage = useGameStore.getState().playerImage
    const playerGraphics = usePlayerState.getState().playerGraphic
    const playerShader = usePlayerState.getState().playerShader
    playerGraphics.push();
    playerShader.setUniform('u_time', p5.millis() / 1000.0)
    playerGraphics.rect(0, 0, 5, 5)
    // playerGraphics.background(0, 255, 0)
    // webgl canvas center 0,0 of the image
    // playerGraphics.imageMode(p5.CENTER)
    //
    // playerGraphics.image(playerImage, 0, 0, 70, 70, 0, 0, playerImage.width * 0.25, playerImage.height);
    playerGraphics.pop();

    p5.push()
    p5.imageMode(p5.CENTER);
    p5.translate(body.position.x, body.position.y);
    // //math.pi/2 adsedd dependinfgg on the sprite's orienation at angle 0
    // p5.rotate(body.angle + Math.PI / 2);
    p5.image(playerGraphics, 0, 0, 100, 100, 0, 0, playerGraphics.width, playerGraphics.height)
    p5.pop()
}