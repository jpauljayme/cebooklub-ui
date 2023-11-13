import React, { useEffect } from 'react'
import BookTeaser from './BookTeaser'
import BookType from '../../model/BookType'
import { Button, Card, Container, Grid, SimpleGrid, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel';
type Props = {
    books: BookType[]
}

const Books = ({ books }: Props) => {

    return (
        <>
            <SimpleGrid cols={4}>
                {books && books.map((book: BookType, i) => (
                    <div>

                        <BookTeaser key={i}
                            id={book.id}
                            title={book.title}
                            isbn={book.isbn}
                            imageUrl={book.imageUrl}
                            description={book.description}
                            original_publication_date={book.original_publication_date}
                            averageRating={book.averageRating}
                            numPages={book.numPages}
                            authors={1}
                            completionDate={book.completionDate}
                        />
                    </div>

                ))
                }
            </SimpleGrid>

        </>
    )
}

export default Books;