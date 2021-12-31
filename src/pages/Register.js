import { Card, Col, Modal, Row, Select } from "antd";
import React, { useEffect } from "react";

import { Form, Input, Button } from "antd";
import { useHistory } from "react-router";
import { CheckOutlined, StopOutlined } from "@ant-design/icons";
import { Option } from "antd/lib/mentions";

const Register = () => {
    const fullWidthStyle = { margin: "10px", height: "150px" };
   
    useEffect(() => {

    }, [])
    const loginHandle = (user) => {
        
    };

    const onFinish = (user) => {
        loginHandle(user);
        console.log(user)
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div>
          
                <Row gutter={6}>
                    
                                
                </Row>
            
        </div>
    );
};

export default Register;
