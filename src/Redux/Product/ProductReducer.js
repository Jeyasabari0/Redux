import { BUY_CAKE, BUY_ICECREAM, ORDER } from "./ActionTypes"

const initialState = { numOfCakes: 10, numOfIceCreams: 10 }
const iniCakesState = { numOfCakes: 10 }
const initialIceCreamsState = { numOfIceCreams: 10 }

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return { ...state, numOfCakes: state.numOfCakes - 1 }
        case BUY_ICECREAM: return { ...state, numOfIceCreams: state.numOfIceCreams - 1 }
        default: return state
    }
}

export const CakesReducer = (state = iniCakesState, action) => {
    switch (action.type) {
        case BUY_CAKE: return { ...state, numOfCakes: state.numOfCakes - action.payload }
        default: return state
    }
}

export const IceCreamsReducer = (state = initialIceCreamsState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return { ...state, numOfIceCreams: state.numOfIceCreams - 1 }
        default: return state
    }
}
