import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import { Book, Chat, Event, TrendingUp } from "@mui/icons-material";
import CurrentBook from "./Components/CurrentBook/CurrentBook";
import CompletedBooks from "./Components/CompletedBooks/CompletedBooks";
import BookSearch from "./Components/BookSearch/BookSearch";
import { AuthContext } from "../../authContext";

const HomeDashboard = () => {
  const { authToken, setAuthToken } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (authToken) {
        fetch("api/users/userInfo", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        })
          .then((res) => {
            if (!res.ok) throw new Error("Error fetching user info");
            return res.json();
          })
          .then((data) => setUser(data))
          .catch((error) => {
            console.error("Error fetching user details:", error);
          });
      }
    }, 2000); // 2 seconds delay before executing the logic

    return () => clearTimeout(timer); // Cleanup: clears the timer if the component is unmounted before the timer completes
  }, [authToken]);

  if (!user)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  return (
    <Box p={4}>
      {/* Welcome Banner */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4">Hello, {user.username}!</Typography>
        <Typography variant="body1">
          "A room without books is like a body without a soul." - Cicero
        </Typography>
      </Box>

      {/* User Profile Summary */}
      <Box display="flex" alignItems="center" mb={4}>
        <Avatar
          src={user.avatarUrl}
          alt={user.username}
          sx={{ width: 60, height: 60, mr: 3 }}
        />
        <Box>
          <Typography variant="h6">{user.username}</Typography>
          <Typography variant="body2">Books read: {user.booksRead}</Typography>
          <Typography variant="body2">
            Discussions: {user.discussionsJoined}
          </Typography>
          <Typography variant="body2">
            Upcoming events: {user.upcomingEvents}
          </Typography>
        </Box>
      </Box>

      {/* Quick Links */}
      <Box mb={4}>
        <Button variant="contained" color="primary" startIcon={<Book />}>
          New Book
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Chat />}
          sx={{ ml: 2 }}
        >
          New Discussion
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Event />}
          sx={{ ml: 2 }}
        >
          RSVP Event
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<TrendingUp />}
          sx={{ ml: 2 }}
        >
          Trending
        </Button>
      </Box>

      {/* Other sections like Recommendations, Current Reads, Upcoming Events, etc. can follow similarly. */}
      <Typography variant="h5">Current Book</Typography>
      <CurrentBook />
      <Typography variant="h5">Completed Books</Typography>
      <CompletedBooks />
      <BookSearch />
    </Box>
  );
};

export default HomeDashboard;
