import MovieRepository from './MovieRepository';

const repositories = {
	movie: MovieRepository,
};
// eslint-disable-next-line import/prefer-default-export
export const RepositoryFactory = {
	get: name => repositories[name],
};
