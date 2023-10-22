import BooksDisplay from "../BooksDisplay/BooksDisplay";

const TopRatedBooks = () => {
  return <BooksDisplay title="Top Rated Books" apiUrl="/api/books/top-rated-books" />;
};

export default TopRatedBooks;
