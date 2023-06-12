## MusicFrame

The MusicFrame is a web application that handles classes, instructor, admin, student and payments for the Summer classes. It is built with React, Node.js, Express, MongoDB, Tailwindcss.

## Features

- Accepts payments and stores payment information in the database.
- Updates class information when a payment is made:
  - Decreases available seats by 1.
  - Increases the number of students by 1.
  - Adds the student's name to the list of students.
- Deletes the selected class from the selected classes collection.

## Technologies Used

- Node.js: A JavaScript runtime environment.
- Express: A web application framework for Node.js.
- MongoDB: A NoSQL database for storing payment and class information.
- Mongoose: An object data modeling (ODM) library for MongoDB.
- JSON Web Tokens (JWT): Used for authentication and authorization.


## Base URL

The base URL for all API endpoints is https://musicframe-backend.onrender.com.

## License

This project is licensed under the [MIT License](LICENSE).

> Live: https://musicframe.vercel.app