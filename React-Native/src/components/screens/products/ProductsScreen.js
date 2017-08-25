import React from 'react';

import { Container, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';

class ProductsScreen extends React.Component {
    static navigatorStyle = {
        navBarHidden: true
    };

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Thumbnail square size={80} source={{ uri: 'https://media.aws.alkosto.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/v/tv-43-plasma-samsung-pl43f4000-5.jpg' }} />
                            <Body>
                            <Text>TV 32</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail square size={80} source={{ uri: 'https://fthmb.tqn.com/MdLny7S7PefeY1vOSNL9o83i11g=/800x500/filters:no_upscale():fill(FFCC00,1)/about/Sasmung-64H5000-Plasma-800-58ea92133df78c51624ae8a3.jpg' }} />
                            <Body>
                            <Text>TV 40</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }

}

export default (ProductsScreen);
