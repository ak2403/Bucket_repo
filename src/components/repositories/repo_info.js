import React, { Component } from 'react';
import { Container, Header, Content, Text, Segment, Button, H3,List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RepoCommits from './repo_commits'

class RepoInfoContainer extends Component {

    state = {
        view: 'commit'
    }

    changeView = view => {
        this.setState({
            view
        })
    }

    render() {
        let {view}=this.state
        let { repo } = this.props


        return (<Content padder>
            <H3>{repo.name}</H3>
            <Text>created at {repo.created_on}</Text>
            <Text>Language {repo.language}</Text>

            <Segment>
                <Button first active={view === 'source' ? true : false} onPress={() => this.changeView('source')}>
                    <Text>Source</Text>
                </Button>
                <Button active={view === 'commit' ? true : false} onPress={() => this.changeView('commit')}>
                    <Text>Commits</Text>
                </Button>
            </Segment>

            {view === 'source' ? <Text>Sourcce</Text> : <RepoCommits />}
            
        </Content>);
    }

}

const mapStateToProps = props => {
    return {
        repo: props.repositories.selected_repo
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepoInfoContainer)