import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buycakes } from '../Redux/Product/ProductAction'

const PayloadProduct = () => {

    const cakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    const [count, setCount] = useState(4)
    return (
        <div>
            <h2>CAKES :{cakes} </h2>
            <input value={count} onChange={e => setCount(e.target.value)} />
            <button onClick={() => { dispatch(buycakes(count)) }}>BUY Cakes</button>
        </div>
    )
}

export default PayloadProduct
