import BooksDisplay from "../BooksDisplay/BooksDisplay";

const TopRatedBooks = () => {
  return <BooksDisplay title="Top Rated Books" apiUrl="/api/topRatedBooks" />;
};

export default TopRatedBooks;
