import BooksDisplay from "../BooksDisplay/BooksDisplay";
const TrendingBooks = () => {
  return <BooksDisplay title="Trending Books" apiUrl="/api/books/trending-books" />;
};

export default TrendingBooks;
