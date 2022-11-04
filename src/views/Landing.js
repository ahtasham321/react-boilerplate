import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Label, Row } from 'reactstrap';
import { getMovieDetails } from '../store/actions/movieAction';
import imdb from '../assets/img/imbd-logo.png';

function Langing() {
	const dispatch = useDispatch();
	const { movieDetails } = useSelector(state => state.movie);
	console.log('movieDetails', movieDetails);
	useEffect(() => {
		dispatch(getMovieDetails());
	}, []);
	return (
		<>
			<div className='landing-main w-50 mx-auto position-relative'>
				<Container>
					<div className=''>
						<Row>
							<Col></Col>
							<Col className='main-opacity position-relative'>
								<div className='main-content'>
									<h4>Movie</h4>

									<h4>
										Title: {movieDetails.original_title}
									</h4>
									<p>Overview: {movieDetails.overview}</p>
									<div className='d-flex align-items-center'>
										<img
											src={imdb}
											alt=''
											className='imbd-logo'
										/>
										<h4 className='ml-2'>6.4</h4>
										<i class='fas fa-star fa-1x ml-2'></i>
									</div>
									<hr style={{ backgroundColor: 'white' }} />
								</div>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
		</>
	);
}

export default Langing;
