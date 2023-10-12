import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comment: "",
      topic: "react",
    };
  }

  handlUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleComment = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value
    })

  }

  handleSubmit = (event) => {
    alert(` ${this.state.username} ${this.state.comment} ${this.state.topic}
    `)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <lable>Username</lable>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handlUsernameChange}
          />
        </div>
        <div>
          <lable>comments</lable>
          <textarea
            value={this.state.comment}
            onChange={this.handleComment}
          ></textarea>
        </div>
        <div>
          <lable>Topic</lable>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="python">Python</option>
          </select>
        </div>
        <button type="submit">Submit</button>



      </form>
    );
  }
}

export default Forms;
