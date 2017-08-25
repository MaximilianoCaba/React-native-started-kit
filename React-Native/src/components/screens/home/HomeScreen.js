import React from 'react';

import {
    Container, Header, Title, Content,
    Footer, FooterTab, Button,
    Left, Right, Body, Icon, Text
} from 'native-base';


class HomeScreen extends React.Component {
    static navigatorStyle = {
        navBarHidden: true
    };

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>

                    <Body>
                    <Title>Barra</Title>
                    </Body>
                </Header>

                <Content padder>
                    <Button >
                        <Text>Chat</Text>
                    </Button>
                    <Button >
                        <Text>Login</Text>
                    </Button>
                    <Button >
                        <Text>Register</Text>
                    </Button>
                </Content>
            </Container>
        );
    }

}

export default (HomeScreen);