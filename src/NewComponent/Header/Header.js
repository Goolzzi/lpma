import React, {Fragment} from "react";
import { connect } from "react-redux";
import Link, { navigateTo } from "gatsby-link";
import PropTypes from "prop-types";
import styled, {css, injectGlobal} from 'styled-components';
import {CSSTransition} from "react-transition-group";
import Auth from "../../Auth";

import logo from "../../assets/images/header/header-logo.svg";
import hamburger from "../../assets/images/header/hamburger.svg";
import downArrow from "../../assets/images/header/down-arrow.svg";
import flagAU from "../../assets/images/header/flag-au.svg";
import flagNZ from "../../assets/images/header/flag-nz.svg";
import flagUS from "../../assets/images/header/flag-us.svg";

import config from "../../../build.config.json";
import LoginLogout from "../../components/LoginLogout";
import BreakPoint from "../../utils/Breakpoint";

import { fetchSettings, getSettings, updateSettings } from '../../store/settings';
import { media, width } from "../../styles/utils";
import { bgImage, bgIcon, hoverState, button } from "../../styles/global";
import { opacify } from "polished";

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
			loginText={"Login"}
			logout={logout}
			cssClass={"button menu-btn header-login"}
		/>
	);
}

class Header extends React.Component {

	state = {
		countryMenuVisible: false,
		mobileMenuActive: false
	}

    componentWillMount = () => {
        const { fetchSettings, updateSettings, pathContext } = this.props;
        
        fetchSettings();
    }

	navigateToSignup = () => {
        navigateTo('join');
    }

	onPage = pageName => {
		this.setState({visible: false});
		this.props.selectPage(pageName);
	}

	toggleMobileMenu = () => {
		this.setState({
			mobileMenuActive: false
		})
	}

	updateLocale = (locale) => {
        const { updateSettings } = this.props; 

        updateSettings({
            locale: locale
        }); 
    }

	renderNavItems = () => {
		const navItems = [
			{
				title: 'Home',
				link: '/'
			},
			{
				title: 'Pricing',
				link: '/pricing'
			},
			{
				title: 'Blog',
				link: '/blog'
			},
			{
				title: 'Events',
				link: '/events'
			},
		]

		const items = navItems.map((item, i) => {
			return (
				<NavItem
					key={i}
					to={item.link}
					activeClassName={'active'}
				>
					{item.title}
				</NavItem>
			)
		})

		return items
	}

	renderCountrySwitcher = () => {
		const { activeCountry, countryMenuVisible } = this.state;
		const { settings } = this.props;

		return (
			<CountrySwitcher>
				<Switcher
					onClick={() => this.setState({countryMenuVisible: !countryMenuVisible })}
				>
					<ActiveFlag
						activeCountry={settings.locale}
					/>
					<DownArrow/>
				</Switcher>

				{this.renderCountryMenu()}				
			</CountrySwitcher>
		)
	}
	
	handleCountryItemPress = (locale) => {
		this.updateLocale(locale)

		this.setState({
			countryMenuVisible: false
		})
	}
	
	renderCountryMenu = () => {
		const { countryMenuVisible } = this.state;

		const countries = [
			{
				label: 'Australia',
				locale: 'au',
				icon: flagAU
			},
			{
				label: 'New Zealand',
				locale: 'nz',
				icon: flagNZ
			},
			{
				label: 'United States',
				locale: 'us',
				icon: flagUS
			},
		]

		const items = countries.map((country, i) => {
			return (
				<CountryItem
					key={i}
					onClick={() => this.handleCountryItemPress(country.locale)}
				>
					<CountryItemFlag
						image={country.icon}
					/>

					<CountryItemLabel>
						{country.label}
					</CountryItemLabel>
				</CountryItem>
			)
		})

		return (
			<CountryMenu
				active={countryMenuVisible}
			>
				<MenuArrow/>
				{items}
			</CountryMenu>
		)
	}
	
	render() {
		return (	
			<Auth
				render={auth => (
					<Wrapper>
						<Container>
							<Logo
								to="/"
							/>

							<Nav>
								{this.renderNavItems()}
								{getLoginLogout(auth)}

								<Signup
									onClick={() => this.navigateToSignup()}
								>
									Sign up
								</Signup> 

								{this.renderCountrySwitcher()}
							</Nav>

							<Hamburger
								onClick={this.mobileMenuActive}	
							/>

						</Container>
					</Wrapper>
				)}
			/>
      	)
  	}
}

