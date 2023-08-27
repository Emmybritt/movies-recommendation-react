import { FC } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Logo from "../../assets/logo.svg";
import { HeaderLinkPath, HeaderLinkPathAttrr } from "../../constants";
import { Link } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const FooterComponent: FC = () => {
	return (
		<>
			<footer className="footer">
				<div className="footer-top">
					<div className="container">
						<div className="footer-brand-wrapper">
							<a href="./index.html" className="logo">
								<img src={Logo} alt="Filmlane logo" />
							</a>
							<ul className="footer-list">
								{HeaderLinkPath.map((link: HeaderLinkPathAttrr[0], _index: number) => {
									return (
										<li key={_index}>
											<Link to={link.path} className="footer-link">
												{link.name}
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
						<div className="divider"></div>
						<div className="quicklink-wrapper">
							<ul className="quicklink-list">
								<li>
									<a href="#" className="quicklink-link">
										Faq
									</a>
								</li>
								<li>
									<a href="#" className="quicklink-link">
										Help center
									</a>
								</li>
								<li>
									<a href="#" className="quicklink-link">
										Terms of use
									</a>
								</li>
								<li>
									<a href="#" className="quicklink-link">
										Privacy
									</a>
								</li>
							</ul>
							<ul className="social-list">
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
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<p className="copyright">
							&copy; {new Date().getFullYear()} <a href="#">Emmybritt</a>. All Rights Reserved
						</p>
						<img src={Logo} alt="" className="footer-bottom-img" />
					</div>
				</div>
			</footer>
			<a href="#top" className="go-top" data-go-top>
				<ExpandLessIcon />
			</a>
		</>
	);
};

export default FooterComponent;
