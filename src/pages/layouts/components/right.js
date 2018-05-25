import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Dropdown, Icon, Menu } from 'antd'
import routerConfig from '../../../pages/config/router'

class right extends Component{
    state={
        collapsed:false
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render(){

        const menu = (
            <Menu>
                <Menu.Item>
                    <Link  to="/login">退出账号</Link>
                </Menu.Item>
            </Menu>
        );

        return(
            <div className={'right'}>
                <div className='header clear clearFix'>
                    <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                    <div className='user'>
                        <span className='font icon-touxiang'/>
                        <Dropdown overlay={menu} >
                            <a  style={{fontSize:'14px',cursor:'pointer'}}>
                                admin
                            </a>
                        </Dropdown>
                    </div>
                </div>
                <div className='routeWrap'>
                    {routerConfig.map((item,i)=>
                        <Route key={i} path={item.path} component={item.component} exact/>
                    )}
                </div>
            </div>
        )
    }
}

export default right;