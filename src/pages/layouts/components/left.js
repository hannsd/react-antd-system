import React from 'react'
import logo from '../assets/logo.png'
import SideMenu from '../../../pages/../components/sideMenu/sideMenu'

const left = () =>{
    return (
        <div className='left'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <SideMenu/>
        </div>
    )
};

export default left