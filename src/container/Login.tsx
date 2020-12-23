import React from 'react';
import { Button, Input, Space, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined  } from '@ant-design/icons';

const Login: React.FC = () => {
    const { Title } = Typography;

    return (
        <div>
            <Space direction="vertical">
                <Title>떡볶기획</Title>
                <Input
                    placeholder="Enter your username"
                    prefix={<UserOutlined className="site-form-item-icon" />} />
                <Input.Password
                    placeholder="password"
                    prefix={<LockOutlined />}
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <Button type="primary">로그인</Button>
                <Button type="link">비밀번호를 잊으셨나요?</Button>
                <Button type="link">회원가입</Button>
            </Space>
        </div>
    )
};

export default Login;
