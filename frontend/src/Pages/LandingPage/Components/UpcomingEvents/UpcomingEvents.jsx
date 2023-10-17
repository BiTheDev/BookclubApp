import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';

const events = [
  {
    title: "Author Interview: John Doe",
    date: "November 5, 2023",
    description: "Join us for an insightful conversation with the bestselling author, John Doe.",
    eventImage: "path-to-image1.jpg"
  },
  // ... (more events)
];

const UpcomingEvents = () => {
  return (
    <Box p={4} bgcolor="background.paper">
      <Typography variant="h4" align="center" gutterBottom>
        Upcoming Events
      </Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="center" mt={4} gap={2}>
        {events.map((event, index) => (
          <Card key={index} sx={{ maxWidth: 345, mb: 2 }}>
            <CardMedia
              component="img"
              height="140"
              image={event.eventImage}
              alt={event.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {event.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {event.date}
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={2}>
                {event.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box display="flex" justifyContent="center" mt={4}>
        <Button variant="contained" color="primary" size="large">
          View All Events
        </Button>
      </Box>
    </Box>
  )
}

export default UpcomingEvents