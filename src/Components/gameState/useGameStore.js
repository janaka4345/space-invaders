import { Engine } from 'matter-js';
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
console.log('store ran');
const engine = Engine.create({
    gravity: { x: 0, y: 0, scale: 0 },
    // enableSleeping: true
});
const useGameStore = create(devtools((set) => ({
    cw: 400,
    ch: 400,
    engine,
    backgroundImage: null,
    beetleImage: null,
    playerjetsImage: null,
    playerImage: null,
    projectiles: null,
    enemies: null,
    totalEnemies: 3,
    numOfEnemies: 0,

    setNumOfEnemies: () => set(state => ({
        numOfEnemies: state.numOfEnemies + 1
    })),
    setEnemies: (enemies) => set(state => ({
        totalEnemies: state.totalEnemies + enemies
    }))

    // setWidth: (width) => set((state) => ({
    //     cw: width
    // })),
    // setHeight: (height) => set((state) => ({
    //     ch: height
    // }))


})))
export default useGameStore;