const Wrapper = styled.div`
    font-family: 'Montserrat';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;

	display: flex;
	justify-content: center;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 1225px;
    width: 100%;
    padding: 0 40px;
	padding-top: 24px;

    ${media.phone`
        padding: 0 20px;
    `}
`

const Logo = styled(Link)`
	background-image: url(${logo});
	${bgIcon}
	width: 75px;
	height: 51.59px;
	margin-right: auto;
`;

const Nav = styled.div`
	display: flex;
	align-items: center;
	
	${media.tablet`
		display: none;
	`}
`;

const Hamburger = styled.div`
	display: none;
	background-image: url(${hamburger});
	width: 29px;
	height: 22px;
	${hoverState}

	${media.tablet`
		display: flex;
	`}
`;

const NavItem = styled(Link)`
	font-family: Montserrat;
	font-weight: 600;
	font-size: 14px;
	margin-right: 30px;
	color: white;
	position: relative;
	${hoverState}

	&:hover {
		color: white;
	}

	&.active {
		font-weight: 800;

		&::after {
			content: '';
			position: absolute;
			left: 3px;
			right: 3px;
			bottom: -1px;
			height: 1px;
			background: white;
		}
	}
`;

injectGlobal`
	.header-login {
		min-width: 80px;
		padding: 0 22px;
		height: 31px;

		display: flex;
		justify-content: center;
		align-items: center;
		color: white;

		font-family: Montserrat;
		font-weight: 600;
		font-size: 12px;

		background: none;
		border: 1px solid white;
		border-radius: 20px;
		margin-right: 8px;

		${hoverState}

		&:hover {
			color: white;
			border: 1px solid white;
		}
	} 
`

const Signup = styled.a`
    ${button}

	width: auto;
	min-width: 80px;
	padding: 0 22px;
	height: 31px;

	font-family: Montserrat;
	font-weight: 600;
	font-size: 12px;
	margin-right: 12px;
`;

//  Country Switcher

const CountrySwitcher = styled.div`
	position: relative;
`;


const Switcher = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;


const ActiveFlag = styled.div`
	width: 25px;
	height: 27px;
	${bgIcon}

	${props => {
		if (props.activeCountry == 'au') return css`
			background-image: url(${flagAU});
		`

		if (props.activeCountry == 'nz') return css`
			background-image: url(${flagNZ});
		`

		if (props.activeCountry == 'us') return css`
			background-image: url(${flagUS});
		`
	}}
`;

const DownArrow = styled.div`
	background-image: url(${downArrow});
	${bgIcon}
	width: 7.5px;
	height: 4.5px;
`;

// Country Menu

const CountryMenu = styled.div`
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	width: 130px;
	
	position: absolute;
	right: 0;
	bottom: -8px;

	display: flex;
	flex-direction: column;
	transform: translateY(100%);
	background: white;
	border-radius: 3px;	
	
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.35s ease;

	${props => {
		if (props.active) return css`
			opacity: 1;
			pointer-events: all;
		`
	}}
`;


const MenuArrow = styled.div`
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 0 5.5px 4.5px 5.5px;
	border-color: transparent transparent #ffffff transparent;

	position: absolute;
	top: -3.5px;
	right: 10px;
`;

const CountryItem = styled.div`
	height: 30px;
	display: flex;
	align-items: center;
	padding-left: 8px;
	cursor: pointer;
	
	&:not(:last-child) {
		border-bottom: 0.5px solid #CAD7DC;
	}
`;

const CountryItemFlag = styled.div`
	width: 25px;
	height: 23px;
	${bgIcon}
	background-image: url(${props => props.image});
	margin-right: 8px;
`;

const CountryItemLabel = styled.div`
	font-family: Montserrat;
	font-weight: 600;
	font-size: 10px;
	color: #595959;
`;

const mapDispatchToProps = dispatch => ({
    fetchSettings() {
        dispatch(fetchSettings())
    },
    updateSettings(setting) {
        dispatch(updateSettings(setting))
    },
})

const mapStateToProps = (state, props) => ({
    settings: state.settings.settings
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

