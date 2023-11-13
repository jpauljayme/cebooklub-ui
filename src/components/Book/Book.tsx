import React, { useEffect, useState } from 'react'
import { Card, Image, Text, Badge, Button, Group, Container, Space, Paper, Title } from '@mantine/core';
import classes from './Book.module.css';

type Props = {
    id: number,
    title: string,
    isbn: string,
    imageUrl: number,
    description: string,
    original_publication_date: string,
    averageRating: number,
    numPages: number,
    authors: any,
    completionDate: any
}

const Book = ({ id,
    title,
    isbn,
    imageUrl,
    description,
    original_publication_date, averageRating, numPages, authors, completionDate }: Props) => {


    const [imageData, setImageData] = useState(null);
    const [blob, setBlob] = useState({});

    useEffect(() => {

        console.log("Useeffect")

        const fetchCover = async (isbn: string) => {
            const response = await fetch("http://localhost:8082/v1/api/cebooklub/covers/" + isbn);
            const blob = await response.blob();
            setBlob(blob);

            const reader = new FileReader();
            reader.onload = () => {
                setImageData(reader.result);
            };
            reader.readAsDataURL(blob);
        }

        console.log(isbn);
        fetchCover(isbn);
    }, [id]);


    return (
        <>
            <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}
            >

                <Card.Section>
                    {
                        imageData ? <Image className={classes.image}
                            src={imageData && imageData}
                            alt={title}
                        />
                            :
                            <p>Image is loading..</p>
                    }
                </Card.Section>
            </Card>
        </>
    )
}

export default Book