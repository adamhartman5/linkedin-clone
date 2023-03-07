import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<img
					src='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg'
					alt=''
				/>

				<div className='header__search'>
					<SearchIcon />
					<input type='text' />
				</div>
			</div>

			<div className='header__right'></div>
			<HeaderOption Icon={HomeIcon} title='Home' />
			<HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
			<HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
			<HeaderOption Icon={ChatIcon} title='Messaging' />
			<HeaderOption Icon={NotificationsIcon} title='Notifications' />
			<HeaderOption
				avatar='https://cdn.discordapp.com/avatars/551956038459457539/943d6c9d60c052884d158d8d8faac6eb.png?size=240'
				title='Me'
			/>
		</div>
	);
}

export default Header;
