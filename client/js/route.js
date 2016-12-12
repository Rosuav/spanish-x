import React from 'react';
import { Route, IndexRoute } from 'react-router';
import SignIn from './components/SignIn';
import App from './components/app';

// attribute on Route onEnter= 
// function if user does not exists, route back to login

export default (
	<Route path='/' component={App}>
		<IndexRoute component={SignIn} />
		<Route path='app' component={App} />
	</Route>
);


