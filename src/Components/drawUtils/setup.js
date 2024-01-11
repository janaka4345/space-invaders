import useStore from "../gameState/useGameStore";
import { addEnemies } from "../objectPool/enemies";
import { addPlayer } from "../objectPool/player";
import { addProjectiles } from "../objectPool/projectiles";
import { addWalls } from "../objectPool/walls";

function setup(p5) {
    const ch = useStore.getState().ch
    const cw = useStore.getState().cw
    return () => {
        p5.createCanvas(cw, ch);
        addWalls();
        addPlayer()
        addProjectiles()
        addEnemies()
    };
}
export default setup;