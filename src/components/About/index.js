import React from 'react';
import profileImage from '../../assets/claire.jpg';

function About() {
    return (
        <section>
            <div className="my-2">
                <img src={profileImage} alt="claire sky profile photo"></img>
                <p>
                Communication is a core function of my role, working with multiple departments, high level stakeholders, and with our key supplier. I’ve read multiple books on the subject and grown in this area over the years - that has affirmed that communication is a foundational skill that helps in all aspects of both business and personal life. It’s a never-ending education so I’m excited to be learning from experts like the leadership team here.
                </p>
                <p>
                Gossiping is a poor example of communication that I'd like to stop perpetuating. I'm taking steps by stopping myself when I catch myself gossiping or partaking in gossip by apologizing and re-framing my words (or helping others re-frame their words) in a more positive way.
                </p>
            </div>
        </section>
    );
}

export default About;