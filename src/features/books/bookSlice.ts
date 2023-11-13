import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import BookType from '../../model/BookType'

export interface BooksState {
  books: BookType[]
}

const initialState: BooksState = {
 books: []
}

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookType>) => {
      state.books.push(action.payload);
    }
  }
})

// Action creators are generated for each case reducer function
export const { addBook } = bookSlice.actions

export default bookSlice.reducer