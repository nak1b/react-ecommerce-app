import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addItem } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/custom-button.component'
import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {
  const { price, name, imageUrl } = item

  return (
    <div className='collection-item'>
      <div 
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton 
        inverted
        onClick={() => addItem(item)}>
        Add to Cart
      </CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addItem
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem)