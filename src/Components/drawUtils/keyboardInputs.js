import { Body } from "matter-js";
import useGameState from "../gameState/useGameState";


function keyboardInputs(p5) {
    const player = useGameState.getState().player
    // console.log(p5.keyCode);

    const position = player.position
    if (p5.keyIsDown(65) || p5.keyIsDown(37)) {
        Body.setPosition(player, { x: position.x - 2, y: position.y })
    }
    if (p5.keyIsDown(68) || p5.keyIsDown(39)) {
        Body.setPosition(player, { x: position.x + 2, y: position.y })
    }
    if (p5.keyIsDown(87) || p5.keyIsDown(38)) {
        Body.setPosition(player, { x: position.x, y: position.y - 2 })
    }
    if (p5.keyIsDown(83) || p5.keyIsDown(40)) {
        Body.setPosition(player, { x: position.x, y: position.y + 2 })
    }

}
export default keyboardInputs;
