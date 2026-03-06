import { useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import { MenuIcon } from '~/components/icons/menu';
import { navRoutes } from '~/routes';

export default function Layout() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='page-container'>
			<div className='content-container'>
				<NavBar toggleOpen={() => setIsOpen(!isOpen)} />
				<div className='outlet-container'>
					<div style={{ flex: 1 }}>
						<Outlet />
					</div>
					{isOpen ? <NavMenu /> : null}
				</div>
			</div>
			<Footer />
		</div>
	);
}

const NavMenu = () => {
	return (
		<nav className='nav-menu'>
			<ul>
				<NavLink to={navRoutes.home()}>Home</NavLink>
				<NavLink to={navRoutes.modules.home()}>Modules</NavLink>
				<NavLink to={navRoutes.resources.home()}>Resources</NavLink>
			</ul>
		</nav>
	);
};

const NavBar = ({ toggleOpen }: { toggleOpen: () => void }) => {
	return (
		<div className='space-flex-horizontal'>
			<NavLink className='brand-mark' to={navRoutes.home()}>Real Imaginary</NavLink>
			<button className='button-svg-icon' onClick={toggleOpen}>
				<MenuIcon info={{ width: 45, height: 45, color: '#E14A4A'}}/>
			</button>
		</div>
	);
};

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-content">
				<h1>Digital<br/>Commons<br/>Collective</h1>
				<div className="links">
					<NavLink to={navRoutes.home()}>Home</NavLink>
					<NavLink to={navRoutes.modules.home()}>Modules</NavLink>
					<NavLink to={navRoutes.resources.home()}>Resources</NavLink>
				</div>
				<div className="subscribe-container">
					<form>
						<input className="email-input" type="text" name="email" placeholder="Enter your email"/>
						<input className="subscribe-button" type="submit" value="Subscribe"/>
					</form>
				</div>
			</div>
		</div>
	);
};
