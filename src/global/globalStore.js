import { useState } from "react";

const useGlobalState = () => {
    const [state, setState] = useState({ value: '', list: [] });
    const actions = (action) => {
        const { type, paylaod } = action;
        switch (type) {
            case 'setState':
                return setState(paylaod);
            default:
                return state;
        }
    }
    return { state, actions };
}

export default useGlobalState;