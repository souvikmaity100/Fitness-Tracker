# Fitness Tracker

A full-stack web application for tracking fitness activities, workouts, and progress. Built with modern web technologies and a focus on user experience.

## Features

- User authentication and authorization
- Track workouts and exercises
- Monitor fitness progress
- Interactive charts and statistics
- Responsive design for all devices
- Secure data storage

## Tech Stack

### Frontend
- React.js with Vite
- Material-UI (MUI) for components
- Redux Toolkit for state management
- React Router for navigation
- Axios for API requests
- Chart.js for data visualization

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- CORS enabled

## Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB or MongoDB Atlas account
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/souvikmaity100/Fitness-Tracker.git
cd Fitness-Tracker
```

2. Install dependencies for both client and server
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Set up environment variables
   - Create a `.env` file in the `server` directory with:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```
   - Create a `.env` file in the `client` directory with:
     ```
     VITE_API_URL=http://localhost:5000
     ```

4. Start the development servers
```bash
# Start the backend server
cd server
npm run dev

# In a new terminal, start the frontend
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.