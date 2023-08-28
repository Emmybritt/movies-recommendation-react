import { FC } from "react";
import Input from "../../components/InputField";
import { MovieGenre } from "../../constants";
import Button from "../../Button";
import { useMovie } from "../../hooks/useMovie";

const AddMovieComponent: FC = () => {
	const { error, handleChange, handleCreateMovie, isLoading } = useMovie();

	return (
		<section className="movie-detail">
			<div className="">
				<figure className="movie-form-banner">
					<Input
						type="text"
						onChange={(e) => handleChange("title", e)}
						error={error?.title}
						placeholder="Enter movie title"
						withAsterisk
					/>
					<Input
						type="text"
						placeholder="Enter Director name"
						onChange={(e) => handleChange("director", e)}
						error={error?.director}
						withAsterisk
					/>
					<Input
						type="select"
						data={MovieGenre}
						placeholder="Select Genre"
						onChange={(e) => handleChange("genre", e)}
						error={error?.genre}
					/>
					<Input
						type="textArea"
						onChange={(e) => handleChange("plotSummary", e)}
						placeholder="Enter Summary"
						minRows={4}
						withAsterisk
					/>
					<Input type="number" onChange={(e) => handleChange("rating", e)} placeholder="Enter Ratings" withAsterisk />
					<Input
						type="number"
						onChange={(e) => handleChange("releaseYear", e)}
						placeholder="Enter release year"
						withAsterisk
					/>
					<Input type="text" placeholder="Enter Live Video Url" onChange={(e) => handleChange("trailerURL", e)} />
					<Input
						type="number"
						placeholder="Enter Live Video duration in seconds"
						onChange={(e) => handleChange("duration", e)}
					/>
					<Input type="text" placeholder="Enter Live Video banner url" onChange={(e) => handleChange("posterURL", e)} />
					<Input
						type="select"
						placeholder="Select video Quality"
						onChange={(e) => handleChange("badge", e)}
						data={[
							{ label: "240p", value: "240p" },
							{ label: "360p", value: "360p" },
							{ label: "480p", value: "480p" },
							{ label: "1080p", value: "1080p" },
							{ label: "4k", value: "4k" },
							{ label: "HD", value: "HD" },
						]}
					/>
					<div style={{ position: "relative" }}>
						<Button
							onClick={handleCreateMovie}
							style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
							className="btn btn-primary"
							title={isLoading ? "Creating movie..." : "Create Video"}
						/>
					</div>
				</figure>
			</div>
		</section>
	);
};

export default AddMovieComponent;
