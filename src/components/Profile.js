import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

import classes from "./Profile.module.css";

const Profile = () => {
	const { user, isAuthenticated } = useAuth0();

	return (
		isAuthenticated && (
			<div className={classes["profile"]}>
				<img
					className={classes["profile-img"]}
					src={user.picture}
					alt={user.name}
				/>
				<h2 className={classes["profile-user"]}>{user.name}</h2>
				<p className={classes["profile-email"]}>{user.email}</p>
				<JSONPretty className="profile-json" data={user}></JSONPretty>
			</div>
		)
	);
};

export default Profile;
