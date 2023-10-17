import React from 'react';
import {
  Box, Typography, Button, Avatar, List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import { Book, Chat, Event, TrendingUp } from '@mui/icons-material';
import CurrentBook from './Components/CurrentBook/CurrentBook';
import CompletedBooks from './Components/CompletedBooks/CompletedBooks';

const HomeDashboard = () => {
  // Dummy data for illustration
  const user = {
    name: "John Doe",
    avatarUrl: "https://example.com/avatar.jpg",
    booksRead: 5,
    discussionsJoined: 3,
    upcomingEvents: 2
  };
  return (
    <Box p={4}>
      {/* Welcome Banner */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4">Hello, {user.name}!</Typography>
        <Typography variant="body1">"A room without books is like a body without a soul." - Cicero</Typography>
      </Box>

      {/* User Profile Summary */}
      <Box display="flex" alignItems="center" mb={4}>
        <Avatar src={user.avatarUrl} alt={user.name} sx={{ width: 60, height: 60, mr: 3 }} />
        <Box>
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="body2">Books read: {user.booksRead}</Typography>
          <Typography variant="body2">Discussions: {user.discussionsJoined}</Typography>
          <Typography variant="body2">Upcoming events: {user.upcomingEvents}</Typography>
        </Box>
      </Box>

      {/* Quick Links */}
      <Box mb={4}>
        <Button variant="contained" color="primary" startIcon={<Book />}>New Book</Button>
        <Button variant="contained" color="primary" startIcon={<Chat />} sx={{ ml: 2 }}>New Discussion</Button>
        <Button variant="contained" color="primary" startIcon={<Event />} sx={{ ml: 2 }}>RSVP Event</Button>
        <Button variant="contained" color="primary" startIcon={<TrendingUp />} sx={{ ml: 2 }}>Trending</Button>
      </Box>

      {/* Other sections like Recommendations, Current Reads, Upcoming Events, etc. can follow similarly. */}
      <Typography variant="h5">Current Book</Typography>
      <CurrentBook/>
      <Typography variant="h5">Completed Books</Typography>
      <CompletedBooks/>

    </Box>
  )
}

export default HomeDashboard