# WanderMap
# https://wander-map.netlify.app/

WanderMap is a web application designed to provide users with an interactive travel map. The application allows users to view and add locations they have visited and manage their travel experiences.

## Technologies

The project is built using the following technologies and tools:

- **React**:
- **Vite**
- **React Router**
- **CSS Modules**

- **Leaflet**: A JavaScript library for creating interactive maps, used in the application to display the travel map.
- **BigDataCloud API**: An external service used for geolocation, enabling automatic assignment of locations based on IP addresses.


## Project Structure

- **`index.html`**: The main HTML file, loaded first by the browser. It references the main JavaScript file of the application.
- **`src/`**: The directory containing the main source code of the application, including all React components, CSS Modules styles, and application logic.
- **`public/`**: The directory containing public assets, such as images, that are directly accessible by the browser.
- **`package.json`**: The project's configuration file, containing information about dependencies, scripts, and other project metadata.
- **`vite.config.js`**: The configuration for the Vite tool, including settings for building and running the application.
- **`.eslintrc.*`**: ESLint configuration files that define linting rules to ensure code consistency and quality.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Bartosz278/WanderMap.git
   cd WanderMap
2. Install dependencies:
   ```bash
   npm install
3. Run the application in development mode:
   ```bash
   npm run dev
