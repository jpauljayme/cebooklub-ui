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

const BookTeaser = ({ id,
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

    const onBtnClick = () => {
        
    }


    return (
        <>
            {/* <Paper>
                {
                    imageData ? <Image className={classes.image}
                        // src={bookCoverUrl}

                        src={imageData && imageData}
                        alt={title}

                    />
                        :
                        <p>Image is loading..</p>
                }
                <Button>
                    Read more
                </Button>
            </Paper> */}
            <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}
                // style={{ backgroundImage: `url(${imageData})` }}
            >
            
                <Card.Section>
                {
                        imageData ? <Image className={classes.image}
                            // src={bookCoverUrl}
                            // height={200}
                            src={imageData && imageData}
                            alt={title}

                        />
                            :
                            <p>Image is loading..</p>
                    }
                    <Group>
                        <Text>{completionDate}</Text>
                    <Button color='gray'
                        onClick={ () => onBtnClick}
                    >
                    Read more
                   </Button>
                    </Group>
                   
                </Card.Section>
            </Card>
        </>
    )
}

export default BookTeaser