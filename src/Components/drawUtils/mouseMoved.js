
import { Body } from "matter-js";
import usePlayerState from "../gameState/usePlayerState";
function mouseMoved(p5) {
    const player = usePlayerState.getState().player
    const position = player.position
    const headingTheta = p5.createVector(p5.mouseX - position.x, p5.mouseY - position.y).heading()
    Body.setAngle(player, headingTheta)
}
export default mouseMoved;