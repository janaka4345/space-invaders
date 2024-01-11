import { Body } from "matter-js";
import useGameStore from "../gameState/useGameStore";
import usePlayerState from "../gameState/usePlayerState";

function keyPressed(p5) {
    if (p5.keyIsDown(32)) {
        console.log('j');
        const projectiles = useGameStore.getState().projectiles

        const { position } = usePlayerState.getState().player
        const getProjectile = projectiles.find(projectile => projectile.label === 'projectiles')
        console.log(getProjectile.id);
        Body.setPosition(getProjectile, { x: position.x, y: position.y - 35 }, { updateVelocity: false })
        Body.setVelocity(getProjectile, { x: 0, y: - 5 })
        getProjectile.label = 'projectilesFired'
    }

}
export default keyPressed;


