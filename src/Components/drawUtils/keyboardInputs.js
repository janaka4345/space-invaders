import { Body } from "matter-js";
import usePlayerState from "../gameState/usePlayerState";


function keyboardInputs(p5) {
    const player = usePlayerState.getState().player
    const speedX = usePlayerState.getState().playerVelocityX
    const speedY = usePlayerState.getState().playerVelocityY
    // console.log(p5.keyCode);

    const position = player.position
    if (p5.keyIsDown(65) || p5.keyIsDown(37)) {
        Body.setPosition(player, { x: position.x - speedX, y: position.y })
    }
    if (p5.keyIsDown(68) || p5.keyIsDown(39)) {
        Body.setPosition(player, { x: position.x + speedX, y: position.y })
    }
    if (p5.keyIsDown(87) || p5.keyIsDown(38)) {
        Body.setPosition(player, { x: position.x, y: position.y - speedY })
    }
    if (p5.keyIsDown(83) || p5.keyIsDown(40)) {
        Body.setPosition(player, { x: position.x, y: position.y + speedY })
    }

}
export default keyboardInputs;
