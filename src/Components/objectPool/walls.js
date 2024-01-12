import { Bodies, Composite } from "matter-js";
import useGameStore from "../gameState/useGameStore";
const engine = useGameStore.getState().engine
const cw = useGameStore.getState().cw
const ch = useGameStore.getState().ch

//create boundary walls

export function addWalls() {
    //top wall
    const topWall = Bodies.rectangle(cw / 2, -10, cw, 20, {
        isStatic: true,
        label: "wall",
        restitution: 1,
        friction: 0

    })
    //left wall
    const leftWall = Bodies.rectangle(-10, ch / 2, 20, ch, {
        isStatic: true,
        label: "wall",
        restitution: 1,
        friction: 0
    })
    //bottom wall
    const bottomWall = Bodies.rectangle(cw / 2, ch + 10, cw, 20, {
        isStatic: true,
        label: "wall",
        restitution: 1,
        friction: 0
    })
    //right wall
    const rightWall = Bodies.rectangle(cw + 10, ch / 2, 20, ch, {
        isStatic: true,
        label: "wall",
        restitution: 1,
        friction: 0
    })


    Composite.add(engine.world, [leftWall, rightWall, bottomWall, topWall]);
}
