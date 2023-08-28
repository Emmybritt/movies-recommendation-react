import { FC } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import { useMovie } from "../../hooks/useMovie";
import { MoviesAttr } from "../../store/features/movieSlice";
import { Link } from "react-router-dom";
import { MovieGenre } from "../../constants";

const AllMovies: FC = () => {
	const { movies, handleGetFilteredMovie } = useMovie();
	return (
		<>
			{/* TOP RATED */}
			<section className="top-rated">
				<div className="container">
					<p className="section-subtitle">Online Streaming</p>
					<h2 className="h2 section-title">Top Movie Genres</h2>
					<ul className="filter-list">
						{MovieGenre.slice(0, 4).map((singleGenre: (typeof MovieGenre)[0], _index: number) => {
							return (
								<li key={_index}>
									<button
										onClick={() => handleGetFilteredMovie(singleGenre.value)}
										className="filter-btn">
										{singleGenre.label}
									</button>
								</li>
							);
						})}
					</ul>
					<ul className="movies-list">
						{movies.map((movie: MoviesAttr, _index: number) => {
							return (
								<li key={_index}>
									<div className="movie-card">
										<Link to={`/movie-details/${movie._id}`}>
											<figure className="card-banner">
												<img
													src={movie.posterURL}
													alt="Moon Knight movie poster"
												/>
											</figure>
										</Link>
										<div className="title-wrapper">
											<Link to={`/movie-details/${movie._id}`}>
												<h3 className="card-title">{movie.title}</h3>
											</Link>

											<time dateTime="2022">{movie.releaseYear}</time>
										</div>

										<div className="card-meta">
											<div className="badge badge-outline">2K</div>

											<div className="duration">
												<AccessTimeIcon />

												<time dateTime="PT47M">{movie.duration} min</time>
											</div>

											<div className="rating">
												<StarIcon />
												<data>{movie.rating}</data>
											</div>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		</>
	);
};

export default AllMovies;
