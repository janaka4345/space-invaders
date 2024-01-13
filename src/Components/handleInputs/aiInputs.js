import { Body } from "matter-js";
import usePlayerState from "../gameState/usePlayerState";
import useGameStore from "../gameState/useGameStore";




function addBotEnemy(p5) {
    const ch = useGameStore.getState().ch
    const cw = useGameStore.getState().cw
    const enemies = useGameStore.getState().enemies
    const enemy = enemies.find(enemy => enemy.label === 'enemies')
    if (enemy != undefined) {
        Body.setPosition(enemy, { x: cw / 2 + Math.cos(p5.frameCount) * 150, y: ch / 2 + Math.sin(p5.frameCount) * 150 });
        // Body.setVelocity(enemy, { x: Math.random() * 5 - 2.5, y: Math.random() * 5 - 2.5 });
        enemy.label = 'enemiesEnter'

    }

}
function fireEnemyProjectiles(p5) {
    const enemies = useGameStore.getState().enemies
    const player = usePlayerState.getState().player
    const enemyProjectiles = useGameStore.getState().enemyProjectiles
    // console.log(enemies);
    enemies.forEach(enemy => {
        if (enemy.label === 'enemiesEnter') {
            const enemyPosition = enemy.position
            // player position vector relative to the enemy 
            const relPlayerVector = p5.createVector(player.position.x - enemyPosition.x, player.position.y - enemyPosition.y)
            //heading relative to enemy
            const heading = { thetaX: Math.cos(relPlayerVector.heading()), thetaY: Math.sin(relPlayerVector.heading()) }
            //get a projectile from the pool
            const getEnemyProjectile = enemyProjectiles.find(enemyProjectile => enemyProjectile.label === 'enemyProjectiles')
            if (getEnemyProjectile != undefined) {
                //spawn new bullet in a enemy size +5 pixel radii circle
                Body.setPosition(getEnemyProjectile, { x: enemyPosition.x + heading.thetaX * 55, y: enemyPosition.y + heading.thetaY * 55 });
                //shooting the projectile in that direction
                Body.setVelocity(getEnemyProjectile, { x: heading.thetaX * 5, y: heading.thetaY * 5 });
                getEnemyProjectile.label = 'enemyProjectileFired'

            }

        }
    })

}
export { addBotEnemy, fireEnemyProjectiles };
