import { Body } from "matter-js"
import useGameStore from "../gameState/useGameStore"
import usePlayerState from "../gameState/usePlayerState"
//
const engine = useGameStore.getState().engine
const setScore = usePlayerState.getState().setScore
// const setHealth = usePlayerState.getState().setHealth

export default function handleCollisions(p5) {
    engine.detector.pairs.collisionActive.forEach((pair) => {
        //reseting the projectiles upon collision with  enemy
        if ((pair.bodyA.label === "enemiesEnter" && pair.bodyB.label === "projectilesFired")) {
            Body.setPosition(pair.bodyB, { x: - Math.random() * 120, y: - Math.random() * 120 })
            Body.setVelocity(pair.bodyB, { x: 0, y: 0 })
            //increase score
            setScore(10);
            //decrese enemy health
            pair.bodyA.health -= 20
            pair.bodyB.label = 'projectiles'
        }
        if (pair.bodyB.label === "enemiesEnter" && pair.bodyA.label === "projectilesFired") {
            Body.setPosition(pair.bodyA, { x: - Math.random() * 120, y: - Math.random() * 120 })
            Body.setVelocity(pair.bodyA, { x: 0, y: 0 })
            //increase score
            setScore(10);
            //decrese enemy health
            pair.bodyB.health -= 20
            pair.bodyA.label = 'projectiles'
        }
        //enemy projectile and player collision
        if ((pair.bodyA.label === "player" && pair.bodyB.label === "enemyProjectileFired")) {
            Body.setPosition(pair.bodyB, { x: - Math.random() * 120 - 120, y: - Math.random() * 120 - 120 })
            Body.setVelocity(pair.bodyB, { x: 0, y: 0 })

            //decrese enemy health
            pair.bodyA.health -= 5
            // setHealth(-5)

            pair.bodyB.label = 'enemyProjectiles'
        }
        if ((pair.bodyB.label === "player" && pair.bodyA.label === "enemyProjectileFired")) {
            Body.setPosition(pair.bodyA, { x: - Math.random() * 120 - 120, y: - Math.random() * 120 - 120 })
            Body.setVelocity(pair.bodyA, { x: 0, y: 0 })

            //decrese enemy health
            pair.bodyB.health -= 5
            // setHealth(-5)

            pair.bodyA.label = 'enemyProjectiles'
        }
        //missed enemy projectiles colliding with the wall
        if ((pair.bodyA.label === "wall" && pair.bodyB.label === "enemyProjectileFired")) {
            Body.setPosition(pair.bodyB, { x: - Math.random() * 120 - 120, y: - Math.random() * 120 - 120 })
            Body.setVelocity(pair.bodyB, { x: 0, y: 0 })
            pair.bodyB.label = 'enemyProjectiles'
        }
        //missed  projectiles colliding with the wall
        if ((pair.bodyA.label === "wall" && pair.bodyB.label === "projectilesFired")) {
            Body.setPosition(pair.bodyB, { x: - Math.random() * 120 - 120, y: - Math.random() * 120 - 120 })
            Body.setVelocity(pair.bodyB, { x: 0, y: 0 })
            pair.bodyB.label = 'projectiles'
        }


    })
}