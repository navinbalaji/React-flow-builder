# Abandoned Cart Recovery System

## Overview

The Abandoned Cart Recovery System is a web application designed to help eCommerce businesses recover lost sales by targeting customers who have added items to their cart but did not complete the purchase. This system automates follow-up actions such as email reminders and discount offers to encourage customers to finalize their purchase.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- React
- Redux
- React-Router
- Axios

## Installation

### Backend Setup

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the backend directory: `cd backend`
3. Install dependencies: `npm install`
4. Set up environment variables (MongoDB URI, etc.): Create a `.env` file based on `.env.example`
5. Start the server: `npm start`

### Frontend Setup

1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Folder Structure

- `/backend`: Contains the Node.js server files
- `/frontend`: Includes the React frontend files
- `/models`: Backend MongoDB schema models
- `/controllers`: Backend controller logic
- `/routes`: Backend route definitions
- `/components`: Frontend React components
- `/utils`: Shared utility functions

## Usage

1. Access the application via the provided URL or `localhost:5173`.
2. Create a new customer journey by adding nodes representing actions (e.g., email reminder, discount offer).
3. Monitor abandoned carts and check if the recovery system successfully converts abandoned carts to completed purchases.

## API Documentation

- **GET `/api/customer-journeys`**: Retrieve all customer journeys.
- **POST `/api/customer-journeys`**: Create a new customer journey.
- **GET `/api/customer-journeys/:id`**: Get a specific customer journey by ID.
- **PUT `/api/customer-journeys/:id`**: Update a customer journey by ID.
- **DELETE `/api/customer-journeys/:id`**: Delete a customer journey by ID.

## Default admin password

- USERNAME : admin
- Password : admin

## Postman Collection

- postmanCollection folder

## Screenshots

<details>
  <summary>View Screenshots</summary>

### Login

<image src="Screenshots/login.png">

### Dashboard

<image src="Screenshots/dashboard.png">

### Dashboard with nodes

<image src="Screenshots/node.png">
</details>
