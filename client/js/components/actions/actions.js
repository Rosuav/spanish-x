const fetch = require('isomorphic-fetch');

export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export function submitAnswer(answer) {
	return {
		type: SUBMIT_ANSWER,
		answer: answer
	}
}

// export const LOGOUT = "LOGOUT";
// export const logout = () => {
// 	return {
// 		type: LOGOUT
// 	}
// }

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const fetchQuestionsSuccess = (questions) => {
	return {
		type: FETCH_QUESTIONS_SUCCESS,
		questions: questions
	};
};

export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';
export const fetchQuestionsError = (err) => {
	return {
		type: FETCH_QUESTIONS_ERROR,
		error: err
	};
};

//taking the query, whatever is after the ? in the query, looks for access_token in the url and return that
export const getParameterByName = (name, url) => {
	if (!url) {
		url = window.location.href;
	}
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return deodeURIComponent(results[2].replace(/\+/g, " "));
}


export function fetchQuestion() {
	return (dispatch) => {
		let access_token = getParameterByName('access_token');
		let url = 'http://localhost:8080/questions';
		let auth = 'Bearer ' + access_token;
		const header = {
			Authorization: auth
		}
		return fetch(url, {
			header
		}).then((response) => {
			if (response.status < 200) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response.json();
		}).then((questions) => {
			console.log(questions);
			return dispatch(fetchQuestionsSuccess(questions));
		}).catch((err) => {
			console.log(error);
			return dispatch(fetchQuestionsError(err));
		})
	}
}

