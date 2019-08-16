import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series: [{
                name: 'Gases',
                data: [
                    {
                        name: 'Argon',
                        y: 0.9,
                        color: '#3498db'
                    },
                    {
                        name: 'Nitrogen',
                        y: 78.1,
                        color: '#9b59b6'
                    },
                    {
                        name: 'Oxygen',
                        y: 20.9,
                        color: '#2ecc71'
                    },
                    {
                        name: 'Trace Gases',
                        y: 0.1,
                        color: '#f1c40f'
                    }
                ]
            }]
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    login(){
        this.props.history.push('/dashboard')
        console.log('state login', this.state);
    }

    render() {
        return (
            <div className="app flex-row align-items-center authbg">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="5">
                            <CardGroup>
                                <Card className="p-4 login-card">
                                    <CardBody>
                                        <Form>
                                            <h3 className='medium-font'>ورود</h3>
                                            <p className="text-muted font13">ورود به حساب</p>
                                            <InputGroup className="mb-3 ltr">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-user"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" onChange={this.onChange} name={'username'} placeholder="نام کاربری" autoComplete="username" value={this.state.username} />
                                            </InputGroup>
                                            <InputGroup className="mb-4 ltr">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-lock"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="password" onChange={this.onChange} name={'password'} placeholder="کلمه عبور" autoComplete="current-password" value={this.state.password}/>
                                            </InputGroup>
                                            <Button className='medium-font' color="success" block onClick={this.login.bind(this)}>ورود</Button>
                                            <p className="text-center font12 mt-15">
                                                <span>ثبت‌نام نکرده‌اید؟</span>
                                                <Link to='/register'>&nbsp;ثبت‌نام&nbsp;</Link>
                                            </p>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;
