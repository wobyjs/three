import { $$, } from "woby";
import { useThree } from "./useThree";
export const useFrames = (v) => useThree('frame', v);
export const useFrame = (fn) => {
    const fs = $$(useFrames());
    fs.push(fn);
    return () => useFrames(fs.filter(item => item !== fn));
};
