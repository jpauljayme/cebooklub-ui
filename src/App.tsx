import { useEffect, useState } from 'react'
import './App.css'

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import Books from './components/Book/Books';
import BookType from './model/BookType';
// import Header from './components/Header/Header';
import Header from './components/Header/Header';
import Root from './routes/root';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Book from './components/Book/Book';

// Define the type for your state
interface AppState {
  status: string;
  data: BookType[];
}

function App() {

  const [books, setBooks] = useState<AppState>({
    status: "",
    data: []
  });
  const [currentBook, setCurrentBook] = useState<BookType>({});

  useEffect(() => {
    // Inside the useEffect, you can make an API request
    fetch('http://localhost:8082/v1/api/cebooklub/books')
      .then((response) => response.json())
      .then((responseData) => {
        // Update the state with the fetched data
        // setData(responseData);
        setBooks(responseData);
        console.log(responseData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // currentBook =

  return (
    <>
      <Header />
      {books && books.data.map(book => {
        let currentBook = null;
        const bookDate = new Date(book.completionDate);
        if ( bookDate.getMonth()== new Date().getMonth() + 1) {
          currentBook = <Book
            id={book.id}
            title={book.title}
            isbn={book.isbn}
            imageUrl={book.imageUrl}
            description={book.description}
            original_publication_date={book.original_publication_date}
            averageRating={book.averageRating}
            numPages={book.numPages}
            authors={1}
            completionDate={book.completionDate} />
        }
        return currentBook;
      })}
    </>
  )
}

export default App;

