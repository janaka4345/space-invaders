import useGameStore from "../gameState/useGameStore";

export default function draw(p5) {
    const engine = useGameStore.getState().engine
    const ch = useGameStore.getState().ch
    const cw = useGameStore.getState().cw
    const image = useGameStore.getState().backgroundImage
    return () => {
        p5.background(255, 255, 255);
        p5.image(image, 0, 0, cw, ch, 0, 0, image.width, image.height);
        engine.world.bodies.forEach((body) => {
            if (body.label === "box") {
                // p5.fill(255, 0, 0);
                p5.push();
                p5.fill(255, 0, 0);
                // p5.rectMode(p5.CENTER);
                // p5.rotate(body.angle);
                p5.quad(
                    body.vertices[0].x,
                    body.vertices[0].y,
                    body.vertices[1].x,
                    body.vertices[1].y,
                    body.vertices[2].x,
                    body.vertices[2].y,
                    body.vertices[3].x,
                    body.vertices[3].y
                );
                p5.pop();
            }
            if (body.label === "wall" || body.label === "obstacle") {
                p5.push();
                p5.rectMode(p5.CENTER);
                p5.fill(0, 255, 0);
                p5.quad(
                    body.vertices[0].x,
                    body.vertices[0].y,
                    body.vertices[1].x,
                    body.vertices[1].y,
                    body.vertices[2].x,
                    body.vertices[2].y,
                    body.vertices[3].x,
                    body.vertices[3].y
                );
                p5.pop();
            }
        });
    };
}
