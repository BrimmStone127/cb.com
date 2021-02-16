// pages/Home.js

import React from "react";

const articles = [
    {
      type: 'image-post',
      imageUrl: 'https://i.imgur.com/4w0tFFN.gifv',
      title: 'Unity VR',
      body: 'A VR bowling game made with UnityVR.',
      objectID: 2,
    }, 
    {
      type: 'image-post',
      imageUrl: 'https://i.imgur.com/pl906jf.gifv',
      title: 'Unity Pathfinding',
      body: 'Pathfinding program created with Unity.',
      objectID: 3,
    },
    {
      type: 'image-post',
      imageUrl: 'https://i.imgur.com/Om4nZ1l.gifv',
      title: 'Random Maze Generation',
      body: 'Program that creates completely random mazes with starts and finishes, Made in Unity.',
      objectID: 4,
    }, 
  ];

const Home = () => (
    <div>
        <h1>Hi, I'm Clay Brimm</h1>
        <p>This is a place for me to share my thoughts and show off some of my projects. I am always looking to learn and expand my knowledge so if you are interested in any of my work please reach out and let me know!</p>
        <ImageList />
    </div>
);

const ImageList = () => 
  articles.map(item => (
    <div key={item.objectID}>
      <span>
        <img src={item.imageUrl} alt={item.title} crossOrigin="anonymous"/>
      </span>
      <span>{item.author}</span>
      <span>{item.date}</span>
    </div>
));

export default Home;