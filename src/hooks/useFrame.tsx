import { useContext,  $$,  } from "woby"
import { threeContext } from "./useThree"


export const useFrames = () => useContext(threeContext)['frame']
export const useFrame = (fn: () => void) => {
    const fs = $$(useFrames())
    fs.push(fn)
}

