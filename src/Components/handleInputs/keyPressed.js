import { Body } from "matter-js";
import useGameStore from "../gameState/useGameStore";
import usePlayerState from "../gameState/usePlayerState";

function keyPressed(p5) {

    if (p5.keyIsDown(32)) {
        const projectiles = useGameStore.getState().projectiles

        const { position, angle } = usePlayerState.getState().player
        const headingVec = { x: Math.cos(angle), y: Math.sin(angle) }
        const getProjectile = projectiles.find(projectile => projectile.label === 'projectiles')
        Body.setPosition(getProjectile, { x: position.x + headingVec.x * 55, y: position.y + headingVec.y * 55 })
        Body.setVelocity(getProjectile, { x: headingVec.x * 5, y: headingVec.y * 5 })
        getProjectile.label = 'projectilesFired'

    }

}
export default keyPressed;


