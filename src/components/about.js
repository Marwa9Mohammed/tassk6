import React from 'react';
import './about.css';

function MyComponent() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <p style={{marginBottom:'90px'}}>A web developer’s job is to create websites. While their primary role is to ensure the website is visually appealing and easy to navigate, many web developers are also responsible for the website’s performance and capacity.Web developers usually fall under one of three categories: back-end developers, front-end developers, and full-stack developers. Some web developers also work as webmasters.Back-end web developers create the website’s structure, write code, and verify the code works. Their responsibilities also may include managing access points for others who need to manage a website’s content.Front-end web developers work on the visual part of the website—the pages visitors see and interact with (also known as the user interface). They design the physical layout of each page, integrate graphics, and use HTML and JavaScript to enhance the site. </p>
      <button className="myButton">Download Resume</button>
      
    </div>

  );
}

export default MyComponent;
