# Table of Contents

## General Info
1. [**General Info**](#general-info)
2. [**Backend Technologies Used**](#backend-technology-used)
3. [**Frontend Technologies Used**](#frontend-techlogy-used)
4. [**Setup**](#setup)
5. [**Features**](#features) 
6. [**Code & Snippets**](#CodeSnippets)
   
## General Info
This project is a real-time chat application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It enables users to create accounts, join chat rooms, and exchange messages in real-time, providing a seamless communication experience.

## Backend Technologies Used:
# Node.js
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, enabling the building of scalable and efficient web applications.

# Express.js
Express.js is a web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features for routing, middleware, and HTTP utilities.

# MongoDB
MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It's commonly used in MERN stack applications for its scalability and flexibility.

Mongoose
Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a straightforward schema-based solution for modeling application data and interacting with MongoDB databases.

Socket.IO
Socket.IO is a JavaScript library for real-time web applications. It enables bidirectional communication between web clients and servers, facilitating real-time data transfer.

Frontend Technologies Used:
HTML
HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. It provides the structure for web content.

CSS
CSS (Cascading Style Sheets) is used to style the HTML structure, including setting fonts, colors, margins, paddings, and alignments.

JavaScript
JavaScript is a programming language that enables interactive and dynamic features on web pages. It's commonly used for client-side scripting and interacting with web content.

React
React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state efficiently.

Redux Toolkit
Redux Toolkit is a package that simplifies the usage of Redux for state management in React applications. It includes utilities to simplify common Redux use cases and reduces boilerplate code.

Socket.IO Client
Socket.IO Client is the client-side library for Socket.IO. It enables web clients to establish a connection with Socket.IO servers and exchange real-time messages.

Chakra UI
Chakra UI is a simple, modular, and accessible component library that provides a set of reusable UI components for building React applications.

Setup
Clone the repository: git clone https://github.com/your-username/chat-application.git

Navigate to the project directory: cd chat-application

Install backend dependencies: npm install

Install frontend dependencies: cd client && npm install

Start the development server: npm run dev

Open your browser and go to http://localhost:3000 to view the chat application.

Features
User Authentication: Users can create accounts and log in to access the chat application.
Real-time Messaging: Utilizes Socket.IO for real-time bidirectional communication between clients and the server, enabling instant message delivery.
Chat Rooms: Users can join different chat rooms to engage in group conversations, with the ability to create new chat rooms as needed.
User Status: Displays online/offline status of users in the chat interface, indicating whether users are currently active.
Message History: Stores chat message history in MongoDB, allowing users to view previous messages upon joining a chat room.
Code & Snippets
Backend Code Snippets:
Frontend Code Snippets:
