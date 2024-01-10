import { Engine } from 'matter-js';
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
console.log('game state ran');
const useGameStore = create(devtools((set) => ({
    playerVelocityX: 0,
    playerVelocityY: 0,
    setPlayerVelocity: (velocity) => set((state) => ({
        playerVelocityX: state.playerVelocityX + velocity.x,
        playerVelocityY: state.playerVelocityY + velocity.y
    }))



})))
export default useGameStore;