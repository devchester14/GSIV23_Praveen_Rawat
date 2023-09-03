import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Details from './pages/details/details';
import SearchResult from './pages/searchResult/searchResult';
import Error from './pages/404/error';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:mediaType/:id' element={<Details />} />
				<Route path='/search/:query' element={<SearchResult />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
