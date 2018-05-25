import React, { Component } from 'react'
import Left from './components/left'
import Right from './components/right'
import './layout.less'
// import Cookies from 'js-cookie'

class layout extends Component {
    logout = () =>{
        // Cookies.remove('JSESSIONID', { path: '/' })
        // Cookies.remove('userName', { path: '/' })
        // this.props.history.replace('/login')
    };

    render() {
        return (
            <div className='Layouts_wrap clear clearFix'>
                <Left />
                <Right logout={this.logout} />
            </div>
        )
    }
}

export default layout;