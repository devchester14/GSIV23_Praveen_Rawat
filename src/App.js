import './App.css';
import Navbar from './Components/Navbar';
import {useState,useEffect} from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { fetchDataFromApi } from './utils/api';
import {useDispatch,useSelector} from 'react-redux';
import {getApiConfiguration} from './store/homeSlice'
import Home from './pages/home/home';
import Details from './pages/details/details';
import SearchResult from './pages/searchResult/searchResult';
import Error from './pages/404/error';

function App() {
const dispatch = useDispatch();
const url = useSelector((state)=>
state.home) 
console.log(url,"URL");

	useEffect(()=>{
		apiData();
	}, []);

	const apiData = () => {
		fetchDataFromApi(`/movie/upcoming`).then((res)=>{
			console.log(res);
			dispatch(getApiConfiguration(res))
		});
	};
	
	return (

		<BrowserRouter>
		<Navbar/>
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/:mediaType/:id' element={<Details/>}/>
			<Route path='/search/:query' element={<SearchResult/>}/>
			<Route path='*' element={<Error/>}/>

		</Routes>
		</BrowserRouter>
		// <div className='App'>
		// 	<Navbar />

		// 	<p>{url?.total_pages}</p>
		// </div>
	);
}

export default App;
