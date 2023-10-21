import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { AuthContext } from '../../authContext';

import TrendingBooks from './Components/Trending/TrendingBooks';
import RecommendationBooks from './Components/Recommendation/RecommendationBooks';
import TopRatedBooks from './Components/TopRated/TopRatedBooks';
import BookList from './Components/BookList/BookList';

const AllBooks = () => {
  const { authToken } = useContext(AuthContext);

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Trending Books</Typography>
      <TrendingBooks />
      <TopRatedBooks/>
      {authToken && (
        <>
          <Typography variant="h5" gutterBottom>Recommended for You</Typography>
          <RecommendationBooks />
        </>
      )}

      <Typography variant="h5" gutterBottom>All Books</Typography>
      <BookList />
    </Box>
  );
}

export default AllBooks;
