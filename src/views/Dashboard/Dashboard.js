import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Jumbotron, Row } from 'reactstrap';
import axios from "axios/index";
import { Cookies } from 'react-cookie';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            program: []
        }
    }
    componentDidMount(){
        const cookies = new Cookies();
        let auth_token = cookies.get('token')
        axios({
            method: 'get',
            url: 'https://batab-api-batab.fandogh.cloud/users/program',
            headers: {
                'Authorization': ' Bearer ' + auth_token
            }
        }).then(res => {
            this.props.history.push('/dashboard')
            this.setState({
                program: res.data
            })
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
                                <ul className="lead">
                                    {this.state.program.map((prog, key) => (
                                        <li key={key}>{prog}</li>
                                    ))}
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
