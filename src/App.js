import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Posts from './Posts.js';
import PostForm from './PostForm.js';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            newPost: {
                name: '',
                content: '',
            }
        }

        this.addPost = this.addPost.bind(this)
        this.deletePost = this.deletePost.bind(this)
    }

    componentDidMount() {
        axios
            .get('http://laravel-react.laravel/api/post')
            .then(response => {
                this.setState({posts: response.data});
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    addPost(e, newPost) {
        e.preventDefault();

        // 記事作成リクエスト
        axios
            .post('http://laravel-react.laravel/api/post/add', {'new_post': newPost})
            .then(response => {
                this.setState({posts: this.state.posts.concat({
                    id: response['data']['id'],
                    name: response['data']['name'],
                    content: response['data']['content']
                })})
                this.setState({newPost: {name: '', content: ''}});
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    deletePost(id) {
        axios
            .post('http://laravel-react.laravel/api/post/delete', {'post_id': id})
            .then(response => {
                this.setState({posts: this.state.posts.filter(post => post.id !== response['data']['id'])})
            })
            .catch((e) => {
                console.log('通信に失敗しました');
                console.log(e);
            });
    }

    render() {
        return (
            <div>
                <PostForm addPost={this.addPost}></PostForm>
                <ul>
                    {this.state.posts.map(post => (
                        <Posts key={post.id} post={post} deletePost={this.deletePost}></Posts>
                    ))}
                </ul>
            </div>
        )
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}