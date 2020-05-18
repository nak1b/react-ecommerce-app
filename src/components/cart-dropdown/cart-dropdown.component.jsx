import React from 'react'
import { connect } from 'react-redux'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'

const CartDropDown = ({cartItems}) => (
  <div className='cart-dropdown'>
    { cartItems.length ? (
        <div className='cart-items'>
          { cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className='empty-message'>
          Your cart is empty
        </div>
      )
    }
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state)
  }
}

export default connect(mapStateToProps)(CartDropDown)