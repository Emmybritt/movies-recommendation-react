import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeLayout from "./layouts/HomeLayout";
import HomePage from "./pages/HomePage";
import AddMovieComponent from "./pages/AddMovie";
import MovieDetails from "./pages/MovieDetails";
import NoMatch from "./pages/NotMatch";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomeLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/add-movie" element={<AddMovieComponent />} />
				<Route path="/movie-details/:id" element={<MovieDetails />} />
				<Route path="*" element={<NoMatch />} />
			</Route>
		</Routes>
	);
}

export default App;
