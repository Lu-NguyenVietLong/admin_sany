import React from 'react'
import PropTypes from 'prop-types'

const UpdateProduct = props => {
  return (
    <div className='product-update'>
        <div className="product-update__container">
            <div className="product-update__container__title">
                Update Product
            </div>
            <div className="product-update__container__content">
                <div className="product-update__container__content__item">
                    <div className="product-update__container__content__item__title">
                        Product title
                    </div>
                    <div className="product-update__container__content__item__input">
                        <input />
                    </div>
                </div>

                <div className="product-update__container__content__item">
                    <div className="product-update__container__content__item__title">
                        Price
                    </div>
                    <div className="product-update__container__content__item__input">
                        <input />
                    </div>
                </div>

                <div className="product-update__container__content__item">
                    <div className="product-update__container__content__item__title">
                        Discount
                    </div>
                    <div className="product-update__container__content__item__input">
                        <input />
                    </div>
                </div>

                <div className="product-update__container__content__item">
                    <div className="product-update__container__content__item__title">
                        Amount
                    </div>
                    <div className="product-update__container__content__item__input">
                        <input />
                    </div>
                </div>

                <div className="product-update__container__content__item">
                    <div className="product-update__container__content__item__title">
                        Size
                    </div>
                    <div className="product-update__container__content__item__input">
                        <input />
                    </div>
                </div>
                <div className="product-update__container__content__item">
                    <div className="product-update__container__content__item__title">
                        Description
                    </div>
                    <div className="product-update__container__content__item__input">
                        <input />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

UpdateProduct.propTypes = {}

export default UpdateProduct