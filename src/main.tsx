import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/index.tsx";
import HomeLayout from "./layouts/HomeLayout.tsx";
import AddMovieComponent from "./pages/AddMovie/index.tsx";
import MovieDetails from "../src/pages/MovieDetails";
import { Notifications } from "@mantine/notifications";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "/add-movie",
				element: <AddMovieComponent />,
			},
			{
				path: "/movie-details/:id",
				element: <MovieDetails />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<React.StrictMode>
			<RouterProvider router={router}>
				<Notifications />
				<App />
			</RouterProvider>
		</React.StrictMode>
	</Provider>
);
