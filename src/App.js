import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import AppPost from './Posts/AppPost.js';
import AppUser from './Users/AppUser.js';

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            user: null
        }
        
        this.loginRequest = this.loginRequest.bind(this)
        this.logoutRequest = this.logoutRequest.bind(this)
    }

    loginRequest() {
        axios
            .post(process.env.REACT_APP_API_URL+'/api/auth/login', {'email': 'test@example.com', 'name': "test-user", 'password': "password"}, {'Content-Type': "application/json"})
            .then(response => {
                this.setState({user: {
                    user: {
                        email: response['data']['user']['email'],
                        name: response['data']['user']['name'], 
                        token: response['data']['access_token']
                    }
                }})
            })
            .catch((response) => {
                console.log('ログイン失敗')
            })
    }

    logoutRequest() {
        this.setState({user: null})
    }

    render() {
        return (
            <div>
                {this.state.user === null 
                    ? <AppUser loginRequest={this.loginRequest}></AppUser>
                    : <AppPost user={this.state.user} getPosts={this.getPosts}></AppPost>
                }
                <button onClick={this.logoutRequest}>ログアウト</button>
            </div>
        )
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}