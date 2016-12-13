import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../components/actions/actions';


class Questions extends Component {
	//initialize state in the constructor in ES6, similar to getInitialState
	constructor(props) {
		super(props);
	}

	//where AJAX requests and DOM/state updates.  updates the state so we can trigger the other lifecycle method
	componentDidMount() {
		this.props.dispatch(actions.fetchQuestion());
	}

	render() {
		if (!this.props.questions.question) {
			var spans = <span></span>
		} else {
			var spans = this.props.questions.map((question, index) => 
				<span key={index}>{question}</span>
			);
		}
		return (
			<div>
				<section className="button">
					<p>Spanish X</p>
					<a className="logout" href="/logout">
						<span>Log Out</span>
						<span>To Front</span>
					</a>
				</section>
				<section>
					<div>{spans}</div>
				</section>
			</div>
		)
	}
}

const mapStateToProps = function(state, props) {
	return {
		questions: state.questions,
	};
};

var Container = connect(mapStateToProps)(Questions);
module.exports = Container;

