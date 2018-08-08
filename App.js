import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://www.theopenapi.info/posts/');
      const posts = await res.json();
      this.setState({
        posts
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      
       
<div class="container"> 
<h2>Dallas Cowboys 2018-2019 Schedule</h2>      
<table class="table table-dark table-striped">

  <thead>
    <tr>
      <th>Game</th>
      <th>Description</th>
      <th>Channel</th>
      <th>Day</th>
      <th>Time</th>
    </tr>
    
  </thead>
  {this.state.posts.map(post => ( 
  <tbody>
    <tr>
      <td>{post.title}</td>
      <td>{post.text}</td>
      <td>{post.channel}</td>
      <td>{post.day}</td>
      <td>{post.game_date}</td>
     
    </tr>
  </tbody>
  ))}
</table>
</div>


    );
  }
}

export default App;