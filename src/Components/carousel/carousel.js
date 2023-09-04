import React from 'react';
import { useNavigate } from 'react-router-dom';

import Slider from 'react-slick';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 3,
};

const CardCarousel = ({ data }) => {
	console.log(data, 'CAROUSEL PROPS DATA');
	const navigate = useNavigate();
	return (
		<div className='carousel-container'>
			<Slider {...settings}>
				{data?.url?.results?.map((item, index) => {
					const posterUrl =
						`https://image.tmdb.org/t/p/original/` + item.poster_path;
					return (
						<div
							key={index}
							className='carousel-card'
							onClick={() => navigate(`/movie/${item.id}`)}
						>
							<Card sx={{ maxWidth: 250 }}>
								<CardMedia
									component='img'
									height='150'
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
										className='overview-text'
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
