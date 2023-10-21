import BooksDisplay from "../BooksDisplay/BooksDisplay";
const TrendingBooks = () => {
  return <BooksDisplay title="Trending Books" apiUrl="/api/trendingBooks" />;
};

export default TrendingBooks;
