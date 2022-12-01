import React from 'react'
import { Icon } from '@iconify/react';
import BarCharts from '../components/BarCharts'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
        <div className='dashboard__container__header'>
          <div className='dashboard__container__header__title'>
            Dashboard
          </div>
        </div>
        <div className='dashboard__container__statistical'>
          <div className="dashboard__container__statistical__item">
            <div className="dashboard__container__statistical__item__left">
              <Icon icon="ph:currency-circle-dollar-light" />
            </div>
            <div className="dashboard__container__statistical__item__right">
              <p>Total Sales</p>
              <p>59,334,333đ</p>
            </div>
          </div>
          <div className="dashboard__container__statistical__item">
            <div className="dashboard__container__statistical__item__left">
              <Icon icon="icon-park-twotone:transaction-order" />
            </div>
            <div className="dashboard__container__statistical__item__right">
              <p>Total Orders</p>
              <p>107</p>
            </div>
          </div>
          <div className="dashboard__container__statistical__item">
            <div className="dashboard__container__statistical__item__left">
              <Icon icon="ph:currency-circle-dollar-light" />
            </div>
            <div className="dashboard__container__statistical__item__right">
              <p>Total products</p>
              <p>203</p>
            </div>
          </div>
        </div>
        <div className="dashboard__container__chart">
          <div className="dashboard__container__chart__title">
            Biểu đồ số sản phẩm theo loại
          </div>
          <BarCharts />
        </div>
      </div> 
    </div>
  )
}

export default Dashboard