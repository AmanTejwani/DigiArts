import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState , useGlobalState , getGlobalState} = createGlobalState({
    modal:'scale-0',
})

export {
    setGlobalState,
    useGlobalState, 
    getGlobalState
}