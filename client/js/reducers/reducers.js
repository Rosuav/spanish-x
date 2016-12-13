import React from 'react';
import actions from '../components/actions/actions';


// import {
// 	SUMBIT_ANSWER
// 	//DISPLAY_ANSWER
// 	//actions from the actions
// } from '../components/actions/actions';

const initialState = {
	questions: {}//[
	// 	{
	// 		word: 'azul',
	// 		answer: 'blue',
	// 		repeat: 'no'
	// 	},
	// 	{
	// 		word: 'anaranjado',
	// 		answer: 'orange',
	// 		repeat: 'no'
	// 	},
	// 	{
	// 		word: 'rojo',
	// 		answer: 'red',
	// 		repeat: 'no'
	// 	},
	// 	{
	// 		word: 'amarillo',
	// 		answer: 'yellow',
	// 		repeat: 'no'

	// 	},
	// 	{
	// 		word: 'blanco',
	// 		answer: 'white',
	// 		repeat: 'no'
	// 	}
	// ]
}

const translatorReducer = (state, action) => {

	let copyState = state || initialState;
	state = Object.assign({}, copyState);
	// var temp = state["lists"].shift();
	// state["lists"].push(temp);
	if (action.type === actions.FETCH_QUESTIONS_SUCCESS) {
		console.log("Hello");
		state.questions = action.questions;
	}
	return state;
}

exports.translatorReducer = translatorReducer;
// export default function reducer(state, action) {return state;}













