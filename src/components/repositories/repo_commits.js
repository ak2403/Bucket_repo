import React, { Component } from 'react';
import { Container, Header, Content, Text, Segment, Button, H3, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRepoCommits } from '../../actions/repositories_action'

class RepoCommits extends Component {

    componentDidMount = () => {
        this.props.getRepoCommits(this.props.repo.slug)
    }

    render() {
        let { repo_commits } = this.props

        return (<Content>
            <List>
                {repo_commits.map(commit => {
                    let url_link = 'url'

                    if(commit.author.user){
                        url_link = commit.author.user.links.avatar.href
                    }

                    return <ListItem avatar key={`commit_${commit.message}`}>
                        <Left>
                            <Thumbnail small source={{ uri: url_link }} />
                        </Left>
                        <Body>
                            <Text style={{fontSize: 12}}>{commit.message}</Text>
                            <Text style={{fontSize: 12}} note>Commit: {commit.hash.slice(0,7)}</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                })}



                <ListItem avatar>
                    <Left>
                        <Thumbnail source={{ uri: 'Image URL' }} />
                    </Left>
                    <Body>
                        <Text>Kumar Pratik</Text>
                        <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                        <Text note>3:43 pm</Text>
                    </Right>
                </ListItem>
            </List>
        </Content>);
    }

}

const mapStateToProps = props => {
    return {
        repo: props.repositories.selected_repo,
        repo_commits: props.repositories.repo_commits
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getRepoCommits
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepoCommits)