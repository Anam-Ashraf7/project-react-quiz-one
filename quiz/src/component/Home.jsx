import { Component } from 'react'


export default class Home extends Component {
  render() {
    return (
      <div id='home'>
        <h1>Quiz App</h1>
        <button onClick={this.props.startQuiz}>Play</button>
      </div>
    )
  }
}
