// pages/Blog.js

import React from "react";

const Blog = () => (
    <div>
        <h1>Blog</h1>

        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />

        <hr />

        <ArticleList />
    </div>
);

const articles = [
    {
      type: 'blog-post',
      title: 'My Introduction to VR Development',
      url: 'https://www.claybrimm.com/blog/intro-to-vr.html',
      date: '08.29.2020',
      author: 'Clayton Brimm',
      objectID: 0,
    },
    {
      type: 'blog-post',
      title: "The jobs you won't see on my resume",
      url: 'https://www.claybrimm.com/blog/jobs-you-wont-see.html',
      date: '09.18.2020',
      author: 'Clayton Brimm',
      objectID: 1,
    },
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

const ArticleList = () => 
  articles.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.date}</span>
    </div>
));

export default Blog;