import React from 'react';
import {
    Heading,
    Text,
    Image,
    Grid,
    GridItem,
    LinkOverlay,
    LinkBox
} from '@chakra-ui/react';

function Project({ project }) {
    const { title, description, languages, image, repository, link  } = project;

    return (
        <LinkBox p={5}
        shadow='md'
        borderWidth='1px'
        flex='1'
        borderRadius='md'
        >
        <LinkOverlay href={link} target="_blank" rel="noopener noreferrer"></LinkOverlay>
        <Grid templateColumns='repeat(2, 1fr)' key={title}>
            <GridItem>
                <Image
                    src={require(`../../assets/projects/${image}.JPG`)}
                    alt={title}
                    rounded={'lg'}
                    width={500}
                />
            </GridItem>
            <GridItem>
                <Heading>{title}</Heading>
                <Text color='blue.600'>
                    <a href={repository} target="_blank" rel="noopener noreferrer">Repository</a>
                </Text>
                <Text>{languages}</Text>
                <Text>{description}</Text>
            </GridItem>
        </Grid>
        </LinkBox>
    );
}
  
export default Project;
  