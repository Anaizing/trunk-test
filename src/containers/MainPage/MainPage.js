import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import ReOrderButton from '../../components/ReOrderButton/ReOrderButton';
import './MainPage.css';

class MainPage extends Component {
    state = {
        posts: []
    }
    componentDidMount () {
        axios.get('https://www.reddit.com/r/javascript/top/.json')
            .then(response => {
                this.setState({posts: response.data.data.children})
                console.log(response);
            })
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post key={post.data.id} title={post.data.title} author={post.data.author} url={post.data.url}/>
            
        })
        return <li>
            <section>
                <ReOrderButton />
            </section>
            <section className="Posts">{posts}
            </section>
            
        </li>;
    }
}

export default MainPage;