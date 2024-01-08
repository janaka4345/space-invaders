import { ReactP5Wrapper } from "@p5-wrapper/react";
export default function Canvas() {
  return (
    <div>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
}
function sketch(p5) {
  p5.preload = preload(p5);
  p5.setup = setup(p5);
  p5.draw = draw(p5);
  p5.mousePressed = mousePressed(p5);
}
function preload(p5) {}
function setup(p5) {
  return () => {
    p5.createCanvas(400, 400);
  };
}
function draw(p5) {
  return () => {
    p5.background(255, 0, 0);
  };
}
function mousePressed(p5) {
  return () => {
    console.log(p5);
  };
}
