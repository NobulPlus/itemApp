# React Authentication and Item Management App
This project is a full-stack web application that implements user authentication with a focus on username-based login instead of email. It includes registration, login, and private route protection to ensure that only authenticated users can access specific pages. The application also features a responsive and styled UI.

## Features
1. Registration: Users can register with a unique username and password.
2. Login: Authenticated users can log in to access protected pages.
3. Token-Based Authentication: Uses JWT for secure session management.
4. Private Routes: Protect sensitive pages like the Home and Add-Item pages.
5. Responsive UI: Styled with external CSS for a modern and user-friendly design.
6. REST API integration for backend communication

## Technologies Used
- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express
- **Authentication:** JWT (JSON Web Token)
- **Database:** MongoDB
- **Others:** Axios, React Router DOM

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository.git

*Prerequisites*
Ensure you have the following installed on your machine:
Node.js
MongoDB (or a running database service)

*Setup*
Clone the repository:

git clone <repository-url>
cd <repository-folder>

Install dependencies:
npm install

Set up the environment variables:
Create a .env file in the root of your project and add the following:

PORT=8000
JWT_SECRET=<your-secret-key>
MONGO_URI=<your-mongodb-connection-string>

Start the backend server:

npm run dev

Start the React frontend:

npm start

File Structure

project-root
├── backend  └── Contains backend API code
├── frontend └── Contains React frontend code
└── README.md

## Usage

1. Register - Navigate to /register.
- Enter a username and password to create an account.
2. Login - Navigate to /login.
- Enter your username and password to authenticate.
On successful login, you will be redirected to the Home page.

## Protected Routes
The Home page (/) and other protected routes like Add-Item can only be accessed by authenticated users.

If the user is not logged in, they will be redirected to the Login page.

## Customizations
- Changing API Endpoints
- Update the API base URL in axios requests to match your backend server's address.
- Token Expiration
- Add checks for token expiration in PrivateRoute.js to automatically log out users with expired tokens.

## Styling
Modify styles.css in the public folder to customize the UI.

*Contributing*
Fork the repository.
Create a new branch: git checkout -b feature-name.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature-name.

Open a pull request.