import { Body } from "matter-js";
import useGameStore from "../gameState/useGameStore";
import keyboardInputs from "./keyboardInputs";
import { addBotEnemy, fireEnemyProjectiles } from "./aiInputs";
import usePlayerState from "../gameState/usePlayerState";

export default function draw(p5) {

    // const engine = useGameStore(state => state.engine)
    const ch = useGameStore.getState().ch
    const cw = useGameStore.getState().cw
    const setNumOfEnemies = useGameStore.getState().setNumOfEnemies
    const image = useGameStore.getState().backgroundImage
    const setScore = usePlayerState.getState().setScore
    const totalEnemies = useGameStore.getState().totalEnemies
    const engine = useGameStore.getState().engine
    return () => {
        const numOfEnemies = useGameStore.getState().numOfEnemies
        p5.keyIsPressed ? keyboardInputs(p5) : null;
        p5.background(255, 255, 255);
        if (p5.frameCount % 100 === 0 && numOfEnemies < totalEnemies) {
            addBotEnemy(p5)
            setNumOfEnemies(1)
        }
        if (p5.frameCount % 50 === 0 && numOfEnemies > 0) {
            fireEnemyProjectiles()
        }
        p5.image(image, 0, 0, cw, ch, 0, 0, image.width, image.height);
        engine.world.bodies.forEach((body) => {
            if (body.label === "enemiesEnter") {
                if (body.health === 0) {
                    body.label = 'enemies'
                    Body.setPosition(body, { x: - Math.random() * 1200 - 120, y: - Math.random() * 1200 - 120 })
                    Body.setVelocity(body, { x: 0, y: 0 })
                    body.health = 100
                    setNumOfEnemies(-1)
                    return;
                }
                // p5.fill(255, 0, 0);
                p5.push();
                p5.fill(255, 0, 0);
                // p5.rectMode(p5.CENTER);
                // p5.rotate(body.angle);
                p5.quad(
                    body.vertices[0].x,
                    body.vertices[0].y,
                    body.vertices[1].x,
                    body.vertices[1].y,
                    body.vertices[2].x,
                    body.vertices[2].y,
                    body.vertices[3].x,
                    body.vertices[3].y
                );
                p5.pop();
            }
            // if (body.label === "box blue") {
            //     // p5.fill(255, 0, 0);
            //     p5.push();
            //     p5.fill(0, 0, 255);
            //     // p5.rectMode(p5.CENTER);
            //     // p5.rotate(body.angle);
            //     p5.quad(
            //         body.vertices[0].x,
            //         body.vertices[0].y,
            //         body.vertices[1].x,
            //         body.vertices[1].y,
            //         body.vertices[2].x,
            //         body.vertices[2].y,
            //         body.vertices[3].x,
            //         body.vertices[3].y
            //     );
            //     p5.pop();
            // }
            // if (body.label === "box pink") {
            //     // p5.fill(255, 0, 0);
            //     p5.push();
            //     p5.fill(255, 0, 255);
            //     // p5.rectMode(p5.CENTER);
            //     // p5.rotate(body.angle);
            //     p5.quad(
            //         body.vertices[0].x,
            //         body.vertices[0].y,
            //         body.vertices[1].x,
            //         body.vertices[1].y,
            //         body.vertices[2].x,
            //         body.vertices[2].y,
            //         body.vertices[3].x,
            //         body.vertices[3].y
            //     );
            //     p5.pop();
            // }
            if (body.label === "wall") {
                p5.push();
                p5.rectMode(p5.CENTER);
                p5.fill(0, 255, 0);
                p5.quad(
                    body.vertices[0].x,
                    body.vertices[0].y,
                    body.vertices[1].x,
                    body.vertices[1].y,
                    body.vertices[2].x,
                    body.vertices[2].y,
                    body.vertices[3].x,
                    body.vertices[3].y
                );
                p5.pop();
            }
            if (body.label === "player") {
                // p5.fill(255, 0, 0);
                p5.push();
                p5.fill(0, 0, 255);
                // p5.rectMode(p5.CENTER);
                // p5.rotate(body.angle);
                p5.quad(
                    body.vertices[0].x,
                    body.vertices[0].y,
                    body.vertices[1].x,
                    body.vertices[1].y,
                    body.vertices[2].x,
                    body.vertices[2].y,
                    body.vertices[3].x,
                    body.vertices[3].y
                );
                p5.pop();
            }
            if (body.label === "projectilesFired") {
                p5.push();
                p5.rectMode(p5.CENTER);
                p5.fill(0, 255, 0);
                p5.quad(
                    body.vertices[0].x,
                    body.vertices[0].y,
                    body.vertices[1].x,
                    body.vertices[1].y,
                    body.vertices[2].x,
                    body.vertices[2].y,
                    body.vertices[3].x,
                    body.vertices[3].y
                );
                p5.pop();
                // setting the velocity of the bullet // due to energy loss bug in matterjs
                // Body.setPosition(body, { x: body.position.x, y: body.position.y + body.speedY })
                //restore the bullet object for reuse
                if (body.position.x < 0 || body.position.y < 0 || body.position.x > cw || body.position.y > ch) {
                    body.label = 'projectiles'
                }
            }
            if (body.label === "enemyProjectileFired") {
                p5.push();
                p5.rectMode(p5.CENTER);
                p5.fill(255, 255, 255);
                p5.quad(
                    body.vertices[0].x,
                    body.vertices[0].y,
                    body.vertices[1].x,
                    body.vertices[1].y,
                    body.vertices[2].x,
                    body.vertices[2].y,
                    body.vertices[3].x,
                    body.vertices[3].y
                );
                p5.pop();
                // setting the velocity of the bullet // due to energy loss bug in matterjs
                // Body.setPosition(body, { x: body.position.x, y: body.position.y + body.speedY })
                //restore the bullet object for reuse
                if (body.position.x < 0 || body.position.y < 0 || body.position.x > cw || body.position.y > ch) {
                    body.label = 'enemyProjectiles'
                }
            }

        });
        engine.detector.pairs.collisionActive.forEach((pair) => {
            // console.log(pair);
            //reseting the enemy upon collision
            if (pair.bodyA.label === "enemiesEnter" && pair.bodyB.label === "projectilesFired") {
                // pair.bodyA.label = 'enemies'
                // Body.setPosition(pair.bodyA, { x: - Math.random() * 1200 - 120, y: - Math.random() * 1200 - 120 })
                Body.setPosition(pair.bodyB, { x: - Math.random() * 120, y: - Math.random() * 120 })
                // Body.setVelocity(pair.bodyA, { x: 0, y: 0 })
                Body.setVelocity(pair.bodyB, { x: 0, y: 0 })
                //increase score
                setScore(10);
                //decrese enemy health
                pair.bodyA.health -= 20
                pair.bodyB.label = 'projectiles'
            }
            if (pair.bodyB.label === "enemiesEnter" && pair.bodyA.label === "projectilesFired") {
                // pair.bodyA.label = 'enemies'
                // Body.setPosition(pair.bodyA, { x: - Math.random() * 1200 - 120, y: - Math.random() * 1200 - 120 })
                Body.setPosition(pair.bodyA, { x: - Math.random() * 120, y: - Math.random() * 120 })
                // Body.setVelocity(pair.bodyA, { x: 0, y: 0 })
                Body.setVelocity(pair.bodyA, { x: 0, y: 0 })
                //increase score
                setScore(10);
                //decrese enemy health
                pair.bodyB.health -= 20
                pair.bodyA.label = 'projectiles'
            }

        })
    };
}
