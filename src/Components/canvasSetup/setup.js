import useGameStore from "../gameState/useGameStore";
import usePlayerState from "../gameState/usePlayerState";
import { addEnemies } from "../objectPool/enemies";
import { addPlayer } from "../objectPool/player";
import { addProjectiles } from "../objectPool/projectiles";
import { addWalls } from "../objectPool/walls";
import playerFs from "../shaders/playerFragmentShader";
import playerVs from "../shaders/playerVeretexShader";


function setup(p5) {
    const ch = useGameStore.getState().ch
    const cw = useGameStore.getState().cw
    const setPlayerGraphic = usePlayerState.getState().setPlayerGraphic
    const setPlayerShader = usePlayerState.getState().setPlayerShader
    return () => {
        //main canvas
        p5.createCanvas(cw, ch);
        //set up player graphics
        const playerGraphic = p5.createGraphics(100, 100, p5.WEBGL)
        const playerShader = p5.createShader(playerVs, playerFs)
        playerGraphic.shader(playerShader)
        playerShader.setUniform("u_resolution", [100, 100]);
        const beetleImage = useGameStore.getState().beetleImage
        playerShader.setUniform("u_image", beetleImage);
        //add to global state
        setPlayerGraphic(playerGraphic)
        setPlayerShader(playerShader)


        addWalls();
        addPlayer()
        addProjectiles()
        addEnemies()
    };
}
export default setup;