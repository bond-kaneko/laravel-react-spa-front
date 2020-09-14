import React, { Component } from 'react';

export default class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newPost: {name: '', content: ''}
        }

        this.handleNameInput = this.handleNameInput.bind(this)
        this.handleContentInput = this.handleContentInput.bind(this)
    }

    handleNameInput(e) {
        const newPost = this.state.newPost
        newPost.name = e.target.value

        this.setState(
            {
                newPost: newPost
            }
        )
    }
    handleContentInput(e) {
        const newPost = this.state.newPost
        newPost.content = e.target.value

        this.setState(
            {
                newPost: newPost
            }
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.props.addPost(e, this.state.newPost)}>
                    <div>
                        <label>記事名:</label>
                        <input type="text" id="name-form" onChange={e => this.handleNameInput(e)}></input>
                    </div>
                    <div>
                    <label>本文:</label>
                        <input type="text" id="content-form" onChange={e => this.handleContentInput(e)}></input>
                    </div>

                    <button type="submit">作成</button>
                </form>
            </div>
        );
    }
}
