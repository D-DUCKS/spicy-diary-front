import React, {useEffect} from 'react';
import { Button, Input, Space, Typography, Layout } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined  } from '@ant-design/icons';

const Login: React.FC = () => {
    const { Title } = Typography;
    const { Header, Footer, Content } = Layout;

    return (
        <Layout>
            <Header>
                <title>떡볶기획</title>
            </Header>
            <Content>
                <Space direction="vertical" size={100}>
                    <Title>Sign in</Title>
                    <Space direction="vertical" size="small">
                        <Input
                            placeholder="Enter your username"/>
                        <Input.Password
                            placeholder="password"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        <Button type="primary">로그인</Button>
                    </Space>
                    <div>
                        <Button type="link">비밀번호를 잊으셨나요?</Button>
                        <Button type="link">회원가입</Button>
                    </div>
                </Space>
            </Content>
            <Footer>

            </Footer>
        </Layout>
    )
};

export default Login;
