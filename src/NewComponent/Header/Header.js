import React, {Fragment} from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import {CSSTransition} from "react-transition-group";
import Auth from "../../Auth";

import imgLogo from "../../assets/images/NewDesign/Header/logo.svg";
import icClose from "../../assets/images/NewDesign/Header/ic-close.svg";
import icMenu from "../../assets/images/NewDesign/Header/ic-menu.svg";
import icMenuBright from "../../assets/images/NewDesign/Header/ic-menu-bright.svg";
import imgLogoBright from "../../assets/images/NewDesign/Header/logo-bright.svg";
import config from "../../../build.config.json";
import LoginLogout from "../../components/LoginLogout";
import BreakPoint from "../../utils/Breakpoint";

const menuPrimaryIndexes = [0, 1, 18];
const secondaryIndexes = [2, 6, 10, 14];
const primaryIndexes = [0, 1, 3, 4, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17, 18];
var menuClass = "";
var btnClass = "";

function getLoginLogout(auth) {
	const {auth: authVar, env} = config;
	const {login, logout, isAuthenticated} = auth;

  	if (authVar === "iris") {
		const href =
			env === "stage"
				? "https://qa.lpma.com/login-auth0-ailo"
				: "https://lpma.com/login-auth0-ailo";

		if (!isAuthenticated()) {
			return (
				<button
				className="button menu-btn"
				onClick={() => {
					window.location.replace(href);
				}}>
				Sign in
				</button>	
			);
		}
  	}

	return (
		<LoginLogout
			isAuthenticated={isAuthenticated()}
			login={login}
			loginText={"Sign in"}
			logout={logout}
			cssClass={"button menu-btn"}
		/>
	);
}

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
		};
	}

	onPage = pageName => {
		this.setState({visible: false});
		this.props.selectPage(pageName);
	};

	render() {
		return (
			<div/>
		)
  	}
}

export default Header;
