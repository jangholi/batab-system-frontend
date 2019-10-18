import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Jumbotron, Row } from 'reactstrap';
import axios from "axios/index";
import { Cookies } from 'react-cookie';

class Dashboard extends Component {
    componentDidMount(){

        const cookies = new Cookies();
        let auth_token = cookies.get('token')
        console.log('auth_token', auth_token)

        axios({
            method: 'get',
            url: 'https://batab-api-batab.fandogh.cloud/users/program',
            headers: {
                'Authorization': ' JWT ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1LCJ1c2VybmFtZSI6Im1hcmphbjAxMTEiLCJleHAiOjE1NzA4MzczMjcsImVtYWlsIjoibWFyamFuLmphbmdob2xpQGdtYWlsLmNvbSJ9.BIlb-Az31pxUlbu7DWA7DPP3KooH1v8DoxDIM30byBg"
            }
        }).then(data => {
            this.props.history.push('/dashboard')
            console.log('success', data)
        }).catch(error => {
            // toast.error("خطایی رخ داده است.")
            console.log('error', error)
        });
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i><strong>هفته اول</strong>
                            </CardHeader>
                            <CardBody>
                                <Jumbotron>
                                    {/*<h1 className="display-3">Hello, world!</h1>*/}
                                    <p className="lead">
                                        لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                                    </p>
                                </Jumbotron>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
