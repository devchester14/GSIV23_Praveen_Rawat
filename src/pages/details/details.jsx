import React from 'react';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { fetchDataFromApi } from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
// import { getApiConfiguration } from '../../../store/homeSlice';
import { useParams } from 'react-router-dom';
const Container = styled('div')({
	display: 'flex',
	alignItems: 'flex-start', // Align text to the top
	padding: '20px',
	borderBottom: '1px solid #ccc',
});

const ImageWrapper = styled('div')({
	flex: '0 0 20%', // Image covers one-fifth of the left space
	paddingRight: '20px',
});

const Image = styled('img')({
	width: '100%',
	height: 'auto',
});

const Details = styled('div')({
	flex: '1', // Take the remaining space for text details
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
	const { mediaType, id } = useParams();
	const [movieData, setMovieData] = useState(null); // State to store API data

	console.log(mediaType, id);
	const dispatch = useDispatch();
	const url = useSelector((state) => state.home);
	console.log(url, 'URL');

	useEffect(() => {
		apiData();
	}, []);

	const apiData = () => {
		fetchDataFromApi(`/${mediaType}/${id}`).then((res) => {
			console.log(res);
			setMovieData(res); // Set the API response data to state
		});
	};
	const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/original/`;

	return (
		<Container>
			<ImageWrapper>
				<Image
					src={`${IMAGE_BASE_URL}` + `${movieData?.poster_path}`}
					alt='Image'
				/>
			</ImageWrapper>
			<Details>
				<Title>{movieData?.original_title}</Title>
				<Rating>
					{movieData?.release_date} || {movieData?.runtime} mins
				</Rating>
				<ImageName>{movieData?.title}</ImageName>
				<Rating>Rating: 4.5 / 5</Rating>
				<Description>{movieData?.overview}</Description>
			</Details>
		</Container>
	);
}

export default MovieDetails;
