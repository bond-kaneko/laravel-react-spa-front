import React, { Component } from 'react';

export default class Posts extends Component {
    render() {
        return (
            <div>
                <li key={this.props.post.id}>{this.props.post.name}: {this.props.post.content} <button onClick={() => this.props.deletePost(this.props.post.id)}>削除</button></li>
            </div>
        );
    }
}
