import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';

import './style.scss';

import { fetchDataFromApi } from '../../utils/api';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SearchResult = () => {
	const [data, setData] = useState(null);
	const [pageNum, setPageNum] = useState(1);
	const [loading, setLoading] = useState(false);
	const { query } = useParams();
	const navigate = useNavigate();

	const fetchInitialData = () => {
		setLoading(true);
		fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
			(res) => {
				setData(res);
				setPageNum((prev) => prev + 1);
				setLoading(false);
			},
		);
	};

	const fetchNextPageData = () => {
		fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
			(res) => {
				if (data?.results) {
					setData({
						...data,
						results: [...data?.results, ...res.results],
					});
				} else {
					setData(res);
				}
				setPageNum((prev) => prev + 1);
			},
		);
	};

	useEffect(() => {
		setPageNum(1);
		fetchInitialData();
	}, [query]);

	return (
		<div className='searchResultsPage'>
			{console.log(data, 'API SEARCH DATA')}
			{/* {loading && <Spinner initial={true} />} */}
			{!loading && (
				<>
					{data?.results?.length > 0 ? (
						<>
							<div className='pageTitle'>
								{`Search ${
									data?.total_results > 1 ? 'results' : 'result'
								} of '${query}'`}
							</div>
							<InfiniteScroll
								className='content'
								dataLength={data?.results?.length || []}
								next={fetchNextPageData}
								hasMore={pageNum <= data?.total_pages}
								// loader={<Spinner />}
							>
								{data?.results.map((item, index) => {
									if (item.media_type === 'person') return;
									const posterUrl =
										`https://image.tmdb.org/t/p/original/` + item.poster_path;
									return (
										<Card sx={{ maxWidth: 250 }}>
											<CardMedia
												onClick={() => navigate(`/movie/${item.id}`)}
												component='img'
												height='194' // Adjust the height as needed
												src={`${posterUrl}`}
												// alt={item.title.substring(0, 25)}
												style={{ objectFit: 'cover', height: '50%' }}
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
									);
								})}
							</InfiniteScroll>
						</>
					) : (
						<span className='resultNotFound'>Sorry, Results not found!</span>
					)}
				</>
			)}
		</div>
	);
};

export default SearchResult;
