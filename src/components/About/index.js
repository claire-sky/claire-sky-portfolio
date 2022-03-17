import React from 'react';
import profileImage from '../../assets/claire.jpg';
import {
    Text,
    Image,
    Grid,
    GridItem,
    Circle
} from '@chakra-ui/react';

function About() {
    return (
        <Grid templateColumns='repeat(5, 1fr)'>
            <GridItem colSpan={1}>
                <Circle>
                    <Image h='200' src={profileImage} alt="claire sky profile photo"></Image>
                </Circle>
            </GridItem>
            <GridItem colSpan={4}>
                <Text>
                Communication is a core function of my role, working with multiple departments, high level stakeholders, and with our key supplier. I’ve read multiple books on the subject and grown in this area over the years - that has affirmed that communication is a foundational skill that helps in all aspects of both business and personal life. It’s a never-ending education so I’m excited to be learning from experts like the leadership team here.
                </Text>
                <Text>
                Gossiping is a poor example of communication that I'd like to stop perpetuating. I'm taking steps by stopping myself when I catch myself gossiping or partaking in gossip by apologizing and re-framing my words (or helping others re-frame their words) in a more positive way.
                </Text>
            </GridItem>
        </Grid>
    );
}

export default About;