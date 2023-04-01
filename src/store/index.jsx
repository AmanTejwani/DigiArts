import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState , useGlobalState , getGlobalState} = createGlobalState({
    modal:'scale-0',
    showModal: 'scale-0',
    updateModal:'scale-100'
})

export {
    setGlobalState,
    useGlobalState, 
    getGlobalState
}