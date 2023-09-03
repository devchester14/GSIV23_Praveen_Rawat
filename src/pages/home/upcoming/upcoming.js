import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDataFromApi } from '../../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from '../../../store/homeSlice';
import Carousel from '../../../Components/carousel/carousel';

function Upcoming() {
	const dispatch = useDispatch();
	const url = useSelector((state) => state.home);
	console.log(url, 'URL');

	useEffect(() => {
		apiData();
	}, []);

	const apiData = () => {
		fetchDataFromApi(`/movie/upcoming`).then((res) => {
			console.log(res);
			dispatch(getApiConfiguration(res));
		});
	};

	return (
		<div>
			<Carousel data={url} />
		</div>
	);
}

export default Upcoming;
