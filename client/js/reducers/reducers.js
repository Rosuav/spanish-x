import React from 'react';


import {
	SUMBIT_ANSWER
	//DISPLAY_ANSWER
	//actions from the actions
} from '../actions/actions';

const initialState = {
	title: 'Spanish-X',
	lists: [
		{
			word: 'azul',
			answer: 'blue',
			repeat: 'no'
		},
		{
			word: 'anaranjado',
			answer: 'orange',
			repeat: 'no'
		},
		{
			word: 'rojo',
			answer: 'red',
			repeat: 'no'
		},
		{
			word: 'amarillo',
			answer: 'yellow',
			repeat: 'no'

		},
		{
			word: 'blanco',
			answer: 'white',
			repeat: 'no'
		}
	]
}

export default let translaterReducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);
	var temp = state["lists"].shift();
	state["lists"].push(temp);

}

// export default function reducer(state, action) {return state;}
