import gameDraw from "../drawUtils/gameDraw";
import keyPressed from "../handleInputs/keyPressed";
import mouseMoved from "../handleInputs/mouseMoved";
import mousePressed from "../handleInputs/mousePressed";
import preload from "./preload";
import setup from "./setup";

function sketch(p5) {
    p5.preload = preload(p5);
    p5.setup = setup(p5);
    p5.draw = gameDraw(p5);
    p5.mousePressed = () => mousePressed(p5);
    p5.mouseMoved = () => mouseMoved(p5);
    p5.keyPressed = () => keyPressed(p5);

}
export default sketch;