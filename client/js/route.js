import React from 'react';
import { Route, IndexRoute } from 'react-router';
import SignIn from './components/SignIn';
import Questions from './components/questions';

// attribute on Route onEnter= 
// function if user does not exists, route back to login

export default (
	<Route path='/' component={Questions}>
		<IndexRoute component={SignIn} />
		<Route path='app' component={Questions} />
	</Route>
);


