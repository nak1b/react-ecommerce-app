import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const ShoppingCart = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingBag className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
)

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleCartHidden
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)