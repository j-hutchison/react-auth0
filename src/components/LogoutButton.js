import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import classes from "./LogoutButton.module.css";

const LogoutButton = () => {
	const { logout, isAuthenticated } = useAuth0();

	const handleLogoutClick = () => {
		logout();
	};

	return (
		isAuthenticated && (
			<button className={classes["btn-logout"]} onClick={handleLogoutClick}>
				Log Out
			</button>
		)
	);
};

export default LogoutButton;
