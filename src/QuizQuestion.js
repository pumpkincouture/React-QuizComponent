import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { incorrectAnswer: false }
  }

  handleClick(buttonText) {
    console.log('this is button text');
    console.log(buttonText);

    console.log('this is answer');
    console.log(this.props.quiz_question.answer);

    console.log('state');
    console.log(this.state);
    if (buttonText === this.props.quiz_question.answer) {
      this.setState({ incorrectAnswer: false });
      this.props.showNextQuestionHandler();
    }
      this.setState({ incorrectAnswer: true });
  }

  render() {
    return (
    <main>
      { this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p> : null }
      <section>
        <p>{this.props.quiz_question.instruction_text}</p>
      </section>
      <section className="buttons">
        <ul>
	  { this.props.quiz_question.answer_options.map((answer_option, index) => {
	    return <QuizQuestionButton clickHandler={this.handleClick.bind(this)} button_text={answer_option} key={index}/>
	  })}
        </ul>
      </section>
    </main>
    );
  }

}

export default QuizQuestion;