import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, Row } from 'reactstrap';

class Dashboard extends Component {

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i><strong>Jumbotron</strong>
                                <div className="card-header-actions">
                                    <a href="https://reactstrap.github.io/components/jumbotron/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                                        <small className="text-muted">docs</small>
                                    </a>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Jumbotron>
                                    <h1 className="display-3">Hello, world!</h1>
                                    <p className="lead">
                                        لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                                    </p>
                                </Jumbotron>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i><strong>Jumbotron</strong>
                                <small> fluid</small>
                            </CardHeader>
                            <CardBody>
                                <Jumbotron fluid>
                                    <Container fluid>
                                        <h1 className="display-3">Fluid jumbotron</h1>
                                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                                    </Container>
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
