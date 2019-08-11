import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import LoginComponent from './components/authentication';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  });

export default () => {
    
  return (
    <View style={styles.container}>
      <LoginComponent />
    </View>
 );
}