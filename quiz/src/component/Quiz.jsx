import { Component } from 'react'

export default class Quiz extends Component {
  render() {
    return (
      <div id='quiz'>
        <h1>Question</h1>
        <p id='question-number'>1 of 14</p>
        <p>Which is the only mammal that can jump?</p>
        <div className='options'>
            <button>Dog</button>
            <button>Elephant</button>
            <button>Goat</button>
            <button>Lion</button>
        </div>
        <div className='navigation'>
            <button id='prevBtn'>Previous</button>
            <button id='nextBtn'>Next</button>
            <button id='quitBtn' onClick={this.props.startResult}>Quit</button>
        </div>
      </div>
    )
  }
}
