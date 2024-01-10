import useStore from "../gameState/useGameStore";
import { addWalls } from "../objectPool/walls";

const ch = useStore.getState().ch
const cw = useStore.getState().cw
function setup(p5) {
    return () => {
        p5.createCanvas(cw, ch);
        addWalls();
    };
}
export default setup;