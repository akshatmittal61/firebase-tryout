# Directory Structure

The project follows a standard MVC folder structure for organizing code and easy adoption:

```
mern-ts-template/
│                    # Frontend code (React.js)
├── public/          # Public assets
├── src/             # Source code
|   ├── api/         # API Layer
|   ├── components/  # React components
|   ├── config/      # Env variables
|   ├── constants/   # Constants / enums etc
|   ├── hooks/       # Custom hooks
|   ├── layouts/     # Responsive grid, Masonry etc
|   ├── library/     # Reusable components
|   ├── pages/       # Screens
|   ├── routes/      # Routes config
|   ├── styles/      # Base and reusable styles
|   ├── types/       # Type definition
|   ├── utils/       # Utilities
|   └── App.tsx      # Main App component
│
│                    # Backend code (Node.js & Express.js)
├── config/          # Env variables
├── constants/       # Constants
├── controllers/     # Request handlers
├── db/              # Database manager
├── log/             # Custom Log utility
├── middlewares/     # Middleware functions
├── models/          # MongoDB models
├── routes/          # Express.js routes
├── services/        # Business logic services
├── types/           # TypeScript type definitions
├── utils/           # Utilites
├── server.ts        # Main server file
│
├── .gitignore       # Git ignore file
├── ...              # Other editor config options
├── package.json     # npm package configuration
└── README.md        # Project README
```
