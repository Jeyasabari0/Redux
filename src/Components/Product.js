import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Order } from '../Redux/Product/ProductAction'
import { BUY_CAKE } from '../Redux/Product/ActionTypes'

const Product = () => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>USING Hooks</h1>
      <div>
        <h2>NO.OF CAKES : {numOfCakes} </h2>
        <button onClick={() => { dispatch(Order(BUY_CAKE)) }}>BUY CAKE</button>
      </div>
    </div>
  )
}

export default Product
