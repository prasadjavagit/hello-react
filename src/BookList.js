import { books } from './books';
import Book from './Book';
const BookList = () => {
    //view return in jsx
    return (
        <section>
            {books.map((book, index) => {
                return <Book key={index} {...book}></Book>;
            })}
        </section>
    );
};
export default BookList;