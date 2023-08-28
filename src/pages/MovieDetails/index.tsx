import { FC, useEffect } from "react";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getSingleMoviesById } from "../../store/features/movieSlice";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import Image from "../../assets/upcoming-1.png";

const MovieDetails: FC = () => {
	const dispatch = useAppDispatch();
	const params = useParams();
	const { movie } = useAppSelector((store) => store.movie);

	useEffect(() => {
		if (params.id) {
			dispatch(getSingleMoviesById({ _id: params.id }));
		}
	}, [dispatch, params.id]);
	console.log(movie);

	return (
		<>
			<section className="movie-detail">
				<div className="container">
					<figure className="movie-detail-banner">
						<img src={movie?.posterURL ? movie?.posterURL : Image} alt="Free guy movie poster" />
						<button className="play-btn">
							<PlayCircleOutlineOutlinedIcon />
						</button>
					</figure>

					<div className="movie-detail-content">
						<p className="detail-subtitle">New Episodes</p>
						<h1 className="h1 detail-title">{movie?.title}</h1>
						<div className="meta-wrapper">
							{movie?.badge && (
								<div className="badge-wrapper">
									<div className="badge badge-outline">{movie?.badge}</div>
								</div>
							)}

							<div className="ganre-wrapper">
								<strong className="h3">Genre:</strong> <a href="#">{movie?.genre}</a>
							</div>

							<div className="date-time">
								<div>
									<CalendarMonthOutlinedIcon />

									<time dateTime="2021">{movie?.releaseYear}</time>
								</div>

								{movie?.duration && (
									<div>
										<AccessTimeOutlinedIcon />
										<time dateTime="PT115M">{movie?.duration} min</time>
									</div>
								)}
							</div>
						</div>
						<p className="storyline">{movie?.plotSummary}</p>

						<div className="details-actions">
							<button className="share">
								<ShareOutlinedIcon color="primary" />

								<span>Share</span>
							</button>

							<div className="title-wrapper">
								<p className="title">Prime Video</p>

								<p className="text">Streaming Channels</p>
							</div>

							<a href={movie?.trailerURL} target="_blank" className="btn btn-primary">
								<PlayCircleOutlinedIcon />

								<span>Watch Now</span>
							</a>
						</div>

						<a href={movie?.trailerURL} download className="download-btn">
							<span>Download</span>
							<CloudDownloadOutlinedIcon />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default MovieDetails;
