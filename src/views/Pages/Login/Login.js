import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from "axios/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    login(){
        var loginObj = {
            username: this.state.username,
            password: this.state.password,
        }
        if(this.validateLogin()){
            axios({
                method: 'post',
                url: 'https://batab-api-batab.fandogh.cloud/users/login',
                data: loginObj,

            }).then(() => {
                this.props.history.push('/dashboard')
            }).catch(function(error) {
                // if (error && error.response && error.response.data && error.response.data.non_field_errors[0] === 'Unable to log in with provided credentials.'){
                //     toast.error("نام کاربری یا کلمه ‌عبور اشتباه است")
                // } else {
                //     toast.error("خطایی رخ داده است")
                // }
            });
        }
    }
    validateLogin(){
        var validate = false;
        if(this.state.username){
            validate = true
        } else {
            validate = false
            toast.success("لطفا نام کاربری را وارد کنید.",{className: 'medium-font'});
            return
        }
        if(this.state.password){
            validate = true
        } else {
            validate = false
            toast.success("لطفا کلمه عبور را وارد کنید.",{className: 'medium-font'});
            return
        }

        return validate
    }

    render() {
        return (
            <div className="app flex-row align-items-center authbg">
                <Container>
                    <ToastContainer />
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
                                                <Input type="text" onChange={this.onChange} name={'username'} placeholder="نام کاربری"  />
                                            </InputGroup>
                                            <InputGroup className="mb-4 ltr">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-lock"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="password" onChange={this.onChange} name={'password'} placeholder="کلمه عبور" />
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
