import useGameStore from "../gameState/useGameStore";
import usePlayerState from "../gameState/usePlayerState";
import { addEnemies } from "../objectPool/enemies";
import { addPlayer } from "../objectPool/player";
import { addProjectiles } from "../objectPool/projectiles";
import { addWalls } from "../objectPool/walls";
import enemyFs from "../shaders/enemyFragmentShader";
import enemyVs from "../shaders/enemyVeretexShader";
import playerFs from "../shaders/playerFragmentShader";
import playerVs from "../shaders/playerVeretexShader";


function setup(p5) {
    const ch = useGameStore.getState().ch
    const cw = useGameStore.getState().cw
    const setPlayerGraphic = usePlayerState.getState().setPlayerGraphic
    const setPlayerShader = usePlayerState.getState().setPlayerShader
    const setEnemyGraphic = useGameStore.getState().setEnemyGraphic
    const setEnemyShader = useGameStore.getState().setEnemyShader
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

        //set up enemy graphics
        const enemyGraphic = p5.createGraphics(100, 100, p5.WEBGL)
        const enemyShader = p5.createShader(enemyVs, enemyFs)
        enemyGraphic.shader(enemyShader)
        enemyShader.setUniform("u_resolution", [100, 100]);
        const beetleImage2 = useGameStore.getState().beetleImage
        enemyShader.setUniform("u_image", beetleImage2);
        //add to global state
        setEnemyGraphic(enemyGraphic)
        setEnemyShader(enemyShader)


        addWalls();
        addPlayer()
        addProjectiles()
        addEnemies()
    };
}
export default setup;