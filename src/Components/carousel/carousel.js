import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import Upcoming from '../../pages/home/upcoming/upcoming';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useSelector } from 'react-redux';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Carousel({ data }) {
	console.log(data, 'CAROUSEL PROPS DATA');
	const carouselContainer = useRef();
	console.log(carouselContainer.current);
	const { url } = useSelector((state) => state.home);
	const navigate = useNavigate();

	const navigation = () => {};

	return (
		<div className='carouselItems'>
			<ArrowCircleLeftIcon onClick={() => navigation('left')} />
			{data?.url?.results?.map((item) => {
				const posterUrl =
					`https://image.tmdb.org/t/p/original/` + item.poster_path;
				return (
					<Card sx={{ maxWidth: 225 }} key={item.id}>
						<CardMedia
							component='img'
							height='200'
							src={`${posterUrl}`}
							alt={item.title}
						/>
						<CardContent>
							<p>{item.title}</p>
							<Typography variant='body2' color='text.secondary'>
								{item.overview}
							</Typography>
						</CardContent>
					</Card>
				);
			})}
			<ArrowCircleRightIcon onClick={() => navigation('right')} />
		</div>
	);
}

export default Carousel;
