import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

const testimonials = [
  {
    name: "User 1",
    testimonial:
      "This community helped me understand books in a way I never imagined!",
    avatar: "path-to-avatar1.jpg",
  },
  // ... (more testimonials)
];

const discussions = [
  {
    title: "Discussion on 'Book Title'",
    snippet: "A recent lively debate about the protagonist's choices...",
  },
  // ... (more discussions)
];

const CommunityHighlight = () => {
  return (
    <Box p={4} bgcolor="background.default">
      <Typography variant="h4" align="center" gutterBottom>
        Community Highlights
      </Typography>

      <Typography variant="h5" align="center" gutterBottom mt={3}>
        What Our Members Say
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        mt={2}
        gap={2}
      >
        {testimonials.map((testimonial, index) => (
          <Card key={index} sx={{ maxWidth: 345, mb: 2 }}>
            <CardContent>
              <Box display="flex" alignItems="center">
                <Avatar src={testimonial.avatar} alt={testimonial.name} />
                <Typography variant="subtitle1" ml={2}>
                  {testimonial.name}
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" mt={2}>
                "{testimonial.testimonial}"
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Typography variant="h5" align="center" gutterBottom mt={4}>
        Recent Discussions
      </Typography>
      <Box
        mt={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
      >
        {discussions.map((discussion, index) => (
          <Box
            key={index}
            width={1}
            maxWidth={800}
            p={2}
            bgcolor="background.paper"
            borderRadius={2}
          >
            <Typography variant="h6">{discussion.title}</Typography>
            <Typography variant="body2" mt={1} color="textSecondary">
              {discussion.snippet}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box display="flex" justifyContent="center" mt={4}>
        <Button variant="contained" color="primary" size="large">
          Join the Discussions
        </Button>
      </Box>
    </Box>
  );
};

export default CommunityHighlight;
