# MERN Stack Template with TypeScript

This is a MERN Stack Template with TypeScript! It provides a starting point for building full-stack web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack along with TypeScript.

This template uses up the MVC architecture for better adoption of developers.

## Features

-   **MongoDB**: MongoDB is used as the database to store and manage application data.
-   **Express.js**: Express.js is used as the backend framework to handle HTTP requests and routes.
-   **React.js**: React.js is used for building dynamic user interfaces on the client side.
-   **Node.js**: Node.js is used as the server-side JavaScript runtime environment.
-   **TypeScript**: TypeScript is used to add static typing to JavaScript, providing enhanced code quality and developer productivity.
-   **ESLint & Prettier**: ESLint and Prettier are used for linting and code formatting to maintain code quality and consistency.

## Getting Started

Click on the `Use this template` button and generate your respository.

1. **Clone the Repository**: Clone the repository to your local machine using `git clone`.

```bash
git clone https://github.com/<username>/<repository>.git
```

2. **Install Dependencies**: Navigate to the project directory and install dependencies for both the server and client.

```bash
cd <respository>
yarn
```

3. **Set Environment Variables**: Create a `.env` file in the root directory and set environment variables as specified in [`.env.example`](./.env.example)`.

```env
MONGODB_URI=mongodb://localhost:27017/my-database
```

4. **Run the Development Server**: Start the development server for both the server and client.

```bash
# Start full-stack server (from root directory)
yarn dev
```

5. To run both servers separately

```bash
# Start frontend client
yarn react
```

```bash
# Start backend server
yarn server
```

5. **Open in Browser**: Open your browser and navigate to `http://localhost:3000` to view the application.
6. **Spin up backend server**: Open your HTTP client and use `http://localhost:8000` as the base url.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow the [contribution guidelines](CONTRIBUTING.md).

# Author

[Akshat Mittal](https://akshatmittal61.vercel.app)
