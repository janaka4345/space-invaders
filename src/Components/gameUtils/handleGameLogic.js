import useGameStore from "../gameState/useGameStore";
import { addBotEnemy, fireEnemyProjectiles } from "../handleInputs/aiInputs";
import keyboardInputs from "../handleInputs/keyboardInputs";
import handleCollisions from "./handleCollisions";

const totalEnemies = useGameStore.getState().totalEnemies
const setNumOfEnemies = useGameStore.getState().setNumOfEnemies
export function handleGameLogic(p5) {
    //respawn enemies every 100 frames
    const numOfEnemies = useGameStore.getState().numOfEnemies
    p5.keyIsPressed ? keyboardInputs(p5) : null;
    if (p5.frameCount % 100 === 0 && numOfEnemies < totalEnemies) {
        addBotEnemy(p5)
        setNumOfEnemies(1)
    }
    //shoot enemy projectile every  frames
    if (p5.frameCount % 50 === 0 && numOfEnemies > 0) {
        fireEnemyProjectiles(p5)
    }

    handleCollisions(p5)

}