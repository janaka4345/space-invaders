import useGameStore from "../gameState/useGameStore";
import usePlayerState from "../gameState/usePlayerState";
import { addEnemies } from "../objectPool/enemies";
import { addPlayer } from "../objectPool/player";
import { addProjectiles } from "../objectPool/projectiles";
import { addWalls } from "../objectPool/walls";


function setup(p5) {
    const ch = useGameStore.getState().ch
    const cw = useGameStore.getState().cw
    const setPlayerGraphic = usePlayerState.getState().setPlayerGraphic
    return () => {
        p5.createCanvas(cw, ch);
        const playerGraphic = p5.createGraphics(100, 100, p5.WEBGL)
        setPlayerGraphic(playerGraphic)
        addWalls();
        addPlayer()
        addProjectiles()
        addEnemies()
    };
}
export default setup;