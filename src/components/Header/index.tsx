import { FC } from "react";
import Logo from "../../assets/logo.svg";
import Button from "../../Button";
import LanguageIcon from "@mui/icons-material/Language";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { HeaderLinkPath, HeaderLinkPathAttrr } from "../../constants";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Header: FC = () => {
	return (
		<header className="header" data-header>
			<div className="container">
				<div className="overlay" data-overlay></div>
				<a href="./index.html" className="logo">
					<img src={Logo} alt="Filmlane logo" />
				</a>
				<div className="header-actions">
					<Button className="search-btn" icon={<SearchOutlinedIcon />} />
					<div className="lang-wrapper">
						<label htmlFor="language">
							<LanguageIcon />
						</label>
						<select name="language" id="language">
							<option value="en">EN</option>
							<option value="au">AU</option>
							<option value="ar">AR</option>
							<option value="tu">TU</option>
						</select>
					</div>
					<Button title="Sign in" className="btn btn-primary" />
				</div>
				<Button icon={<TocOutlinedIcon />} className="menu-open-btn" />
				<nav className="navbar" data-navbar>
					<div className="navbar-top">
						<a href="./index.html" className="logo">
							<img src={Logo} alt="Filmlane logo" />
						</a>
						<Button className="menu-close-btn" icon={<CloseOutlinedIcon />} />
					</div>
					<ul className="navbar-list">
						{HeaderLinkPath.map((link: HeaderLinkPathAttrr[0], _index: number) => {
							return (
								<li key={_index}>
									<Link to={link.path} className="navbar-link">
										{link.name}
									</Link>
								</li>
							);
						})}
					</ul>
					<ul className="navbar-social-list">
						<li>
							<a href="#" className="navbar-social-link">
								<TwitterIcon />
							</a>
						</li>
						<li>
							<a href="#" className="navbar-social-link">
								<FacebookIcon />
							</a>
						</li>
						<li>
							<a href="#" className="navbar-social-link">
								<PinterestIcon />
							</a>
						</li>
						<li>
							<a href="#" className="navbar-social-link">
								<InstagramIcon />
							</a>
						</li>
						<li>
							<a href="#" className="navbar-social-link">
								<YouTubeIcon />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
