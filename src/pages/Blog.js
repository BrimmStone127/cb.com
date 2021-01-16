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
      title: 'My Introduction to VR Development',
      url: 'https://www.claybrimm.com/blog/intro-to-vr.html',
      date: '08.29.2020',
      author: 'Clayton Brimm',
      objectID: 0,
    },
    {
      title: "The jobs you won't see on my resume",
      url: 'https://www.claybrimm.com/blog/jobs-you-wont-see.html',
      date: '09.18.2020',
      author: 'Clayton Brimm',
      objectID: 1,
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