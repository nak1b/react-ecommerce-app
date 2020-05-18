import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const ShoppingCart = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingBag className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleCartHidden
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)