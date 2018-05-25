import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Button, Row, Col, Card, Progress, Timeline, Collapse } from 'antd';
import './home.less'
import {Chart, Axis, Tooltip, Geom} from "bizcharts";
const Panel = Collapse.Panel;
const { Meta } = Card;
const text = `
  小猪佩奇是一个可爱的但是有些小专横的小猪。她已经五岁了，与她的猪妈妈，猪爸爸，和弟弟乔治生活在一起。故事内容多数环绕日常生活。
`;
const data = [
    { genre: '一月', sold: 275, income: 2300 },
    { genre: '二月', sold: 115, income: 667 },
    { genre: '三月', sold: 120, income: 982 },
    { genre: '四月', sold: 350, income: 5271 },
    { genre: '五月', sold: 115, income: 667 },
    { genre: '六月', sold: 120, income: 982 },
    { genre: '七月', sold: 350, income: 5271 },
    { genre: '八月', sold: 150, income: 3710 },
    { genre: '九月', sold: 115, income: 667 },
    { genre: '十月', sold: 120, income: 982 },
    { genre: '十一月', sold: 115, income: 667 },
    { genre: '十二月', sold: 120, income: 982 }
];
// 定义度量
const cols = {
    sold: { alias: '销售量' },
    genre: { alias: '游戏种类' }
};

const customPanelStyle = {
    background: '#fff',
    border: 0,
    overflow: 'hidden',
    marginTop:20
};


class home extends Component{
    render(){
        return (
            <div className={'mainView'}>
                <Row gutter={16}>
                    <Col  xl={6}  className={'col'}>
                        <Card title="邮件" bordered={false}>123</Card>
                    </Col>
                    <Col  xl={6}   className={'col'}>
                        <Card title="消息" bordered={false}>234</Card>
                    </Col>
                    <Col  xl={6}  className={'col'}>
                        <Card title="购物车" bordered={false}>1123</Card>
                    </Col>
                    <Col  xl={6}  className={'col'}>
                        <Card title="收藏" bordered={false}>223</Card>
                    </Col>
                </Row>

                <Row gutter={16} style={{marginTop:16}}>
                    <Col  xl={18}  className={'col'} >
                        <Chart  height={400} width={1150} data={data} scale={cols} style={{backgroundColor:'#fff'}}>
                            <Axis name="genre" />
                            <Axis name="sold" />
                            <Tooltip />
                            <Geom type="interval" position="genre*sold" color="genre" />
                        </Chart>
                    </Col>
                    <Col  xl={6}  className={'col'}>
                        <Card
                            hoverable
                            style={{ height: 406,overflow:'hidden' }}
                            cover={<img alt="example" src="http://pic.qqtn.com/up/2014-5/14005706974117750.jpg" style={{overflow:'hidden',height:305}}/>}
                        >
                            <Meta
                                title="admin"
                                description="2018/05/18"
                            />
                        </Card>
                    </Col>
                </Row>

                <Row gutter={16} style={{marginTop:16}}>
                    <Col  xl={8}  className={'col'} >
                        <div style={{backgroundColor:'#fff',height:400}} className={'smWarp'}>
                            <p>项目进度</p>
                            <div className={'view'}>
                                <div>
                                    <p>项目一</p>
                                    <Progress type="circle" percent={75} />
                                </div>
                                <div>
                                    <p>项目二</p>
                                    <Progress type="circle" percent={25} />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col  xl={8}  className={'col'}>
                        <div style={{backgroundColor:'#fff',height:400}} className={'centern'}>
                            <p>项目流程</p>
                            <Timeline>
                                <Timeline.Item style={{backgroundColor:'#Fff'}}>项目创建于 2018-05-25</Timeline.Item>
                                <Timeline.Item>项目开发事件于 2018-05-25</Timeline.Item>
                                <Timeline.Item>项目测试于 2018-05-25</Timeline.Item>
                                <Timeline.Item>项目上线于 2018-05-25</Timeline.Item>
                            </Timeline>
                        </div>
                    </Col>
                    <Col  xl={8}  className={'col'}>
                        <div style={{backgroundColor:'#fff',height:400}} className={'right'}>
                            <p>项目说明</p>
                            <Collapse bordered={false} defaultActiveKey={['1']}>
                                <Panel header="第一项" key="1" style={customPanelStyle}>
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="第二项" key="2" style={customPanelStyle}>
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="第三项" key="3" style={customPanelStyle}>
                                    <p>{text}</p>
                                </Panel>
                            </Collapse>
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }

    handleRouter = () => {
        console.log(this.props.history);
        this.props.history.push('/login')
    }
}

export default withRouter(home);