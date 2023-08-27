import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import FooterComponent from "../components/Footer";

const HomeLayout: FC = () => {
	return (
		<>
			<Header />
			<Outlet />
			<FooterComponent />
		</>
	);
};

export default HomeLayout;
