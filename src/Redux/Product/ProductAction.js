// import { ORDER } from "./ActionTypes"

import { BUY_CAKE } from "./ActionTypes"

export const Order = (PRODUCT_TYPE) => { return { type: PRODUCT_TYPE } }

export const buycakes = (buycount = 1) => { return { type: BUY_CAKE, payload: buycount } }
