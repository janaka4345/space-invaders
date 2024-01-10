import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
console.log('game state ran');

const usePlayerState = create(devtools((set) => ({
    player: null,
    playerState: 'Idle',
    playerVelocityX: 5,
    playerVelocityY: 5,
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
export default usePlayerState;