# Build Instructions

This project is built using Angular v17.0.6 for the frontend and Node.js v20.6.1 for the backend.

## Frontend (Angular v17.0.6)

### Prerequisites

- **Node.js**: Make sure Node.js is installed on your machine. You can download it [here](https://angular.io/).
- **Angular CLI**: Install Angular CLI globally using npm:

    ```bash
    npm install -g @angular/cli@17.0.6
    ```

### Running the Frontend

1. **Clone Repository**: Clone the project repository to your local machine:

    ```bash
    git clone https://github.com/LouSarbe/Node_Angular_learning-webapp.git
    cd repository-folder/frontend
    ```

2. **Install Dependencies**: Install project dependencies using npm:

    ```bash
    npm install
    ```

3. **Start Development Server**: Run the Angular development server:

    ```bash
    ng serve
    ```

    The frontend server will start at `http://localhost:4200`.

## Backend (Node.js v20.6.1)

### Prerequisites

- **Node.js**: Make sure Node.js is installed on your machine. You can download it [here](https://nodejs.org/).

### Running the Backend

1. **Clone Repository**: Clone the project repository to your local machine (if not done already).

2. **Navigate to Backend Directory**: Go to the backend directory:

    ```bash
    cd repository-folder/backend
    ```

3. **Install Dependencies**: Install backend dependencies using npm:

    ```bash
    npm install
    ```

4. **Start Backend Server**: Run the Node.js server:

    ```bash
    npm start
    ```

    The backend server will start at `http://localhost:3000`.

## Notes

- **Environment Variables**: Make sure to set any necessary environment variables as described in the project documentation or `.env` files.
- **Database Setup**: If your project requires a database, ensure it's properly configured and connected as per project specifications.
