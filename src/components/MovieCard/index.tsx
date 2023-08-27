import { FC } from "react";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Image from "../../assets/upcoming-1.png";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "../../Button";
import { useMovie } from "../../hooks/useMovie";

type MovieCardAttr = {
	name: string;
	posterUrl?: string;
	_id: string;
	year?: string;
	rating?: number;
	duration?: string;
	badge?: string;
	trailerUrl?: string;
};

const MovieCard: FC<MovieCardAttr> = ({ posterUrl, name, _id, year, rating, duration, badge, trailerUrl }) => {
	const { deleteMovie } = useMovie();
	return (
		<li>
			<div className="movie-card">
				<Link to={`/movie-details/${_id}`}>
					<a href={trailerUrl} target="_blank">
						<figure className="card-banner">
							<img src={posterUrl ? posterUrl : Image} alt={name} />
						</figure>
					</a>
				</Link>

				<div className="title-wrapper">
					<a href="./movie-details.html">
						<h3 className="card-title">{name ? name : "The Northman"}</h3>
					</a>

					<time dateTime="2022">{year ? year : new Date().getFullYear()}</time>
				</div>

				<div className="card-meta">
					<div className="badge badge-outline">{badge ? badge : "HD"}</div>
					<Button
						style={{ marginTop: 10 }}
						onClick={() => deleteMovie(_id)}
						icon={<DeleteOutlineIcon color="error" />}
					/>

					<div className="duration">
						<AccessTimeOutlinedIcon />

						<time dateTime="PT137M">{duration ? duration : 0} min</time>
					</div>

					<div className="rating">
						<StarOutlinedIcon />
						<data>{rating ? rating.toFixed(1) : 9.5}</data>
					</div>
				</div>
			</div>
		</li>
	);
};

export default MovieCard;
