import useStore from "../gameState/useGameStore";
import { addPlayer } from "../objectPool/player";
import { addWalls } from "../objectPool/walls";

function setup(p5) {
    const ch = useStore.getState().ch
    const cw = useStore.getState().cw
    return () => {
        p5.createCanvas(cw, ch);
        addWalls();
        addPlayer()
    };
}
export default setup;