import { ReactP5Wrapper } from "@p5-wrapper/react";
import sketch from "./drawUtils/sketch";

export default function Canvas() {
  return (
    <div>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
}
