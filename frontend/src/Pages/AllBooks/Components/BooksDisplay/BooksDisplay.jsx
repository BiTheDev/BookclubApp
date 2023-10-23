import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // <-- Import this at the top

import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Select,
  MenuItem,
} from "@mui/material";

const genres = [
  "fiction",
  "mystery",
  "fantasy",
  "history",
  "science",
  "romance",
  "biography",
  "self-help",
  "business",
  "thriller",
];

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
  {code: "zh-CN", label: "Chinese"}
  // Add more languages as needed
];


const BooksDisplay = ({ title, apiUrl }) => {
  const [books, setBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("fiction");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${apiUrl}?genre=${selectedGenre}&language=${selectedLanguage}`)
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error(`Error fetching ${title}:`, error));
  }, [selectedGenre, apiUrl, title, selectedLanguage]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const defaultImage = "path_to_default_image.jpg";

  const handleBookClick = async (book) => {
    console.log("click");
    console.log(book);
    try {
        // Check if the book is from Google Books or already from our DB
            // Save book to local DB
            const response = await fetch('/api/books/save-google-book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: book.volumeInfo.title,
                    author: book.volumeInfo.authors[0],
                    coverImageUrl: book.volumeInfo.imageLinks.thumbnail,
                    description: book.volumeInfo.description,
                    totalPages:book.volumeInfo.pageCount,
                    ISBN: book.volumeInfo.industryIdentifiers[0].identifier,
                }),
            });
            const responseData = await response.json();
            if (response.status === 400) {
              // Book already exists
              navigate(`/book-detail/${responseData.book._id}`);
          } else if (response.status === 201) {
              // Book saved successfully
              navigate(`/book-detail/${responseData._id}`);
          } else {
              // Handle other status codes or errors
              console.error('Error saving or navigating to book:', responseData.message);
          }

    } catch (error) {
        console.error('Error saving or navigating to book:', error);
    }
}


  return (
    <Box p={1}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box mb={3} display="flex" alignItems="center">
        <Typography variant="h6" mr={2}>
          Select a Genre:
        </Typography>
        <Select value={selectedGenre} onChange={handleGenreChange}>
          {genres.map((genre) => (
            <MenuItem key={genre} value={genre}>
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </MenuItem>
          ))}
        </Select>
        <Typography variant="h6" mr={2} ml={3}>
          Language:
        </Typography>
        <Select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <MenuItem key={lang.code} value={lang.code}>
              {lang.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box display="flex" overflow="auto">
        {books.map((book, index) => (
          <Box key={index} width={250} height={320} mr={2}>
            <Card sx={{ height: "100%", width: "200px" }} onClick={() => handleBookClick(book)}>
              <CardMedia
                component="img"
                sx={{
                  height: 130,
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                image={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : defaultImage
                }
                alt={book.volumeInfo.title}
              />
              <CardContent>
                <Typography variant="h6" noWrap>
                  {book.volumeInfo.title}
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  {book.volumeInfo.authors && book.volumeInfo.authors[0]}
                </Typography>
                <Typography variant="body2" mt={2} noWrap>
                  {book.volumeInfo.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BooksDisplay;
