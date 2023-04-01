import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState , useGlobalState , getGlobalState} = createGlobalState({
    modal:'scale-0',
    showModal: 'scale-0',
    updateModal:'scale-100',
    alert: { show: false, msg: '', color: '' },
    loading: { show: false, msg: '' },
})
const setLoadingMsg = (msg) => {
    const loading = getGlobalState('loading')
    setGlobalState('loading', { ...loading, msg })
}

const setAlert = (msg, color = 'green') => {
setGlobalState('loading', false)
setGlobalState('alert', { show: true, msg, color })
setTimeout(() => {
    setGlobalState('alert', { show: false, msg: '', color })
}, 6000)
}
export {
    setGlobalState,
    useGlobalState, 
    getGlobalState,
    setAlert,
    setLoadingMsg,
}