import React, { Component } from 'react';
import FromBox from './component/formBox'
import './login.less'
import { message } from 'antd'

class login extends Component{
    render(){
        return (
            <div className={'Login_wrap'}>
                <div className={'form P_auto'}>
                    <FromBox submit={this.submit}/>
                </div>
            </div>
        )
    }

    submit = (form) => {
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let { userName, password} = values;
                if(userName ==='admin' && password === '123456'){
                    this.props.history.push('/home')
                }else {
                    message.error('账号或密码错误')
                }
            }
        });
    };

}

export default login;