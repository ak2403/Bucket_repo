import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Title, Button, Left, Right, Body, Icon } from 'native-base';
import RepoInfoContainer from './repo_info'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRepos } from '../../actions/repositories_action'
import { logout } from '../../actions/authentication_action'

class RepoContainer extends Component {

    state = {
        view: 'info'
    }

    componentDidMount = () => {
        this.props.getRepos()
    }

    onPressChange = () => {
        this.props.logout()
    }

    renderInfo = repo => {
        this.setState({
            view: 'info'
        })
    }

    renderRepos = () => {
        return this.props.repos.map(repo => {
            return (<Card key={`repo_${repo.name}`}>
                <CardItem header button onPress={() => this.renderInfo(repo)}>
                    <Text>{repo.name}</Text>
                </CardItem>
            </Card>)
        })
    }

    render() {
        let { view } = this.state

        return (<Container>
            <Header>
                <Text>Repositories</Text>
            </Header>

            <Content padder>
                {view === 'info' ? <RepoInfoContainer /> : this.renderRepos()}
            </Content>

        </Container>);
    }

}

const mapStateToProps = props => {
    return {
        repos: props.repositories.repos
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    logout,
    getRepos
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepoContainer)