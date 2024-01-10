import { Engine } from 'matter-js';
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
console.log('game state ran');
// const playerState={
//     Idle:'idle',
//     Walk:'walk',
//     Shoot:'shoot',
//     Dead:'dead'
// }
const useGameStore = create(devtools((set) => ({
    playerState: 'Idle',
    playerVelocityX: 0,
    playerVelocityY: 0,
    setPlayerVelocity: (velocity) => set((state) => ({
        playerVelocityX: state.playerVelocityX + velocity.x,
        playerVelocityY: state.playerVelocityY + velocity.y
    })),
    setWalk: (direction) => set((state) => ({
        playerState: 'Walk',
        playerVelocityX: state.playerVelocityX + direction.x,
        playerVelocityY: state.playerVelocityY + direction.y
    })),
    setShoot: () => set((state) => ({
        playerState: 'Shoot'
    })),
    setDead: () => set((state) => ({
        playerState: 'Dead'
    }))

})))
export default useGameStore;