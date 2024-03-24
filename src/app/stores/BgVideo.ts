import {create} from "zustand";


type BgVideoState = {
    opacity: number;
    setOpacity: (opacity: number) => void;
}

export const useBgVideoStore = create<BgVideoState>(set => ({
    opacity: 0.02,
    setOpacity: (opacity: number) => set(() => ({opacity}))
}));
