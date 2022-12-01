import React from 'react'
import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom'

const HeaderRow = () => {
  return (
    <div className="header-row">
        <div className="header-row__container">
            <Link to='/login'>
                <div className="header-row__container__logout">
                    <span>Đăng xuất</span>
                    <Icon icon="material-symbols:logout-rounded" />
                </div>
            </Link>
        </div>
    </div>
  )
}

export default HeaderRow