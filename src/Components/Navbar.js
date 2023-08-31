// import React from 'react';
// import { AppBar, Toolbar, IconButton, InputBase, styled } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import CastleIcon from '@mui/icons-material/Castle';
// const StyledAppBar = styled(AppBar)(({ theme }) => ({
// 	backgroundColor: theme.palette.common.white,
// }));

// const Search = styled('div')(({ theme }) => ({
// 	position: 'relative',
// 	borderRadius: theme.shape.borderRadius,
// 	backgroundColor: theme.palette.grey[200],
// 	width: '100%', // Extend the width of the search field
// 	[theme.breakpoints.up('sm')]: {
// 		marginLeft: theme.spacing(2),
// 		width: 'auto',
// 	},
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
// 	padding: theme.spacing(0.5),
// 	height: '100%',
// 	position: 'absolute',
// 	display: 'flex',
// 	alignItems: 'center',
// 	justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
// 	color: 'black',
// 	paddingLeft: theme.spacing(4),
// 	backgroundColor: 'transparent',
// 	width: '100%',
// 	[theme.breakpoints.up('sm')]: {
// 		width: '20ch', // Limit the width on larger screens
// 	},
// 	'& input': {
// 		backgroundColor: 'transparent',
// 		width: '100%',
// 		'&::placeholder': {
// 			color: 'rgba(0, 0, 0, 0.6)',
// 		},
// 	},
// }));

// function CustomNavbar() {
// 	return (
// 		<StyledAppBar position='static'>
// 			<Toolbar>
// 				<Search>
// 					<SearchIconWrapper>
// 						<SearchIcon />
// 					</SearchIconWrapper>
// 					<StyledInputBase
// 						placeholder='Search…'
// 						inputProps={{ 'aria-label': 'search' }}
// 					/>
// 				</Search>
// 				<div style={{ flexGrow: 1 }} /> {/* Spacer */}
// 				<IconButton color='black'>
// 					<CastleIcon />
// 				</IconButton>
// 			</Toolbar>
// 		</StyledAppBar>
// 	);
// }

// export default CustomNavbar;
import React from 'react';
import { styled } from '@mui/material/styles';

const Container = styled('div')({
	display: 'flex',
	alignItems: 'flex-start', // Align text to the top
	padding: '20px',
	borderBottom: '1px solid #ccc',
});

const ImageWrapper = styled('div')({
	flex: '0 0 20%', // Image covers one-fifth of the left space
	paddingRight: '20px',
});

const Image = styled('img')({
	width: '100%',
	height: 'auto',
});

const Details = styled('div')({
	flex: '1', // Take the remaining space for text details
});

const Title = styled('h2')({
	margin: '0 0 10px 0',
});

const ImageName = styled('p')({
	margin: '0 0 5px 0',
	fontWeight: 'bold',
});

const Rating = styled('p')({
	margin: '0 0 5px 0',
});

const Description = styled('p')({
	margin: '0',
});

function ImageDetails() {
	return (
		<Container>
			<ImageWrapper>
				<Image src='your-image-url.jpg' alt='Image' />
			</ImageWrapper>
			<Details>
				<Title>Image Title</Title>
				<ImageName>Image Name</ImageName>
				<Rating>Rating: 4.5 / 5</Rating>
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
					libero in metus euismod scelerisque eu non dolor. Sed non finibus
					eros.
				</Description>
			</Details>
		</Container>
	);
}

export default ImageDetails;
