import React, {Component} from 'react';
import {connect} from 'react-redux';

let createHandlers = (dispatch) => {
	let signupSubmit = (event) => {
		event.preventDefault();
		dispatch(actions.signup(event.target.email.value, event.target.password.value));
		event.target.reset();
	}

	return {
		signupSubmit
	}
}

class SignIn extends Component {
	componentDidMount() {
		gapi.signin2.render('g-signin2', {
			'scope': 'https://www.googleapis.com/auth/plus.login',
			'width': 200,
			'heigh': 50,
			'longtitle': true,
			'theme': 'dark',
			'onsuccess': this.onSignIn
		})
	},

	render() {
		return (
			<div>
				<form id="register-form" onSubmit={this.handlers.signupSubmit}>
					<div id="register">
						<h1>Register/Login</h1>
							<input type="text" name="email" className="form-control input-sm" placeholder="Email address" autoComplete="off" required/>
							<input type="password" name="password" className="form-control input-sm" placeholder="Password" autoComplete="off" required/>
							<div className="g-signin2" data-onsuccess="onSignIn"></div>
					</div>
				</form>
			</div>
		);			
	}
})

let mapStateToProps = (state, props) => {
	return {
		signUpSuccess: state.signUpSuccess
	};
};

let Container = connect(mapStateToProps)(SignUp);

export default SignIn;

	
