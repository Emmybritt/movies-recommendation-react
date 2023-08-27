import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { CreateMoviePayloadAttr, createMovie, deleteMovieById, getAllMovies } from "../store/features/movieSlice";

export const useMovie = () => {
	const dispatch = useAppDispatch();
	const [movie, setMovie] = useState<CreateMoviePayloadAttr>();
	const [error, setError] = useState<CreateMoviePayloadAttr>();
	const { isLoading, movies, message, type } = useAppSelector((store) => store.movie);
	useEffect(() => {
		dispatch(getAllMovies());
	}, [dispatch]);
	const handleChange = (name: string, value: string) => {
		if (!value) {
			return setError((prev: CreateMoviePayloadAttr) => ({
				...prev,
				[name]: `${name} is required`,
			}));
		}
		setError(null);
		setMovie((prev: CreateMoviePayloadAttr) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleCreateMovie = () => {
		if (movie.title && movie.genre && movie.director && movie.duration && movie.badge && movie.plotSummary && movie.trailerURL) {
			dispatch(createMovie(movie));
			setMovie(null);
		} else {
			alert("All field is required");
		}
	};

	const deleteMovie = (id: string) => {
		if (confirm("Are you sure you want to delete this movie")) {
			dispatch(deleteMovieById({ _id: id }));
		}
	};
	return { isLoading, movies, handleCreateMovie, setMovie, movie, error, handleChange, message, type, deleteMovie };
};
