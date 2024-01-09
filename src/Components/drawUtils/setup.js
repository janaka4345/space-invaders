import useStore from "../gameState/useGameStore";

const ch = useStore.getState().ch
const cw = useStore.getState().cw
function setup(p5) {
    return () => {
        p5.createCanvas(cw, ch);
    };
}
export default setup;