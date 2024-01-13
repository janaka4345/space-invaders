import { Body } from "matter-js"
import useGameStore from "../gameState/useGameStore"
import usePlayerState from "../gameState/usePlayerState"

const engine = useGameStore.getState().engine
const setScore = usePlayerState.getState().setScore

export default function handleCollisions(p5) {
    engine.detector.pairs.collisionActive.forEach((pair) => {
        //reseting the enemy upon collision
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

    })
}