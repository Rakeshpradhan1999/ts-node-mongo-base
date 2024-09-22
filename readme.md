# TS-Node-Mongo-Base

A boilerplate project for creating backend applications using **TypeScript**, **Express**, **MongoDB**, and **Node.js**. This template is designed to help you quickly set up new projects with a clean and scalable structure.

## Features

- **TypeScript** for static type checking and cleaner code.
- **Express** for fast, unopinionated web framework for Node.js.
- **MongoDB** for database storage.
- **Mongoose** for MongoDB object modeling.
- **dotenv** for environment variable management.
- **CORS** enabled.
- Structured with models, controllers, and routes for easy scalability.

## Project Structure

```
src/
├── controllers/   # Controllers for handling business logic
├── models/        # Mongoose models for MongoDB collections
├── routes/        # Express routes
├── config/        # Configuration files (if needed)
├── app.ts         # Main Express app configuration
└── server.ts      # Server start and MongoDB connection logic
```

## Requirements

- **Node.js** (>= 18.x)
- **MongoDB**

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ts-node-mongo-base.git
   cd ts-node-mongo-base
   ```

2. Install dependencies using pnpm:

   ```bash
   pnpm install
   ```

3. Set up environment variables. Create a `.env` file in the root directory and add the following:

   ```bash
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/mydatabase
   ```

4. Run the development server:

   ```bash
   pnpm run dev
   ```

5. To build the project for production:

   ```bash
   pnpm run build
   pnpm start
   ```

## DEMO API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/api/users` | Get all users     |
| POST   | `/api/users` | Create a new user |

### Example `User` object:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

## Development

### Available Scripts

- `pnpm run dev` - Runs the app in development mode with `nodemon` and `ts-node`.
- `pnpm run build` - Builds the TypeScript code into JavaScript.
- `pnpm start` - Starts the production server.

### Linting and Formatting

You can integrate ESLint and Prettier to maintain clean code, but it's optional.

## Structured Response and Error Handling

This template includes a unified response structure and global error handling for a consistent API.

### Example Response Structure:

```typescript
export const sendResponse = (
  res: Response,
  success: boolean,
  message: string = "Success",
  data: any = null,
  statusCode: number = 200
) => {
  return res.status(statusCode).json({
    success,
    message,
    data,
  });
};
```

## Do not forgot to star ⭐️ this repository if you find it useful.
