import { Body } from "matter-js";
import useGameState from "../gameState/useGameState";


function keyPressed(p5) {
    const player = useGameState.getState().player
    // console.log(p5.keyCode);

    const position = player.position
    if (p5.keyCode === 65 || p5.keyCode === 37) {
        Body.setPosition(player, { x: position.x - 2, y: position.y })
    }
    if (p5.keyCode === 68 || p5.keyCode === 39) {
        Body.setPosition(player, { x: position.x + 2, y: position.y })
    }
    if (p5.keyCode === 87 || p5.keyCode === 38) {
        Body.setPosition(player, { x: position.x, y: position.y - 2 })
    }
    if (p5.keyCode === 83 || p5.keyCode === 40) {
        Body.setPosition(player, { x: position.x, y: position.y + 2 })
    }

}
export default keyPressed;


// import { useMemo, useEffect } from "react"; // Import necessary hooks from the React library

// export function useKeyboard() {
//     const keyboard = useMemo(() => ({}), []); // Create a memoized object to store keyboard state

//     // Event handler for keydown event
//     const keydown = (e) => (keyboard[e.key] = true); // Set the corresponding key in the keyboard object to true when pressed

//     // Event handler for keyup event
//     const keyup = (e) => (keyboard[e.key] = false); // Set the corresponding key in the keyboard object to false when released

//     useEffect(() => {
//         // Add event listeners for keydown and keyup events
//         document.addEventListener("keydown", keydown);
//         document.addEventListener("keyup", keyup);

//         // Clean up the event listeners when the component unmounts
//         return () => {
//             document.removeEventListener("keydown", keydown);
//             document.removeEventListener("keyup", keyup);
//         };
//     });

//     return keyboard; // Return the keyboard object with the current keyboard state
// }