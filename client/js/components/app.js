// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// //import { SignIn } from '../actions/actions';
// let sample = "Hola";
// let sampleSpanish = 'hello';
// let createHandlers = (dispatch) => {
// 	let onSubmit = (event) => {
// 		event.preventDefault();
// 		console.log(sampleSpanish);
// 		//console.log(event.target)
// 		//dispatch(actions.submitAnswer(event.target.answer));
// 		event.target.reset();
// 	}
// 	let logoutClick = (event) => {
// 		event.preventDefault();
// 		dispatch(actions.logout());
// 	}
// 	return {
// 		onSubmit,
// 		logoutClick
// 	}
// }


// class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.handlers = createHandlers(this.props.dispatch);
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<button type="button" className="logout" onClick={this.handlers.logoutClick}>Log out</button>
// 				<h1>Spanish-X</h1>
// 				<div>
// 					<p>random Spanish word</p>
// 					<p>{sample}</p>
// 				</div>
// 				<section>
// 					<form onSubmit={this.handlers.onSubmit}>
// 						<input type="text" ref="userAnswer" placeholder="Please type the English translation" />
// 					</form>

// 				</section>
// 			</div>
// 		);			
// 	}
// }

// export default App;
