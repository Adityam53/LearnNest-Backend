# LearnNest Backend API

A RESTful API built with Node.js, Express, and MongoDB for managing students and teachers in a learning management system.

This backend provides full CRUD functionality for students and teachers with clean and scalable architecture.

---

## Features

* Manage students (Create, Read, Update, Delete)
* Manage teachers (Create, Read, Update, Delete)
* MongoDB integration using Mongoose
* RESTful API design
* Environment variable support using dotenv
* CORS enabled

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* cors

---

## Project Structure

```
project-root/
│
├── db/
│   └── db.connect.js
│
├── models/
│   ├── students.model.js
│   └── teachers.model.js
│
├── server.js (or index.js)
├── .env
├── package.json
```

---

## Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/Adityam53/LearnNest-Backend.git
```

### 2. Install dependencies

```
npm install
```

### 3. Create .env file

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

### 4. Start the server

```
npm start/npm run dev/ node index.js
```

Server will run on:

```
http://localhost:3000
```

---

## API Endpoints

### Students

### Get all students

GET /students

### Create a student

POST /students

Request body:

```
{
  "name": "John Doe",
  "age": 20,
  "grade": "A",
  "gender": "Male",
  "marks": 85,
  "attendance": 90
}
```

### Update student

PUT /students/:id

### Delete student

DELETE /students/:id

---

## Teachers

### Get all teachers

GET /teachers

### Create teacher

POST /teachers

Request body:

```
{
  "name": "Jane Smith",
  "subject": "Math",
  "experience": 5
}
```

### Update teacher

PUT /teachers/:id

### Delete teacher

DELETE /teachers/:id

---

## Error Handling

* 200: Success
* 201: Created successfully
* 404: Resource not found
* 500: Internal server error

---

## API Summary

Students

* GET /students
* POST /students
* PUT /students/:id
* DELETE /students/:id

Teachers

* GET /teachers
* POST /teachers
* PUT /teachers/:id
* DELETE /teachers/:id

---

## Future Improvements

* Add authentication (JWT)
* Role-based access control (Admin/Teacher/Student)
* Input validation using Zod/Joi
* Pagination and filtering
* Advanced analytics for students performance

---

## Author

Built with Node.js, Express, and MongoDB

## Contact
For any bugs contact adityamoorjmalani53@gmail.com
