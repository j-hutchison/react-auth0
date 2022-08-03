import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import classes from "./LoginButton.module.css";

const LoginButton = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();

	const handleLoginClick = () => {
		loginWithRedirect();
	};

	return (
		!isAuthenticated && (
			<button className={classes["btn-login"]} onClick={handleLoginClick}>
				Log In
			</button>
		)
	);
};

export default LoginButton;
