import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {signin} from '../../actions/authentication_action'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        display: 'flex',
        flexDirection: 'column'
    }
});

class LoginComponent extends Component {
    constructor(){
        super()
        this.onPressChange = this.onPressChange.bind(this)
    }

    onPressChange(){
        this.props.signin()
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Type the email!"
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Type the password!"
                />
                <Button
                    onPress={this.onPressChange}
                    title="Sign In" />
            </View>
        );
    }
}

const mapStateToProps = props => {
    return {

    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    signin
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)