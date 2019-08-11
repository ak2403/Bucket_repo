import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../actions/authentication_action'

class SettingContainer extends Component {

    onPressChange = () => {
        this.props.logout()
    }

    render() {

        return (
            <Container>
                <Header>
                    <Text>Setting</Text>
                </Header>
                <Content>
                    <Button block danger onPress={this.onPressChange}>
                        <Text>Logout</Text>
                    </Button>
                </Content>
            </Container>);
    }

}

const mapStateToProps = props => {
    return {

    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    logout
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer)