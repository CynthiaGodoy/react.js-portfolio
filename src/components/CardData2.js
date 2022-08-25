// CLI & BACKEND PROJECTS WITH NO FRONT-END
//THIS IS THE PAGE WHERE WE ADD MORE PROJECTS. NO NEED TO TOUCH OTHER PAGES
import Project1 from "../assets/mongo.jpg"
import Project2 from "../assets/readMe.jpg"
import Project3 from "../assets/regex.jpg"
import Project4 from "../assets/crud.jpg"

const CardData = [
    {
    imgsrc: Project1,
    alt: "mongoose",
    title: "NoSQL Social Media API",
    description: "Mongoose Object Data Modeling for MongoDB | Timestamps | Validation | Insomnia | CRUD",
    github: "https://github.com/CynthiaGodoy/NoSQL-Social-Media-API",
    },
    {
        imgsrc: Project2,
        alt: "readme",
        title: "Node Readme Generator",
        description: "Command Line Application that generates a README.md | Inquirer | Node",
        github: "https://github.com/CynthiaGodoy/Node-Readme-Generator",
    },
    {
        imgsrc: Project3,
        alt: "tutorial",
        title: "Regular Expression 101",
        description: "Regex tutorial for matching an email | GitHub Gist | Walks through each part of the Regex",
        github: "https://gist.github.com/CynthiaGodoy",
    },
    {
        imgsrc: Project4,
        alt: "eCommerce",
        title: "eCommerce Back-End",
        description: "Object Relational Mapping (ORM) | Initializer | MySQL2 | Sequalize | .env | Insomnia | CRUD",
        github: "https://github.com/CynthiaGodoy/ORM-eCommerce-Back-End",
    },
];

export default CardData;
