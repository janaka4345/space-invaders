import { Engine } from 'matter-js';
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
const engine = Engine.create({
    gravity: { x: 0, y: 0, scale: 0 },
    // enableSleeping: true
});
const useGameStore = create(devtools((set) => ({
    cw: 400,
    ch: 400,
    engine,
    enemyGraphic: null,
    enemyShader: null,
    backgroundImage: null,
    beetleImage: null,
    playerjetsImage: null,
    playerImage: null,
    projectiles: null,
    enemies: null,
    totalEnemies: 3,
    numOfEnemies: 0,
    enemyProjectiles: null,

    setNumOfEnemies: (num) => set(state => ({
        numOfEnemies: state.numOfEnemies + num
    })),
    setEnemies: (enemies) => set(state => ({
        totalEnemies: state.totalEnemies + enemies
    }))
    ,
    setWidth: (width) => set((state) => ({
        cw: width
    })),
    setHeight: (height) => set((state) => ({
        ch: height
    })),
    setEnemyGraphic: (graphics) => set({
        enemyGraphic: graphics
    }),
    setEnemyShader: (shader) => set({
        enemyShader: shader
    })


})))
export default useGameStore;