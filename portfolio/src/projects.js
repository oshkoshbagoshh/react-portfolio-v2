/*
 * @Author: AJ Javadi 
 * @Email: amirjavadi25@gmail.com
 * @Date: 2023-07-30 18:09:27 
 * @Last Modified by: Someone
 * @Last Modified time: 2023-07-30 18:55:13
 * @Description: functionality for projects
 
===========
#PSEUDO CODE
=============

import the images for the portfolio items and add them to the public folder
then create an array of objects that will hold the information for each portfolio item. 
The array should contain the following information for each portfolio items
projectTitle, description, imageLink, liveLink, gitHub
export the array of objects
import the array of objects into the PortfolioContainer.js file
map over the array of objects and render a PortfolioItem for each object in the array
import the PortfolioItem component into the PortfolioContainer.js file



*/

import recipe_voyage from "./images/recipe_voyage.png";
import nosql_social_network_kapi from "./images/18-nosql-homework-demo.gif";
import jate from "./images/jate.png";
import flavor_scapes from "./images/Flavorscapes.png";


// Create an array of objects that will hold the information for each portfolio item.
export const projects = [

    {
        projectTitle: "Recipe Voyage",
        description: "A recipe search engine that allows users to search for recipes by ingredients and save their favorite recipes.",
        imageLink: recipe_voyage,
        liveLink: "https://recipevoyage-6c0c7512867d.herokuapp.com/",
        gitHub: "https://github.com/oshkoshbagoshh/recipe-voyage",
    },
    {
        projectTitle: "NoSQL Social Network API",
        description: "A NoSQL database for a social network web application.",
        imageLink: nosql_social_network_kapi,
        livelink: "https://github.com/oshkoshbagoshh/nosql-social-network-api",
        gitHub: "https://github.com/oshkoshbagoshh/nosql-social-network-api"
        
    },
    {
        projectTitle: "Flavorscapes",
        description: "Generate random meals and add them to your cart to save for later",
        imageLink: flavor_scapes,
        livelink: "https://tkuhner.github.io/Project-1-Flavorscapes-Colin-Javadi-Kuhner/",
        gitHub: "https://github.com/oshkoshbagoshh/Project-1-Flavorscapes-Colin-Javadi-Kuhner_AJsversion"

    },
    {
        projectTitle: "jate",
        description: "A Progressive Web App that you can download and install locally on your device.",
        imageLink: jate,
        liveLink: "https://aj-jate-f41cfdd72912.herokuapp.com/",
        gitHub: "https://github.com/oshkoshbagoshh/pwa-jate"
    }


];