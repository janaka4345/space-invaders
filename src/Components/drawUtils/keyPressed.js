import { Body } from "matter-js";
import useGameStore from "../gameState/useGameStore";
import usePlayerState from "../gameState/usePlayerState";

function keyPressed(p5) {
    if (p5.keyIsDown(32)) {
        console.log('j');
        const projectiles = useGameStore.getState().projectiles

        const { position } = usePlayerState.getState().player
        const projectile = projectiles.find(projectile => projectile.label === 'projectiles')
        console.log(projectile);
        Body.setPosition(projectile, { x: position.x, y: position.y - 30 })
        projectile.label = 'projectilesFired'
    }

}
export default keyPressed;


