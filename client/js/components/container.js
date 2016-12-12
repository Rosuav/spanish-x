import React from 'react';
import App from './container';

class Container extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<App />
			</div>
		)
	}
}

export default Container;