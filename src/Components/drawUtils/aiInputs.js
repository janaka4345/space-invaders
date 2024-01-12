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
        Body.setVelocity(enemy, { x: Math.random() * 5 - 2.5, y: Math.random() * 5 - 2.5 });
        enemy.label = 'enemiesEnter'

    }

}
function fireEnemyProjectiles() {
    const enemies = useGameStore.getState().enemies
    const player = usePlayerState.getState().player
    const enemyProjectiles = useGameStore.getState().enemyProjectiles
    // console.log(enemies);
    enemies.forEach(enemy => {
        if (enemy.label === 'enemiesEnter') {
            const enemyPosition = enemy.position
            const playerPosition = player.position
            const getEnemyProjectile = enemyProjectiles.find(enemyProjectile => enemyProjectile.label === 'enemyProjectiles')
            if (getEnemyProjectile != undefined) {
                Body.setPosition(getEnemyProjectile, { x: enemyPosition.x + 10, y: enemyPosition.y + 10 });
                Body.setVelocity(getEnemyProjectile, { x: 2, y: 2 });
                getEnemyProjectile.label = 'enemyProjectileFired'

            }

        }
    })

}
export { addBotEnemy, fireEnemyProjectiles };
