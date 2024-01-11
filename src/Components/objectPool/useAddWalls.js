import { Bodies, Composite } from "matter-js";
import useGameStore from "../gameState/useGameStore";
import { useRef } from "react";
const engine = useGameStore.getState().engine
const cw = useGameStore.getState().cw
const ch = useGameStore.getState().ch

//create boundary walls

export default function useAddWalls() {
    const t = useRef(0)
    //top wall
    const topWall = Bodies.rectangle(cw / 2, -10, cw, 20, {
        isStatic: true,
        label: "wall",
    })
    //left wall
    const leftWall = Bodies.rectangle(-10, ch / 2, 20, ch, {
        isStatic: true,
        label: "wall",
    })
    //bottom wall
    const bottomWall = Bodies.rectangle(cw / 2, ch + 10, cw, 20, {
        isStatic: true,
        label: "wall",
    })
    //right wall
    const rightWall = Bodies.rectangle(cw + 10, ch / 2, 20, ch, {
        isStatic: true,
        label: "wall",
    })


    Composite.add(engine.world, [leftWall, rightWall, bottomWall]);
}
