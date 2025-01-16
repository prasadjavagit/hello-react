import { books } from './books';
import Book from './Book';
const BookList = () => {
    //view return in jsx
    return (
        <>
            <div class="container text-center mt-3">
                <h1>Authors</h1>
            </div>
            {books.map((book, index) => {
                return <Book key={index} {...book}></Book>;
            })}
        </>
    );
};
export default BookList;