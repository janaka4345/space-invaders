import useStore from "../gameState/useGameStore";
// import { addPlayer } from "../objectPool/player";
// import { addProjectiles } from "../objectPool/useAddProjectiles";
// import { addWalls } from "../objectPool/useAddWalls";

function setup(p5) {
    const ch = useStore.getState().ch
    const cw = useStore.getState().cw
    return () => {
        p5.createCanvas(cw, ch);
        // addWalls();
        // addPlayer()
        // addProjectiles()
    };
}
export default setup;