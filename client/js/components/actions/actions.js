const fetch = require('isomorphic-fetch');

export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export function submitAnswer(answer) {
	return {
		type: SUBMIT_ANSWER,
		answer: answer
	}
}


// export const FETCH_QUESTION = 'FETCH_QUESTION';
// export function fetchQuestion() {
// 	return {
// 		type: FETCH_QUESTION,
// 	}
// }

