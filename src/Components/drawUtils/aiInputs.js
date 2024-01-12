import { Body } from "matter-js";
import usePlayerState from "../gameState/usePlayerState";
import useGameStore from "../gameState/useGameStore";


function aiInputs(p5) {
    const ch = useGameStore.getState().ch
    const cw = useGameStore.getState().cw
    const enemies = useGameStore.getState().enemies



    const enemy = enemies.find(enemy => enemy.label === 'enemies')
    if (enemy != undefined) {


        Body.setPosition(enemy, { x: cw / 2 + Math.cos(p5.frameCount) * 150, y: ch / 2 + Math.sin(p5.frameCount) * 150 });
        Body.setVelocity(enemy, { x: Math.random() * 5 - 2.5, y: Math.random() * 5 - 2.5 });
        //check movement boundary and move the object accordingly
        // if ((p5.keyIsDown(65) || p5.keyIsDown(37)) && position.x - 25 > 0) {
        //     Body.setPosition(player, { x: position.x - speedX, y: position.y })
        // }
        // if ((p5.keyIsDown(68) || p5.keyIsDown(39)) && position.x + 25 < cw) {
        //     Body.setPosition(player, { x: position.x + speedX, y: position.y })
        // }
        // if ((p5.keyIsDown(87) || p5.keyIsDown(38)) && position.y - 25 > 0) {
        //     Body.setPosition(player, { x: position.x, y: position.y - speedY })
        // }
        // if ((p5.keyIsDown(83) || p5.keyIsDown(40)) && position.y + 25 < ch) {
        //     Body.setPosition(player, { x: position.x, y: position.y + speedY })
        // }
        // if (p5.keyIsDown(32)) {
        //     console.log('j');
        //     const projectiles = useGameStore.getState().projectiles

        //     const { position } = usePlayerState.getState().player
        //     const getProjectile = projectiles.find(projectile => projectile.label === 'projectiles')
        //     console.log(getProjectile.id);
        //     Body.setPosition(getProjectile, { x: position.x, y: position.y - 35 }, { updateVelocity: false })
        //     Body.setVelocity(getProjectile, { x: 0, y: - 5 })
        enemy.label = 'enemiesEnter'
        // }
    }


}
export default aiInputs;
