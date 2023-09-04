import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  width: '100%',
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
    width: '20ch',
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
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // This is where you can perform your search action when searchQuery changes.
    // For demonstration purposes, we'll just log the searchQuery to the console.
    console.log('Search Query:', searchQuery);
  }, [searchQuery]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // When "Enter" is pressed, update the searchQuery state.
      setSearchQuery(e.target.value);
      navigate(`search/${e.target.value}`);
      // Clear the search bar by setting searchQuery to an empty string
      setSearchQuery('');
    }
  };

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
            onKeyDown={handleKeyDown} // Listen for "Enter" key press
            value={searchQuery} // Bind the input value to searchQuery
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
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
