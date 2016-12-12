const initialState = {

}
const gameReducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);
	
	return state;
}

exports.gameReducer = gameReducer;