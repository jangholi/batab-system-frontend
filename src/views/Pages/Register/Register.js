import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, FormGroup, Form,Label , Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Register extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            gender: '',
            practice_from: '',
            practice_to: '',
            heigth: null,
            weight: null,
            password: '',
            tobacco_consumption: '',
            arthritic_disease: '',
            internal_disease: '',
            history: '',
            hideHistoryDate: true,
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        if(e.target.name === 'history'){
            this.setState({
                hideHistoryDate: e.target.value === 'true' ? false : true
            })
        }
    }
    register(){

        this.validateRegister();
        // var obj = {
        //     "username": "amir",
        //     "email": "a.yaghoobi.dev@gmail.com",
        //     "heigth": 180,
        //     "weight": 75,
        //     "gender": "M",
        //     "practice_from": "2019-08-12",
        //     "practice_to": "2019-09-12",
        //     "password": "asdasdasd123",
        //     "tobacco_consumption": false,
        //     "arthritic_disease": false,
        //     "internal_disease": false
        // }
        // console.log('obj', obj)
        // axios({
        //     method: 'post',
        //     url: 'https://batab-backend-batab.fandogh.cloud/users/',
        //     data: obj,
        //
        // }).then(function (data) {
        //     console.log('success', data)
        // }).catch(function (error) {
        //     console.log('error', error)
        // });



        // console.log('this state:  ', this.state)
        // $.ajax({
        //     url: 'https://batab-backend-batab.fandogh.cloud/users/',
        //     data: obj,
        //     type: "POST",
        //     // headers: {
        //     //     'Content-type': 'application/x-www-form-urlencoded',
        //     //     'accept': 'application/json'
        //     // },
        //     success: (data) => {
        //         console.log('success', data)
        //     },
        //     error: (e) => {
        //         console.log('error', e)
        //     }
        // });
    }
    validateRegister(){
        var validate = false;
        console.log('this state:  ', this.state)
        if(!this.state.username){
            alert('enter username');

        }
    }
    render() {
        return (
            <div className="app align-items-center authbg">
                <Container>
                    <ToastContainer />
                    <Row className="justify-content-center">
                        <Col md="6">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <Form>
                                        <h3 className='medium-font'>ثبت‌نام</h3>
                                        <p className="text-muted font13">حساب خود را ایجاد کنید.</p>
                                        <InputGroup className="mb-3 ltr">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-user"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="text" onChange={this.onChange} name={'username'} placeholder="نام کاربری" />
                                        </InputGroup>
                                        <InputGroup className="mb-3 ltr">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-envelope-o"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="email" onChange={this.onChange} name={'email'} placeholder="ایمیل" />
                                        </InputGroup>
                                        <InputGroup className="mb-3 ltr">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-key"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="password" onChange={this.onChange} name={'password'} placeholder="کلمه عبور" />
                                        </InputGroup>
                                        <InputGroup className="mb-3 ltr">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-key"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="password" onChange={this.onChange} name={'retype-password'} placeholder="تکرار کلمه عبور" />
                                        </InputGroup>
                                        <FormGroup inline>
                                            <label className="text-muted">جنسیت:</label>
                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input onChange={this.onChange} name={'gender'} type="radio" value={'M'}/>
                                                    <span className='ml-1'>مرد</span>
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input onChange={this.onChange} name={'gender'} type="radio" value={'F'}/>
                                                    <span className='ml-1'>زن</span>
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                        <FormGroup inline>
                                            <label className="text-muted">مصرف دخانیات:</label>
                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input onChange={this.onChange} name={'tobacco_consumption'} type="radio" value={true}/>
                                                    <span className='ml-1'>بله</span>
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input onChange={this.onChange} name={'tobacco_consumption'} type="radio" value={false}/>
                                                    <span className='ml-1'>خیر</span>
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                        <FormGroup inline>
                                            <label className="text-muted">سابقه بیماری مفصلی:</label>
                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input onChange={this.onChange} name={'arthritic_disease'} type="radio" value={true}/>
                                                    <span className='ml-1'>بله</span>
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input onChange={this.onChange} name={'arthritic_disease'} type="radio" value={false}/>
                                                    <span className='ml-1'>خیر</span>
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                        <FormGroup inline>
                                            <label className="text-muted">سابقه بیماری داخلی:</label>
                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input onChange={this.onChange} name={'internal_disease'} type="radio" value={true}/>
                                                    <span className='ml-1'>بله</span>
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input onChange={this.onChange} name={'internal_disease'} type="radio" value={false}/>
                                                    <span className='ml-1'>خیر</span>
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                        <FormGroup inline >
                                            <label className="text-muted">سابق تمرین:</label>
                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input type="radio" onChange={this.onChange} name={'history'} value={'true'}/>
                                                    <span className='ml-1'>بله</span>
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input type="radio" onChange={this.onChange} name={'history'} value={'false'} />
                                                    <span className='ml-1'>خیر</span>
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                        <Row hidden = {this.state.hideHistoryDate}>
                                            <InputGroup className="mb-3 ltr col-6">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="fa fa-calendar"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="number" onChange={this.onChange} name={'practice_from'} placeholder="از" />
                                            </InputGroup>
                                            <InputGroup className="mb-3 ltr col-6">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="fa fa-calendar"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="number" onChange={this.onChange} name={'practice_to'} placeholder="تا" />
                                            </InputGroup>
                                        </Row>
                                        <Row>
                                            <InputGroup className="mb-3 ltr col-6">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="fa fa-heart-o"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="number" placeholder="قد" onChange={this.onChange} name={'heigth'} />
                                            </InputGroup>
                                            <InputGroup className="mb-3 ltr col-6">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="fa fa-heart-o"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="number" onChange={this.onChange} name={'weight'} placeholder="وزن" />
                                            </InputGroup>
                                        </Row>
                                        <Button className='medium-font' color="success" block onClick={this.register.bind(this)}>ایجاد حساب</Button>
                                        <p className="text-center font12 mt-15">
                                            <span>ثبت‌نام کرده‌اید؟</span>
                                            <Link to='/login'>&nbsp;ورود&nbsp;</Link>
                                        </p>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Register;
