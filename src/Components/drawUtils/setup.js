import useStore from "../gameState/useStore";

const ch = useStore.getState().ch
const cw = useStore.getState().cw
function setup(p5) {
    return () => {
        console.log('setup ran');
        p5.createCanvas(cw, ch);
        // p5.image(image, 0, 0)
    };
}
export default setup;