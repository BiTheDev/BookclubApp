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
      <TrendingBooks />
      <TopRatedBooks/>
      {authToken && (
        <>
          <RecommendationBooks />
        </>
      )}
      <BookList />
    </Box>
  );
}

export default AllBooks;
