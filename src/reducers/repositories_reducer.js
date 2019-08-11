import * as repoTypes from '../types/repositories_type'

let initialState = {
    repos: [],
    selected_repo: {
        "scm": "git",
        "website": null,
        "has_wiki": true,
        "uuid": "{c6d3eae3-9493-4df1-bfde-2e6b2113fb1a}",
        "links": {
            "watchers": {
                "href": "https://api.bitbucket.org/2.0/repositories/AishwaryaK/app/watchers"
            },
            "branches": {
                "href": "https://api.bitbucket.org/2.0/repositories/AishwaryaK/app/refs/branches"
            },
            "tags": {
                "href": "https://api.bitbucket.org/2.0/repositories/AishwaryaK/app/refs/tags"
            },
            "commits": {
                "href": "https://api.bitbucket.org/2.0/repositories/AishwaryaK/app/commits"
            },
            "clone": [
                {
                    "href": "https://AishwaryaK@bitbucket.org/AishwaryaK/app.git",
                    "name": "https"
                },
                {
                    "href": "git@bitbucket.org:AishwaryaK/app.git",
                    "name": "ssh"
                }
            ],
            "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/AishwaryaK/app"
            },
            "source": {
                "href": "https://api.bitbucket.org/2.0/repositories/AishwaryaK/app/src"
            },
            "html": {
                "href": "https://bitbucket.org/AishwaryaK/app"
            },
            "avatar": {
                "href": "https://bytebucket.org/ravatar/%7Bc6d3eae3-9493-4df1-bfde-2e6b2113fb1a%7D?ts=nodejs"
            },
            "hooks": {
                "href": "https://api.bitbucket.org/2.0/repositories/AishwaryaK/app/hooks"
            },
            "forks": {
                "href": "https://api.bitbucket.org/2.0/repositories/AishwaryaK/app/forks"
            },
            "downloads": {
                "href": "https://api.bitbucket.org/2.0/repositories/AishwaryaK/app/downloads"
            },
            "pullrequests": {
                "href": "https://api.bitbucket.org/2.0/repositories/AishwaryaK/app/pullrequests"
            }
        },
        "fork_policy": "allow_forks",
        "name": "App",
        "language": "nodejs",
        "created_on": "2018-06-02T08:39:17.712904+00:00",
        "parent": {
            "links": {
                "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/vbisolutions/app"
                },
                "html": {
                    "href": "https://bitbucket.org/vbisolutions/app"
                },
                "avatar": {
                    "href": "https://bytebucket.org/ravatar/%7Bd3123df0-b69d-4226-af5f-771ffa735d66%7D?ts=python"
                }
            },
            "type": "repository",
            "name": "App",
            "full_name": "vbisolutions/app",
            "uuid": "{d3123df0-b69d-4226-af5f-771ffa735d66}"
        },
        "mainbranch": {
            "type": "branch",
            "name": "master"
        },
        "full_name": "AishwaryaK/app",
        "has_issues": false,
        "owner": {
            "display_name": "AishwaryaK",
            "uuid": "{44872101-4ad4-4447-9341-8145b03adf93}",
            "links": {
                "self": {
                    "href": "https://api.bitbucket.org/2.0/users/%7B44872101-4ad4-4447-9341-8145b03adf93%7D"
                },
                "html": {
                    "href": "https://bitbucket.org/%7B44872101-4ad4-4447-9341-8145b03adf93%7D/"
                },
                "avatar": {
                    "href": "https://secure.gravatar.com/avatar/01919c9b7b933b29b86f7cb5cd181ae6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-1.png"
                }
            },
            "nickname": "AishwaryaK",
            "type": "user",
            "account_id": "557058:5e0772f0-f4ec-4074-b0c7-95d25647095d"
        },
        "updated_on": "2019-06-06T12:05:57.250190+00:00",
        "size": 200672225,
        "type": "repository",
        "slug": "app",
        "is_private": true,
        "description": ""
    },
    repo_commits: []
}

const RepoReducer = (state = initialState, action) => {
    switch (action.type) {
        case repoTypes.GET_REPOS:
            let repo_array = []

            action.payload.values ? action.payload.values.map(rep => {
                repo_array.push(rep)
            }) : ''

            return Object.assign({}, state, {
                repos: repo_array || [],
                selected_repo: repo_array[0]
            })

        case repoTypes.GET_REPO_COMMITS:
            return Object.assign({}, state, {
                repo_commits: action.payload.values || []
            })

        default:
            return state
    }
}

export default RepoReducer