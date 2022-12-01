import React from 'react'
import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom'
const Products = () => {
  return (
    <div className='products'>
        <div className="products__container">
            <div className="products__container__title">
                Products
            </div>
            <div className="products__container__content">
                <div className="products__container__content__filter">
                    <select>
                        <option>All</option>
                    </select>
                </div>
                <div className="products__container__content__list">
                    {
                        [...Array(5)].map((product, index) => (
                            <div key={index} className="products__container__content__list__item">
                                <div className="products__container__content__list__item__wrapper">
                                    <div className="products__container__content__list__item__wrapper__image">
                                        <img src='http://web-api-chuthuong.herokuapp.com/public/products/20220503065602-ao-hoodie-5-1.jpg' alt='' />
                                    </div>
                                    <div className="products__container__content__list__item__wrapper__name">
                                        Ao thun mac sieu dep {index}
                                    </div>
                                    <div className="products__container__content__list__item__wrapper__price">399,000đ</div>
                                    <div className="products__container__content__list__item__wrapper__option">
                                        <Link to={`/category/${index}`}>
                                            <div className="products__container__content__list__item__wrapper__option__item">
                                                <Icon icon="material-symbols:edit" />
                                            </div>
                                        </Link>
                                        <div className="products__container__content__list__item__wrapper__option__item">
                                            <Icon icon="fa6-regular:trash-can" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products