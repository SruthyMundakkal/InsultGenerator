document.addEventListener("DOMContentLoaded", function() {
    const jokesList = document.querySelector('.jokes-list');
    const loadingOverlay = document.querySelector('.loading-overlay');

    async function fetchJokes() {
        try {
            

            const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=5');
            const data = await response.json();

            if (data.error) {
                throw new Error(data.message);
            }

            displayJokes(data.jokes);
        } catch (error) {
            console.error('Error fetching jokes:', error.message);
        }
        
    }


    
    function displayJokes(jokes) {
        jokesList.innerHTML = '';
        jokes.forEach((joke, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${index + 1}. ${joke.type === 'single' ? joke.joke : `${joke.setup} ${joke.delivery}`}`;
            jokesList.appendChild(listItem);
        });
    }

    document.querySelector('.header__title').addEventListener('click', fetchJokes);

    fetchJokes();
});

// // importing the sass stylesheet for bundling
// import "./../sass/styles.scss";

// const TARGET_DIV = "s-insult";
// const VICTIM_NAME = "Sruthy";

// function randomMe(low = 1, high = 100) {
//     return Math.floor(Math.random() * (high - low + 1)) + low;
// }

// function insultMe(victim) {
//     const nouns = ["jerk", "dork", "simpleton", "geek", "doofus"];
//     const adjectives = ["goofy", "dorky", "bumbling", "awkward", "bewildering"];

//     const randomNounIndex = randomMe(0, nouns.length - 1);
//     const randomAdjectiveIndex = randomMe(0, adjectives.length - 1);

//     const noun = nouns[randomNounIndex];
//     const adjective = adjectives[randomAdjectiveIndex];

//     const insult = `"${victim} is a ${adjective} ${noun}!"`;
//     console.log(insult);

//     return insult;
// }

// function main() {
//     let target = document.getElementById(TARGET_DIV);
//     let insults = "";

//     for (let i = 0; i < 5; i++) {
//         insults += insultMe(VICTIM_NAME) + '<br>';
//     }

//     target.innerHTML = insults;
// }

// main();
