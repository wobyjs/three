import { useContext,  } from "woby"
import { threeContext } from "./useThree"

export const useWidth = () => useContext(threeContext)['width']
