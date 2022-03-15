import React from 'react';

const projects = [
    {
        title: "Now We're Cooking",
        description: 'Users can search for recipes via main ingredient (protein of some type or vegetarian/vegan) and will receive a list of recipes. The user will also be able to change ingredients, serving sizes, and add their own recipes.',
        languages: 'JavaScript, Handlebars, CSS, SCSS',
        image: '',
        repository: 'https://github.com/claire-sky/Now_Were_Cooking',
        link: 'https://fathomless-earth-96785.herokuapp.com/'
    },
    {
        title: 'Day Trip Planner',
        description: 'A day trip planner that runs displays weather and pollen using OpenWeather API and BreezoMeter API.',
        languages: 'JavaScript, HTML, CSS',
        image: '',
        repository: 'https://github.com/claire-sky/day-trip-planner',
        link: 'https://claire-sky.github.io/day-trip-planner/'
    },
    {
        title: 'Budget Tracker',
        description: 'A budget tracker application that allows the user to add expenses and deposits to their budget with or without a connection.',
        languages: 'JavaScript, HTML, CSS',
        image: '',
        repository: 'https://github.com/claire-sky/Budget-Tracker',
        link: 'https://safe-anchorage-95640.herokuapp.com/'
    },
    {
        title: 'Note Taker',
        description: 'An app for writing and saving notes that uses an Express.js back end and will save and retrieve note data from a JSON file.',
        languages: 'JavaScript, HTML, CSS',
        image: '',
        repository: 'https://github.com/claire-sky/c11-Note-Taker',
        link: 'https://murmuring-ravine-50338.herokuapp.com/'
    },
    {
        title: 'Pizza Hunt',
        description: 'A social media recipe app where users can post their creative spins on pizza, add comments to recipes, and create threads within comments.',
        languages: 'JavaScript, HTML, CSS',
        image: '',
        repository: 'https://github.com/claire-sky/pizza-hunt',
        link: 'https://desolate-earth-92273.herokuapp.com/'
    },
    {
        title: 'Work Day Scheduler',
        description: 'A simple calendar application that allows a user to save events for each hour of the day.',
        languages: 'JavaScript, HTML, CSS',
        image: '',
        repository: 'https://github.com/claire-sky/challenge5-scheduler',
        link: 'https://claire-sky.github.io/challenge5-scheduler/'
    }
]

function Portfolio() {
    return (
        <section>
            <h1 id='portfolio'>Portfolio</h1>
        </section>
    );
}

export default Portfolio;