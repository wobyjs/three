import { useContext,  } from "woby"
import { threeContext } from "./useThree"


export const useCamera = () => useContext(threeContext).camera
