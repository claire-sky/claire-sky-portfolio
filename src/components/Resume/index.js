import React from 'react';
import resume from '../../assets/download/Claire-Sky-Resume.pdf'
import {
    Text,
    UnorderedList,
    ListItem,
    Button,
    LinkBox,
    LinkOverlay,
    Box,
    Grid,
    GridItem,
    Spacer
} from '@chakra-ui/react';

function Resume() {
    return (
        <Box>
            <LinkBox p={5}>
                <LinkOverlay href='../../assets/download/Claire-Sky-Resume.pdf' download={resume}></LinkOverlay>
                <Button>Download my resume</Button>
            </LinkBox>
            <Grid templateColumns='repeat(2, 1fr)'>
                <GridItem p={5}
                    shadow='md'
                    borderWidth='1px'
                    flex='1'
                    borderRadius='md'>
                    <Text>Front-end Proficiencies</Text>
                        <UnorderedList>
                            <ListItem>HTML</ListItem>
                            <ListItem>CSS</ListItem>
                            <ListItem>JavaScript</ListItem>
                            <ListItem>jQuery</ListItem>
                            <ListItem>React</ListItem>
                            <ListItem>Bootstrap</ListItem>
                        </UnorderedList>
                </GridItem>
                
                <GridItem p={5}
                    shadow='md'
                    borderWidth='1px'
                    flex='1'
                    borderRadius='md'>
                    <Text>Back-end Proficiencies</Text>
                        <UnorderedList>
                            <ListItem>APIs</ListItem>
                            <ListItem>Node</ListItem>
                            <ListItem>Express</ListItem>
                            <ListItem>MySQL, SequeListItemze</ListItem>
                            <ListItem>MongoDB, Mongoose</ListItem>
                            <ListItem>REST</ListItem>
                            <ListItem>GraphQL</ListItem>
                        </UnorderedList>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Resume;