// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import BookType from '../../model/BookType'
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const cebooklubApi = createApi({
  reducerPath: 'cebooklubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8082/v1/api/cebooklub/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<BookType[], string>({
      query: (name) => `books/${name}`,
    }),
    getAllBooks: builder.query<BookType[], string>({
        query: () => `books`,
      }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBooksQuery } = cebooklubApi