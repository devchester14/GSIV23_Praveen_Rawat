import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
const StyledAppBar = styled(AppBar)(({ theme }) => ({
	backgroundColor: theme.palette.common.white,
}));

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: theme.palette.grey[200],
	width: '100%', // Extend the width of the search field
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(2),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0.5),
	height: '100%',
	position: 'absolute',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'black',
	paddingLeft: theme.spacing(4),
	backgroundColor: 'transparent',
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		width: '20ch', // Limit the width on larger screens
	},
	'& input': {
		backgroundColor: 'transparent',
		width: '100%',
		'&::placeholder': {
			color: 'rgba(0, 0, 0, 0.6)',
		},
	},
}));

function CustomNavbar() {
	return (
		<StyledAppBar position='static'>
			<Toolbar>
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder='Search…'
						inputProps={{ 'aria-label': 'search' }}
					/>
				</Search>
				<div style={{ flexGrow: 1 }} /> {/* Spacer */}
				<IconButton color='black'>
					<HomeIcon />
				</IconButton>
			</Toolbar>
		</StyledAppBar>
	);
}

export default CustomNavbar;
