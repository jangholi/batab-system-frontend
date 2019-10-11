import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, FormGroup, Form,Label , Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
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
            retypePassword: '',
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
        var registerObj = this.createRegisterObj();

        // var testObj = {
        //     "username": "amir1",
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
        if(this.validateRegister()){
            axios({
                method: 'post',
                url: 'https://batab-backend-batab.fandogh.cloud/users/',
                data: registerObj,

            }).then(function () {
                toast.success("حساب شما با موفقیت ایجاد شد.")
            }).catch(function (error) {
                if(error.response.status === 400 && error.response.data.username[0] === "A user with that username already exists."){
                    toast.error("نام کاربری تکراری است. لطفا نام کاربری دیگری را انتخاب کنید")
                } else {
                    toast.error("خطایی رخ داده است.")
                }
            });
        }
    }
    validateRegister(){
        var validate = false;
        if(this.state.username){
            validate = true
        } else {
            validate = false
            toast.success("لطفا نام کاربری را وارد کنید.",{className: 'medium-font'});
            return
        }
        if(this.state.email){
            validate = true
        } else {
            validate = false
            toast.success("لطفا ایمیل را وارد کنید.",{className: 'medium-font'});
            return
        }
        if(this.state.password){
            validate = true
        } else {
            validate = false
            toast.success("لطفا کلمه عبور را وارد کنید.",{className: 'medium-font'});
            return
        }
        if(this.state.retypePassword){
            validate = true
        } else {
            validate = false
            toast.success("لطفا تکرار کلمه عبور را وارد کنید.",{className: 'medium-font'});
            return
        }
        if(this.state.password && this.state.retypePassword && this.state.password !== this.state.retypePassword){
            validate = false
            toast.success("کلمه عبور و تکرار کلمه عبور یکسان نیستند.",{className: 'medium-font'});
            return
        }
        if(this.state.retypePassword){
            validate = true
        } else {
            validate = false
            toast.success("لطفا تکرار کلمه عبور را وارد کنید.",{className: 'medium-font'});
            return
        }
        if(this.state.gender){
            validate = true
        } else {
            validate = false
            toast.success("لطفا جنسیت را مشخص کنید.",{className: 'medium-font'});
            return
        }
        if(this.state.tobacco_consumption){
            validate = true
        } else {
            validate = false
            toast.success("لطفا مصرف دخانیات را مشخص کنید.",{className: 'medium-font'});
            return
        }
        if(this.state.arthritic_disease){
            validate = true
        } else {
            validate = false
            toast.success("لطفا سابقه بیماری مفصلی را مشخص کنید.",{className: 'medium-font'});
            return
        }
        if(this.state.internal_disease){
            validate = true
        } else {
            validate = false
            toast.success("لطفا سابقه بیماری داخلی را مشخص کنید.",{className: 'medium-font'});
            return
        }
        if(this.state.history){
            validate = true
        } else {
            validate = false
            toast.success("لطفا سابقه‌ی تمرین را مشخص کنید.",{className: 'medium-font'});
            return
        }
        if(this.state.history && this.state.history === 'true'){
            if(this.state.practice_from){
                validate = true
            } else {
                validate = false
                toast.success("لطفا زمان شروع سابقه‌ی تمرین را وارد کنید.",{className: 'medium-font'});
                return
            }
            if(this.state.practice_to){
                validate = true
            } else {
                validate = false
                toast.success("لطفا زمان پایان سابقه‌ی تمرین را وارد کنید.",{className: 'medium-font'});
                return
            }
        }
        if(this.state.heigth){
            validate = true
        } else {
            validate = false
            toast.success("لطفا قد را وارد کنید.",{className: 'medium-font'});
            return
        }
        if(this.state.weight){
            validate = true
        } else {
            validate = false
            toast.success("لطفا وزن را وارد کنید.",{className: 'medium-font'});
            return
        }

        return validate
    }
    createRegisterObj(){
        var registerObj = {
            username: this.state.username,
            email:  this.state.email,
            heigth: Number(this.state.heigth),
            weight: Number(this.state.weight),
            gender: this.state.gender,
            password: this.state.password,
            tobacco_consumption: !!this.state.tobacco_consumption,
            arthritic_disease: !!this.state.arthritic_disease,
            internal_disease: !!this.state.internal_disease,
        }
        if(this.state.history && this.state.history === 'true'){
            registerObj.practice_from = this.state.practice_from;
            registerObj.practice_to = this.state.practice_to;
        }
        return registerObj
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
                                            <Input type="password" onChange={this.onChange} name={'retypePassword'} placeholder="تکرار کلمه عبور" />
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
