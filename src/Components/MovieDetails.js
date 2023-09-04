import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from '../../../store/homeSlice';
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../../../utils/api';

const Container = styled('div')({
	display: 'flex',
	alignItems: 'flex-start',
	padding: '20px',
	borderBottom: '1px solid #ccc',
});

const ImageWrapper = styled('div')({
	flex: '0 0 20%',
	paddingRight: '20px',
});

const Image = styled('img')({
	width: '100%',
	height: 'auto',
});

const Details = styled('div')({
	flex: '1',
});

const Title = styled('h2')({
	margin: '0 0 10px 0',
});

const ImageName = styled('p')({
	margin: '0 0 5px 0',
	fontWeight: 'bold',
});

const Rating = styled('p')({
	margin: '0 0 5px 0',
});

const Description = styled('p')({
	margin: '0',
});

function MovieDetails() {
	const { movieId } = useParams();
	const url = useSelector((state) => state.home);
	const dispatch = useDispatch();
	const [movieData, setMovieData] = useState(null); // State to store API data

	useEffect(() => {
		apiData();
	}, []);

	const apiData = () => {
		fetchDataFromApi(`/movie/${movieId}`)
			.then((res) => {
				setMovieData(res); // Set the API response data to state
				dispatch(getApiConfiguration(res));
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/original/`;
	console.log(movieData, 'MOVIE DATA?');
	return (
		<Container>
			<ImageWrapper>
				<Image src={`${IMAGE_BASE_URL}${url.poster_path}`} alt='Image' />
			</ImageWrapper>
			<Details>
				<Title>{movieData?.title}</Title>
				<ImageName>{movieData?.name}</ImageName>
				<Rating>Rating: {movieData?.rating}</Rating>
				<Description>{movieData?.overview}</Description>
			</Details>
		</Container>
	);
}

export default MovieDetails;
