import React, {useState} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const mainNav = [
    {
        name: "Dashboard",
        path: "/"
    },
    {
        name: "Products",
        path: "/Catalog"
    },
    {
        name: "Add products",
        path: "/products"
    },
    {
        name: "Categories",
        path: "/categories"
    },
    {
        name: "Users",
        path: "/users"
    }
  ]

const Header = () => {
  const { pathname } = useLocation()


  const activeMenu = mainNav.findIndex(e => e.path === pathname)


  return (
    <div className='header'>
        <div className="header__container">
            <div className="header__container__title">ADMIN</div>
            <div className="header__container__menu">
            {    mainNav.map((menuItem, index) => (
                    <Link to={menuItem.path}>
                        <div key={index} className={`header__container__menu__item ${activeMenu===index ? 'active--menu': ''}`} >
                                <div className="header__container__menu__item__title">
                                    {menuItem.name}
                                </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header