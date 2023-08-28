import { FC } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import ServiceBanner from "../../assets/service-banner.jpg";
import { useMovie } from "../../hooks/useMovie";
import MovieCard from "../../components/MovieCard";

const HomePage: FC = () => {
	const { isLoading, movies } = useMovie();

	return (
		<>
			<main>
				<article>
					{/* HERO */}
					<section className="hero">
						<div className="container">
							<div className="hero-content">
								<p className="hero-subtitle" data-aos="fade-right">
									Filmlane
								</p>
								<h1 className="h1 hero-title" data-aos="flip-left">
									Unlimited <strong>Movie</strong>, TVs Shows, & More.
								</h1>
								<div className="meta-wrapper">
									<div className="badge-wrapper">
										<div className="badge badge-fill">PG 18</div>
										<div className="badge badge-outline">HD</div>
									</div>
									<div className="ganre-wrapper">
										<a href="#">Romance,</a>
										<a href="#">Drama</a>
									</div>
									<div className="date-time">
										<div>
											<CalendarMonthOutlinedIcon />
											<time dateTime="2022">2022</time>
										</div>
										<div>
											<AccessTimeOutlinedIcon />
											<time dateTime="PT128M">128 min</time>
										</div>
									</div>
								</div>
								<button className="btn btn-primary">
									<PlayCircleOutlinedIcon />
									<span>Watch now</span>
								</button>
							</div>
						</div>
					</section>

					{/* UPCOMING */}
					<section className="upcoming">
						<div className="container">
							<div className="flex-wrapper">
								<div className="title-wrapper">
									<p className="section-subtitle">Online Streaming</p>
									<h2 className="h2 section-title">Upcoming Movies</h2>
								</div>
								{isLoading ? (
									<p style={{ color: "white" }}>loading...</p>
								) : (
									<ul className="filter-list">
										<li>
											<button className="filter-btn">Movies</button>
										</li>
										<li>
											<button className="filter-btn">TV Shows</button>
										</li>
										<li>
											<button className="filter-btn">Anime</button>
										</li>
									</ul>
								)}
							</div>
							<ul className="movies-list  has-scrollbar">
								{movies.map((movie, _index: number) => (
									<MovieCard
										key={_index}
										name={movie.title}
										_id={movie._id}
										badge={movie.badge}
										duration={movie.duration}
										rating={movie.rating}
										posterUrl={movie.posterURL}
										trailerUrl={movie.trailerURL}
										year={movie.releaseYear}
									/>
								))}
							</ul>
						</div>
					</section>

					{/* SERVICE */}
					<section className="service">
						<div className="container">
							<div className="service-banner">
								<figure>
									<img src={ServiceBanner} alt="HD 4k resolution! only $3.99" />
								</figure>
								<a href={ServiceBanner} download className="service-btn">
									<span>Download</span>
									<CloudDownloadOutlinedIcon />
								</a>
							</div>
							<div className="service-content">
								<p className="service-subtitle">Our Services</p>
								<h2 className="h2 service-title">Download Your Shows Watch Offline.</h2>
								<p className="service-text">
									Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.
									There are many variations of passages of lorem Ipsum available, but the
									majority have suffered alteration in some injected humour.
								</p>
								<ul className="service-list">
									<li>
										<div className="service-card">
											<div className="card-icon">
												<LiveTvOutlinedIcon />
											</div>
											<div className="card-content">
												<h3 className="h3 card-title">Enjoy on Your TV.</h3>
												<p className="card-text">
													Lorem ipsum dolor sit amet, consecetur
													adipiscing elit, sed do eiusmod tempor.
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className="service-card">
											<div className="card-icon">
												<VideocamOutlinedIcon />
											</div>
											<div className="card-content">
												<h3 className="h3 card-title">Watch Everywhere.</h3>
												<p className="card-text">
													Lorem ipsum dolor sit amet, consecetur
													adipiscing elit, sed do eiusmod tempor.
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</section>

					{/* CTA */}
					<section className="cta">
						<div className="container">
							<div className="title-wrapper">
								<h2 className="cta-title">Trial start first 30 days.</h2>
								<p className="cta-text">Enter your email to create or restart your membership.</p>
							</div>
							<form action="" className="cta-form">
								<input
									type="email"
									name="email"
									required
									placeholder="Enter your email"
									className="email-field"
								/>
								<button type="submit" className="cta-form-btn">
									Get started
								</button>
							</form>
						</div>
					</section>
				</article>
			</main>
		</>
	);
};

export default HomePage;
