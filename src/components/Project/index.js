import React from 'react';

function Project({ project }) {
    const { title, description, languages, image, repository, link  } = project;

    return (
        <div key={title}>
            <img
                src={require(`../../assets/projects/${image}.jpg`)}
                alt={title}
            />
            <div>
                <h3>
                    <a href={link}>{title}</a>{' '}
                    <a href={repository}>Repository</a>
                </h3>
                <p>{languages}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}
  
export default Project;
  