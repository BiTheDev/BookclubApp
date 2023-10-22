import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Card,
  CardContent,
  CardMedia,
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

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("fiction");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, selectedGenre, selectedLanguage]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        `/api/books/all-list?search=${searchTerm}&genre=${selectedGenre}&language=${selectedLanguage}`
      );
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching book list:", error);
    }
  };

  const defaultImage = "path_to_default_image.jpg";

  return (
    <Box p={1}>
      <Typography variant="h5" gutterBottom>
        Other Books
      </Typography>

      <Box mb={3} display="flex" alignItems="center">
        <Typography variant="h6" mr={2}>
          Search:
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Typography variant="h6" mr={2} ml={3}>
          Genre:
        </Typography>
        <Select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
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

      <Box display="flex" flexWrap="wrap">
        {books.map((book, index) => (
          <Box key={index} width={250} height={320} m={2}>
            <Card sx={{ height: "100%", width: "200px" }}>
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

export default BookList;
