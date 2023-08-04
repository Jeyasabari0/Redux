import React from 'react'
import { Order } from '../Redux/Product/ProductAction'
import { connect } from 'react-redux'
import { BUY_CAKE, BUY_ICECREAM } from '../Redux/Product/ActionTypes'

const ProductContainer = (props) => {
    return (
        <div>
            <div>
                <h2>NO.OF CAKES : {props.numOfCakes}</h2>
                <button onClick={() => { props.Order(BUY_CAKE) }}>BUY CAKE</button>
            </div>
            <div>
                <h2>NO.OF ICECREAMS : {props.numOfIceCreams}</h2>
                <button onClick={() => { props.Order(BUY_ICECREAM) }}>BUY ICECREAMS</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes,
        numOfIceCreams: state.icecream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Order: (PRODUCT_TYPE) => dispatch(Order(PRODUCT_TYPE))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
