import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios';


class Home extends Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/posts')
      .then(res => this.setState({ posts: res.data }) )
  }

  sample = () => {
    const { posts } = this.state
    if (posts.length) {
      const index = Math.floor(Math.random() * posts.length)
      return posts[index]
    }
  }
  render() {
    const post = this.sample()
    if (post) {}
    return (
      <Header as='h1' textAlign='center'>Home Component</Header>
    );
  }
}

export default Home;
