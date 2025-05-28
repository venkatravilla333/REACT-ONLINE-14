import React, { Component } from 'react'
import axios from 'axios'

export class GetData extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading: false,
      posts: [],
      error: null
    }
  }

  componentDidMount() {
    console.log('did mount')
    this.setState({
      loading: true
    })
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      console.log(res)
        this.setState({
        loading: false,
        posts: res.data
      })
    }).catch((error) => {
      this.setState({
        loading: false,
        error: error
      })
    })
  }
  render() {
    console.log('render')
    return (
      <div>
        <h3>Display posts</h3>
        {this.state.loading ? <h2>Loading</h2> : this.state.error ? <h2>{this.state.error}</h2> : 
          this.state.posts.map((post) => {
            return (
              <div key={post.id} style={{border:'2px solid red', padding: '15px', margin:'20px'}}>
                <p>Id: {post.id}</p>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
              </div>
            )
         })
        }
      </div>
    )
  }
}

export default GetData