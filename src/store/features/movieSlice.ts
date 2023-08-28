import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { myAxios } from "../../config/axios";

export type MoviesAttr = {
	_id: string;
	title: string;
	createdAt: string;
	updatedAt: string;
	director: string;
	genre: string;
	plotSummary: string;
	rating: number;
	releaseYear: string;
	posterURL: string;
	trailerURL: string;
	duration: string;
	badge: string;
};

export type CreateMoviePayloadAttr = {
	title: string;
	director?: string;
	genre: string;
	plotSummary: string;
	rating: number;
	releaseYear: string;
	posterURL: string;
	trailerURL: string;
	duration: string;
	badge: string;
};

type MovieInitialState = {
	movies: MoviesAttr[];
	isLoading: boolean;
	movie: MoviesAttr | null;
	message: string | null;
	type: string | null;
};

type ActionPayloadAtrr = {
	_id: string;
};

const initialState: MovieInitialState = {
	movies: [],
	isLoading: false,
	movie: null,
	message: "",
	type: "",
};

export const createMovie = createAsyncThunk("createMovie", async (action: CreateMoviePayloadAttr, thunkAPI) => {
	try {
		const res = await myAxios.post("/create/movie", { ...action });
		alert("Movie Created successfully");
		return res.data;
	} catch (error) {
		alert("Error creating movie");
		thunkAPI.dispatch(setMessage({ message: "Error creating movies", type: "fail" }));
	}
});
export const getAllMovies = createAsyncThunk("getMovies", async (action?: never) => {
	try {
		const res = await myAxios.get(`/movies?genre=${action}`);
		return res.data;
	} catch (error) {
		console.log("Something went wront");
	}
});

export const deleteMovieById = createAsyncThunk("deleteMovies", async (action: ActionPayloadAtrr, thunkAPI) => {
	const { _id } = action;
	try {
		await myAxios.delete(`/delete-movie/${_id}`);
		thunkAPI.dispatch(getAllMovies());
		alert(`Movie with id ${_id} is deleted successfully`);
	} catch (error) {
		console.log(error);
		alert(`There was an error deleting movie, please try again`);
	}
});

export const getSingleMoviesById = createAsyncThunk("getMoviesById", async (action: ActionPayloadAtrr) => {
	const { _id } = action;
	try {
		const res = await myAxios.get(`/movie/${_id}`);
		return res.data.result;
	} catch (error) {
		console.log(error);
	}
});

export const MovieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {
		addMovie: (state, action: PayloadAction<{ title: string; description: string }>) => {
			console.log(state, action.payload.description);
		},
		setMessage: (state, action: PayloadAction<{ message: string; type: string }>) => {
			state.message = action.payload.message;
			state.type = action.payload.type;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAllMovies.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getAllMovies.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			console.log(payload);
			state.movies = payload.movies;
		});
		builder.addCase(getAllMovies.rejected, (state) => {
			state.isLoading = false;
		});
		builder.addCase(getSingleMoviesById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getSingleMoviesById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.movie = payload;
		});
		builder.addCase(getSingleMoviesById.rejected, (state) => {
			state.isLoading = false;
		});
		builder.addCase(createMovie.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(createMovie.rejected, (state) => {
			state.isLoading = false;
		});
		builder.addCase(createMovie.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.message = payload.msg;
		});
	},
});

export default MovieSlice.reducer;
export const { addMovie, setMessage } = MovieSlice.actions;
