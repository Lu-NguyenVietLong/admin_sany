import React from 'react'

import { BrowserRouter,Routes, Route, useNavigate,Navigate } from 'react-router-dom';
// import Header from './Header'
// import Footer from './Footer'
import Routess from '../routes/Routess' 
import Header from '../components/Header';

// import SignIn from '../pages/SignIn'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogIn from '../page/LogIn';
import HeaderRow from './HeaderRow';

const Layout = () => {
    const user = null
  return (
    <BrowserRouter>
     <ToastContainer autoClose={3000} />
      <Routes>
            <Route path='/login' element={<LogIn />} />
            <Route path="/*" element={user ? (
                <div className='site'>
                    {/* <Header/> */}
                    <Header />
                    <div className="container">
                        <HeaderRow/>
                        <div className="main">
                            <Routess/>
                        </div>
                    </div>
                    {/* <Footer/> */}
                </div>
            ) : <Navigate to='/login' replace={true}/>}/>
      </Routes>
    </BrowserRouter>
)
}


export default Layout