import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import './sideMenu.less'
import menuConfig from '../../pages/config/menu'

const { SubMenu } = Menu;

class sideMenu extends Component{
    state={
        key:[]
    };

    onSelect = ({key}) =>{
        this.props.history.push(key);
    };

    render(){
        return(
            <Menu mode="inline" theme="dark" onSelect={this.onSelect} selectedKeys={this.state.keys}>
                {menuConfig.map((item,i)=>
                    item.list && item.list.length > 0 ?
                        <SubMenu key={item.key} title={<span><span className={'font icon-' +item.icon}/><span>{item.title}</span></span>}>
                            {item.list.map((listItem,ii)=>
                                <Menu.Item key={item.key+listItem.key}>
                                    <span>{listItem.title}</span>
                                </Menu.Item>
                            )}
                        </SubMenu>
                        :
                        <Menu.Item key={item.key}>
                            <span className={'font icon-' +item.icon}></span>
                            <span>{item.title}</span>
                        </Menu.Item>
                )}
            </Menu>
        )
    }
}

export default withRouter(sideMenu);