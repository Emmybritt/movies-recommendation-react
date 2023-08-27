import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/store";
import { addMovie } from "./store/features/movieSlice";
// import { Notifications } from "@mantine/notifications";

function App() {
	const dispatch = useAppDispatch();
	const { movies } = useAppSelector((store) => store.movie);
	dispatch(addMovie);
	console.log(movies);

	return <>{/* <Notifications /> */}</>;
}

export default App;
