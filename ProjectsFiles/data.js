const projects = [
    {
        name: "NASA APOD & Mars Weather",
        weekProduced: 10,
        description: "",
        languages: ["HTML", " CSS", " JavaScript"," API"],
        launchLink: "https://annikachauhan.github.io/nasa-info/",
        codeLink: "https://github.com/AnnikaChauhan/nasa-info",
        size: "regular",
        picture: "https://firebasestorage.googleapis.com/v0/b/annika-stuff.appspot.com/o/PersonalProjects%2Fnasa.png?alt=media&token=6dd9dc5e-1c03-4237-93fa-c4af39d46037"
    },
    {
        name: "Personal Project: Explorer",
        weekProduced: 9,
        description: "",
        languages: ["HTML", " CSS", " JavaScript"," React"," Firebase"," Email/Password Authentication", " APIs"],
        launchLink: "https://travel-project-d6827.firebaseapp.com/home",
        codeLink: "https://github.com/AnnikaChauhan/travel-project",
        size: "regular",
        picture: "https://firebasestorage.googleapis.com/v0/b/annika-stuff.appspot.com/o/PersonalProjects%2Fexplorer.png?alt=media&token=6d9a0fa6-93f5-45d0-ae11-093c72042b3d"
    },
    {
        name: "Client Project: The Drop",
        weekProduced: 9,
        description: "",
        languages: ["HTML", " CSS", " JavaScript"," React"," Firebase"," Google Authentication"],
        launchLink: "https://the-drop-x-nology.web.app/",
        codeLink: "https://github.com/nology-tech/the-drop-x-nology",
        size: "regular",
        picture: "https://firebasestorage.googleapis.com/v0/b/annika-stuff.appspot.com/o/PersonalProjects%2Fthe_drop.png?alt=media&token=02835b9e-efd1-4e0b-a60d-f934cf997bcb"
    },
    {
        name: "User Authentication",
        weekProduced: 8,
        description: "",
        languages: ["HTML", " CSS", " JavaScript"," React"," Firebase"," Google Authentication"],
        launchLink: "https://users-authentication-e5d61.firebaseapp.com/public",
        codeLink: "https://github.com/AnnikaChauhan/users-authentication",
        size: "regular",
        picture: "https://firebasestorage.googleapis.com/v0/b/annika-stuff.appspot.com/o/PersonalProjects%2Fauth.png?alt=media&token=931d414b-e559-4460-ad9a-ae312b8da44f"
    },
    {
        name: "Pokemon Database",
        weekProduced: 7,
        description: "",
        languages: ["HTML", " CSS", " JavaScript"," React"," Firebase"," Search Functionality"],
        launchLink: "https://pokemon-52216.firebaseapp.com/",
        codeLink: "https://github.com/AnnikaChauhan/pokeman-react-firebase",
        size: "regular",
        picture: "https://firebasestorage.googleapis.com/v0/b/annika-stuff.appspot.com/o/PersonalProjects%2Fpokedex.png?alt=media&token=89297bae-f783-4f3b-8a1c-644280672ca8"
    },
    {
        name: "BookWorm",
        weekProduced: 6,
        description: "A React App, built with a Firebase noSQL database (and Firebase storage) where books can be created. The firestore has been linked to the React app and all books from the database render to the app.",
        languages: ["HTML", " CSS", " JavaScript"," React"," Firebase"],
        launchLink: "https://bookworm-d93e4.firebaseapp.com",
        codeLink: "https://github.com/AnnikaChauhan/bookworm-react-firebase",
        size: "regular",
        picture: "https://firebasestorage.googleapis.com/v0/b/annika-stuff.appspot.com/o/PersonalProjects%2Fbookworm.png?alt=media&token=8fc9770e-a2b0-4dcf-8e2c-49d05d94182a"
    },
    {
        name: "Guess the State",
        weekProduced: 5,
        description: "A game built in whilst taking a break from Flappy Dragon, this games gives you ten minutes to guess as many American states as possible.",
        languages: ["HTML", " CSS", " JavaScript"],
        launchLink: "https://annikachauhan.github.io/map-game/",
        codeLink: "https://github.com/AnnikaChauhan/map-game",
        size: "regular",
        picture: "https://firebasestorage.googleapis.com/v0/b/annika-stuff.appspot.com/o/PersonalProjects%2Fguess_the_state.png?alt=media&token=c354ebd1-dc7e-46b1-950d-015c95688b02"
    },
    {
        name: "Flappy Dragon (in progress)",
        weekProduced: 5,
        description: "A game built in an attempt to recreate flappy bird, this was the first attempt at building an entire game from scratch. It is currently completing the bare principle of the game - the dragon falls but rises on a spacebar click and an obstacle moves across the screen, if they collide the game ends.",
        languages: ["HTML", " CSS", " JavaScript"],
        launchLink: "https://annikachauhan.github.io/flappy-game/",
        codeLink: "https://github.com/AnnikaChauhan/flappy-game",
        size: "regular",
        picture: "https://firebasestorage.googleapis.com/v0/b/annika-stuff.appspot.com/o/PersonalProjects%2Fflappy_dragon.png?alt=media&token=f8242d15-c559-4bbd-ab0d-a6aa38fb206e"
    },
    {
        name: "This Site!",
        weekProduced: 4,
        description: "This site is something I spent time building from scratch, particularly my project page which has been built using classes and pulls data from a JavaScript file.",
        languages: ["HTML", " CSS", " JavaScript"," jQuery", " Object Oriented Programming (Classes)"],
        launchLink: "www.annikachauhan.com",
        codeLink: "https://github.com/AnnikaChauhan/personal-site",
        size: "regular",
        picture: "https://firebasestorage.googleapis.com/v0/b/annika-stuff.appspot.com/o/PersonalProjects%2Fannikachauhan.png?alt=media&token=81fada10-c3be-4485-a2ab-53078b4f8d5b"
    },
    {
        name: "Tic Tac Toe",
        weekProduced: 3,
        description: "A game of tic tac toe for two players. The JS code is something really interesting about this ",
        languages: ["HTML", " CSS", " JavaScript"],
        launchLink: "https://annikachauhan.github.io/tic-tac-toe/",
        codeLink: "https://github.com/AnnikaChauhan/tic-tac-toe",
        size: "regular",
        picture: "https://firebasestorage.googleapis.com/v0/b/annika-stuff.appspot.com/o/PersonalProjects%2Ftic_tac_toe.png?alt=media&token=e36b7345-03db-473f-91be-af0407616b50"
    },
    {
        name: "Rock Paper Scissors",
        weekProduced: 3,
        description: "A game of rock paper scissors played against the computer. The JS code of this is what I believe is most interesting, I tried to find a unique way to solve the problem and used a 'matrix' to find the winning outcome.",
        languages: ["HTML", " CSS", " JavaScript"],
        launchLink: "https://annikachauhan.github.io/rock-paper-scissors/",
        codeLink: "https://github.com/AnnikaChauhan/rock-paper-scissors",
        size: "regular",
        picture: "https://firebasestorage.googleapis.com/v0/b/annika-stuff.appspot.com/o/PersonalProjects%2Frock_paper_scissors.png?alt=media&token=c55142a6-9558-4b88-a0a3-01d036d366de"
    },
    {
        name: "Instagram Recreation",
        weekProduced: 2,
        description: "The logic of this was to recreate the Instagram login page from scratch using basic HTML and CSS.",
        languages: ["HTML", " CSS"],
        launchLink: "https://annikachauhan.github.io/instagram-landing-page/",
        codeLink: "https://github.com/AnnikaChauhan/instagram-landing-page",
        size: "regular",
        picture: "https://firebasestorage.googleapis.com/v0/b/annika-stuff.appspot.com/o/PersonalProjects%2Finstagram_recreation.png?alt=media&token=d7a6b37e-839b-4136-b169-d19ba970267d"
    }
];

export default projects;