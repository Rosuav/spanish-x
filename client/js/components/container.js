import React from 'react';
import App from './container';




//renders questions
//???????????????how to render word, line 16??????????
class Questions extends Component {
	render() {
		return (
			<div>
				<h1>Question 1</h1>
					<div>
						<p>What is this in english?</p>
						<p>{this.state.word}</p>
					</div>
			</div>
		)
	}
}







//renders a form that users can input answer and should have onSubmit button
//????????????Line 33, is the submitAnswer coming from actions or should I write app????????
let createHandlers = (dispatch) => {
	let onSubmit = (event) => {
		event.preventDefault();
		dispatch(actions.submitAnswer(event.target.answer));
		event.target.reset();
	}
	return {
		onSubmit
	}
}

//???????????????how to render answer line 51??????????/
class App extends Component {
	constructor(props) {
		super(props);
		this.handlers = createHandlers(this.props.dispatch);
	},
	render() {
		return (
			<div>
				<h1>Spanish-X</h1>
				<div>
					<p>random Spanish word</p>
					<p>{this.state.answer}</p>
				</div>
				<section>
					<form onSubmit={this.submitAnswer}>
						<input type="text" ref="userAnswer" placeholder="Please type the English translation" />
					</form>
				</section>
			</div>
		);			
	}
}





//handles the events that occurs in this component
let createHandlers = (dispatch) => {
	let logoutClick = (event) => {
		event.preventDefault();
		dispatch(actions.logout());
	}
	return {
		logoutClick
	}
}

class Logout extends Component {
	constructor(props) {
		super(props);
		this.handlers = createHandlers(this.props.dispatch);
	}
	render() {
		return (
			<button type="button" className="logout" onClick={this.handlers.logoutClick}>Log out</button>
		);
	}
}

let mapStateToProps = (state, props) => {
	return {

	}
};


let Container = connect(mapStateToProps)(Logout);






//component that renders questions/app/logout
class Container extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Questions />
				<App />
				<Logout/>
			</div>
		)
	}
}

export default Container;