// pages/Home.js

import React from "react";

const posts = [
  {
      'id': '0',
      'type': 'blog-post',
      'title': 'My Introduction to VR Development',
      'description': 'My Introduction to VR Development in Unity',
      'author': 'Clayton Brimm',
      'date': '08.29.2020',
      'body': 'https://www.claybrimm.com/blog/intro-to-vr.html',
  },
  {
      'id': '1',
      'type': 'blog-post',
      'title': "The jobs you won't see on my resume",
      'description': "Interesting jobs I have had before becoming a developer",
      'author': 'Clayton Brimm',
      'date': '09.18.2020',
      'body': 'https://www.claybrimm.com/blog/jobs-you-wont-see.html',
  },
  {
      'id': '2',
      'type': 'image-post',
      'title': 'Unity VR',
      'description': 'A VR bowling game made with UnityVR.',
      'author': 'Clayton Brimm',
      'date': '01.01.2020',
      'body': 'https://i.imgur.com/4w0tFFN.gifv',
  }, 
  {
      'id':'3',
      'type': 'image-post',
      'title': 'Unity Pathfinding',
      'description': 'Pathfinding program created with Unity.',
      'author': 'Clayton Brimm',
      'date': '01.01.2020',
      'body': 'https://i.imgur.com/pl906jf.gifv',
  },
  {
      'id':'4',
      'type': 'image-post',
      'title': 'Unity Pathfinding',
      'description': 'Program that creates completely random mazes with starts and finishes, Made in Unity.',
      'author': 'Clayton Brimm',
      'date': '01.01.2020',
      'body': 'https://i.imgur.com/Om4nZ1l.gifv',
  }, 
];

const Home = () => (
    <div>
        <h1>Hi, I'm Clay Brimm</h1>
        <p>This is a place for me to share my thoughts and show off some of my projects. I am always looking to learn and expand my knowledge so if you are interested in any of my work please reach out and let me know!</p>
        <Feed />
    </div>
);

const Feed = () => 
  posts.map(item => (
    <div key={item.objectID}>
      <span>
        <img src={item.imageUrl} alt={item.title} crossOrigin="anonymous"/>
      </span>
      <span>{item.author}</span>
      <span>{item.date}</span>
    </div>
));

export default Home;