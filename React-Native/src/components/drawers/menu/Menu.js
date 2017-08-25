import React, {PropTypes} from 'react';
import {Container, Content, Text, List, ListItem, Left, Thumbnail, Right, Header, Title, Body} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';

class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>Menu</Title>
                    </Body>
                </Header>
                <Content bounces={false} style={{flex: 1, backgroundColor: '#fff', top: -1}}>
                    <List>
                        <ListItem>
                            <Left>
                                <Icon name="pencil-square-o" size={28}/>
                            </Left>
                            <Body>
                            <Text>Modificar perfil</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-right"/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}


Menu.propTypes = {
    navigator: PropTypes.object
};

export default Menu;