import { create } from 'zustand'

const usePlayerState = create((set) => ({
    player: null,
    playerShader: null,
    playerGraphic: null,
    playerState: 'Idle',
    playerVelocityX: 5,
    playerVelocityY: 5,
    score: 0,
    health: 100,
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
    })),
    setScore: (point) => set(state => ({
        score: state.score + point
    })),
    //damage is negative by enemies and positive my health packs
    setHealth: (damage) => set((state) => ({
        health: state.health + damage
    })),
    setPlayerGraphic: (graphic) => set((state) => ({
        playerGraphic: graphic
    })),
    setPlayerShader: (shader) => set(state => ({
        playerShader: shader
    }))

}))
export default usePlayerState;