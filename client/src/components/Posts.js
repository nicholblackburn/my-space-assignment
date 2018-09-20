import React from 'react';
import { connect } from 'react-redux'

class Posts extends React.Component {
  state = { body: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { body } = this.state
    dispatch ({ type: 'ADD_POST', post: body })
  }

  handleChange = (e) => {
    debugger
    this.setState({ body: e.target.value})
  }

  render() {
    const { body } = this.state

    return(
      <div>
        <h3>Add A Post</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={body} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default connect()(Posts) 
