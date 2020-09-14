import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
        this.setState({user: {
            user: {
                email: 'test@example.com', 
                name: 'user name', 
                token: 'token'
            }
        }})
    }

    logoutRequest() {
        this.setState({user: null})
    }

    render() {
        return (
            <div>
                {this.state.user === null 
                    ? <AppUser loginRequest={this.loginRequest}></AppUser>
                    : <AppPost></AppPost>
                }
                <button onClick={this.logoutRequest}>ログアウト</button>
            </div>
        )
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}