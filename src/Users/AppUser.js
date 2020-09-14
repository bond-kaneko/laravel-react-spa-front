import React, { Component } from 'react';

export default class AppUser extends Component {
    render() {
        return (
            <div>
                <p>未ログイン</p>
                <button onClick={this.props.loginRequest}>ログイン</button>
            </div>
        )
    }
}