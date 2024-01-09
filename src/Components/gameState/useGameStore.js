import { Engine } from 'matter-js';
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
const engine = Engine.create();
const useGameStore = create(devtools((set) => ({
    cw: 400,
    ch: 400,
    engine,
    backgroundImage: null,
    beetleImage: null,
    playerjetsImage: null,
    playerImage: null


})))
export default useGameStore;