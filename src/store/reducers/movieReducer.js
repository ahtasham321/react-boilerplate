const initialData = {
	movieDetails: [],
};

const movieReducer = (state = initialData, action) => {
	// console.log('action', action.payload);
	switch (action.type) {
		case 'GET_MOVIE_DETAILS':
			return {
				...state,
				movieDetails: action.payload,
			};

		default:
			return state;
	}
};

export default movieReducer;
