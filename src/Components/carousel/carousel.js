import React from 'react';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss'; // Import the CSS file

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 5, // Number of cards to display at a time
	slidesToScroll: 3,
};

const CardCarousel = ({ data }) => {
	console.log(data, 'CAROUSEL PROPS DATA');

	return (
		<div className='carousel-container'>
			<Slider {...settings}>
				{data?.url?.results?.map((item, index) => {
					const posterUrl =
						`https://image.tmdb.org/t/p/original/` + item.poster_path;
					return (
						<div key={index} className='carousel-card'>
							<Card sx={{ maxWidth: 250 }}>
								<CardMedia
									component='img'
									height='194' // Adjust the height as needed
									src={`${posterUrl}`}
									alt={item.title.substring(0, 25)}
									style={{ objectFit: 'cover', height: '100%' }}
								/>
								<CardContent className='carousel-card-content'>
									<Typography variant='h6' noWrap>
										{item.title}
									</Typography>
									<Typography
										variant='body2'
										color='text.secondary'
										className='overview-text' // Apply a class for the overview text
									>
										{item.overview}
									</Typography>
								</CardContent>
							</Card>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default CardCarousel;
