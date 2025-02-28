# Task Management System

## Overview
The **Task Management System** is a web-based application designed to help users organize, track, and manage their tasks efficiently. It allows users to create, update, delete, and prioritize tasks while maintaining a user-friendly interface.

## Features
- **User Authentication**: Secure login and registration system.
- **Task Creation**: Users can add new tasks with due dates and descriptions.
- **Task Prioritization**: Set priority levels (Low, Medium, High) for better organization.
- **Task Status Management**: Mark tasks as Pending, In Progress, or Completed.
- **Edit & Delete**: Update or remove tasks as needed.
- **Search & Filter**: Find tasks quickly using search and filters.
- **Responsive UI**: Works seamlessly across devices.

## Technologies Used
- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **State Management**: Redux (optional)

## Installation
### Prerequisites:
- Node.js and npm installed
- MongoDB setup

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/task-management-system.git
   cd task-management-system
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory
   - Add the following:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     PORT=5000
     ```

4. Run the development server:
   ```sh
   npm run dev
   ```

5. Open in browser:
   ```
   http://localhost:5000
   ```

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.

## Contact
For any queries, feel free to reach out:
- **Email**: ashafak04@gmail.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)

---
Happy Coding! 🚀

