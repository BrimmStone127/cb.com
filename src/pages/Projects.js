// pages/Project.js

import React from "react";

const Projects = () => (
    <div>
        <h1>Projects</h1>

        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />

        <hr />

        <p><a href="http://rapidscemetery.herokuapp.com/home">Rapids Cemetery Tour</a></p>
        <p><a href="https://github.com/BrimmStone127?tab=repositories">Check out my GitHub for other random projects and snippets of code.</a></p>
        <p>Games</p>
        <p><a href="./games/twenty.html">2048.js - Color blind edition 😎</a></p>
    </div>
);

export default Projects;