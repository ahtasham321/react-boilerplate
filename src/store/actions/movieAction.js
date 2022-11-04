// import { RepositoryFactory } from 'repository/RepositoryFactory';
import { RepositoryFactory } from '../../repository/RepositoryFactory';
var movie = RepositoryFactory.get('movie');

export const setAdminLoading = val => async dispatch => {
	dispatch({ type: 'ADMIN_LOADING', payload: val });
};

export const getMovieDetails = payload => async dispatch => {
	try {
		// await dispatch(getAdminLoading(true));
		let { data } = await movie.getMovie(payload);

		if (data) {
			await dispatch({
				type: 'GET_MOVIE_DETAILS',
				payload: data,
			});
		}
		// dispatch(getAdminLoading(false));
	} catch (e) {
		// dispatch(getAdminLoading(false));
		alert(e.response.data.message);
	}
};
