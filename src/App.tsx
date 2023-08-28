import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeLayout from "./layouts/HomeLayout";
import HomePage from "./pages/HomePage";
import AddMovieComponent from "./pages/AddMovie";
import MovieDetails from "./pages/MovieDetails";
import NoMatch from "./pages/NotMatch";
import AllMovies from "./pages/AllMovies";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<Routes>
			<Route path="/" element={<HomeLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/add-movie" element={<AddMovieComponent />} />
				<Route path="/movie-details/:id" element={<MovieDetails />} />
				<Route path="/movies" element={<AllMovies />} />
				<Route path="*" element={<NoMatch />} />
			</Route>
		</Routes>
	);
}

export default App;
