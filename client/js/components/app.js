import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { SignIn } from '../actions/actions';
import {SampleData} from './sample.js';


class App extends Component {
	render() {
		return (
			<div>
				<h1>Spanish-X</h1>
				<div>
					<p>random Spanish word</p>
					<p>{SampleData}</p>
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

export default App;
