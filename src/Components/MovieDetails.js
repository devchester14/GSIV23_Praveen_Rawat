import React from 'react';
import { styled } from '@mui/material/styles';

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

function ImageDetails() {
	return (
		<Container>
			<ImageWrapper>
				<Image src='your-image-url.jpg' alt='Image' />
			</ImageWrapper>
			<Details>
				<Title>Image Title</Title>
				<ImageName>Image Name</ImageName>
				<Rating>Rating: 4.5 / 5</Rating>
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
					libero in metus euismod scelerisque eu non dolor. Sed non finibus
					eros.
				</Description>
			</Details>
		</Container>
	);
}

export default ImageDetails;
