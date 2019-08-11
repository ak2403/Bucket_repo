import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Text, Button } from 'native-base';
import RepoContainer from '../repositories'
import SettingContainer from '../settings'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class DashboardContainer extends Component {

  state = {
    current: 'repo'
  }

  onViewChange = data => {
    this.setState({
      current: data
    })
  }

  loadView = () => {
    switch (this.state.current) {
      case 'repo':
        return <RepoContainer />

      case 'setting':
        return <SettingContainer />
    }
  }

  render() {
    let { current } = this.state

    return (
      <Container>
        {this.loadView()}
        <Footer>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button active={current === 'repo' ? true : false}>
              <Text onPress={() => this.onViewChange('repo')}>Repo</Text>
            </Button>
            <Button active={current === 'setting' ? true : false}>
              <Text onPress={() => this.onViewChange('setting')}>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

}

const mapStateToProps = props => {
  return {

  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)

