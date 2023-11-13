import { useEffect, useState } from 'react'
import '../App.css'

import Books from '../components/Book/Books';
import BookType from '../model/BookType';
import Header from '../components/Header/Header';

// Define the type for your state
type RootProps = {
  books: BookType[]
}

const Root = ({books} : RootProps) => {

  // const[books, setBooks] = useState<BookType>([]);

  // useEffect(() => {
  //   // Inside the useEffect, you can make an API request
  //   fetch('http://localhost:8082/v1/api/cebooklub/books')
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       // Update the state with the fetched data
  //       // setData(responseData);
  //       setBooks(responseData);
  //       console.log(responseData);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);
  
  return (
    <>
        <Header />
    </>
  )
}

export default Root
