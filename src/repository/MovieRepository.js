import Repository from './Repository';

const MOVIE = '/3/movie/550?api_key=7569f35f6d955166a87cfa700a6e5a3d';

export default {
	getMovie() {
		return Repository.get(`${MOVIE}`);
	},
};
