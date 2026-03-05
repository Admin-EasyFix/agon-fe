# 🕊️ agon frontend

Agon is a web application that provides AI-powered training insights for athletes. By connecting your Strava account, you can view your recent activities, receive performance analytics, and get personalized recommendations for future workouts.

This repository contains the frontend web application that interacts with the Agon backend API.

**Live Application:** https://agon-easyfix.onrender.com

**Backend Repository**: https://github.com/Admin-EasyFix/agon-be

## Demo

![agon demo](./docs/demo.gif)

## Features

*   **Strava Integration:** Securely connect your Strava account using OAuth2 to sync your activities.
*   **Activity Dashboard:** View a list of your recent workouts with key metrics like distance, pace, and duration.
*   **AI-Powered Recommendations:** Receive smart suggestions for your next activity based on your training history.
*   **Privacy-Focused:** Your data is handled securely, and you can deauthorize the application at any time.

## Tech Stack

*   **Frontend:** React, TypeScript
*   **Build Tool:** Vite
*   **API Communication:** Axios
*   **Styling:** CSS Modules, `clsx`, `tailwind-merge`
*   **Icons:** Lucide React

## Architecture

The frontend communicates with the Agon Backend REST API, which handles:
* Strava OAuth authentication
* Activity retrieval
* AI analysis using Google Gemini
  
The frontend is responsible for:
* User authentication flow
* Displaying activities
* Rendering AI-generated recommendations

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (version 20.x or later)
*   Running agon backend.

### Installation & Running Locally

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Admin-EasyFix/agon-fe.git
    cd agon-fe
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Configure environment variables:**
    Create a `.env` file in the root of the project and add your backend API URL:
    ```env
    VITE_API_URL='http://localhost:8080'
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## CI/CD

This repository uses GitHub Actions for continuous integration and workflow automation:

*   **`ci.yml`**: On every push and pull request to the `main` branch, this workflow installs dependencies, lints the code, and runs type checks to ensure code quality.
*   **`validate-pr-version.yml`**: Automatically bumps the `package.json` version and validates that it has been updated on pull requests to `main`.
*   **`detect-direct-push.yml`**: Prevents direct pushes to the `main` branch, enforcing a pull-request-based development workflow.

## Deployment

This project is configured for easy deployment on [Render](https://render.com/). The `render.yaml` file defines the service, specifying the build command and the static publish path. The `VITE_API_URL` environment variable must be set in the Render service configuration for the build to succeed.

## License

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for more details.
