import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import  {toast}  from 'react-toastify';
import authApi from '../api/authApi'

const initStateInput = {
    username: '',
    password: '',
  }

const LogIn = () => {
    const [inputCredentials, setInputCredentials] = useState(initStateInput)

    const handleChangeInput = (e)=> {
        setInputCredentials((prev)=> ({...prev, [e.target.name]: e.target.value}))
      }

    const handleLogin = async(e)=> {
        e.preventDefault()
        try {
            const res =await authApi.login({username: inputCredentials.username, password: inputCredentials.password})
            // const {accessToken, refreshToken, ...other} = res
            // dispatch(setCredentials({
            //   user: other,
            //   token: {
            //     accessToken,refreshToken
            //   }
            // }))
            // setInputCredentials(initStateInput)
            // toast.success('Đăng nhập thành công')
            
            console.log('reslogin',res);
            console.log('inputCredentials',inputCredentials);

        } catch (error) {
            console.log(error);
        }
      }

  return (
    <div className='log-in'>
        <div className="log-in__container">
            <div className="log-in__container__content">
                <div className="log-in__container__content__title">Log In</div>
                <div className="log-in__container__content__form">
                    <div className="log-in__container__content__form__input">
                        <input type="text" onChange={handleChangeInput} value={inputCredentials.username}  name="username" placeholder="Tên đăng nhập của bạn" />
                    </div>
                    <div className="log-in__container__content__form__input">
                        <input type='password' onChange={handleChangeInput} value={inputCredentials.password}  name="password" placeholder="Mật khẩu" />
                    </div>
                        <button onClick={handleLogin} className="log-in__container__content__form__bottom">
                            Đăng nhập
                        </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn