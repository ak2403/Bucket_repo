import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginComponent from './components/authentication';
import DashboardContainer from './components/dashboard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { retrieveData } from './actions/authentication_action'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  }
});

class RootContainer extends Component {

  componentDidMount() {
    this.props.retrieveData()
  }

  render() {
    let { is_logged } = this.props

    return (
      <View style={styles.container}>
        {is_logged ? <DashboardContainer /> : <LoginComponent />}
      </View>
    );
  }

}

const mapStateToProps = props => {
  return {
    is_logged: props.authentication.is_logged
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  retrieveData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)