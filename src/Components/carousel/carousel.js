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
			{/* Apply the CSS class to the container */}
			<Slider {...settings}>
				{data?.url?.results?.map((item, index) => {
					const posterUrl =
						`https://image.tmdb.org/t/p/original/` + item.poster_path;
					return (
						<div key={index} className='carousel-card'>
							{/* Apply the CSS class to each card */}
							<Card sx={{ maxWidth: 250, marginTop: '10px' }}>
								<CardMedia
									component='img'
									height='194'
									src={`${posterUrl}`}
									alt={item.title}
									style={{ objectFit: 'cover' }} // Add object-fit property
								/>
								<CardContent className='carousel-card-content'>
									{/* Apply the CSS class to card content */}
									<p>{item.title}</p>
									<Typography variant='body2' color='text.secondary'>
										{item.overview.substring(0, 40)}
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
