import { Engine } from 'matter-js';
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
const engine = Engine.create();
const useStore = create(devtools((set) => ({
    cw: 400,
    ch: 400,
    engine,
    // setEngine: (engineRef) => set((state) => ({
    //     engine: engineRef
    // }))

})))
export default useStore;