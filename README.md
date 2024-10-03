# Weather App (React)

A simple weather application built with React that allows users to check current weather conditions for any city. It fetches real-time weather data from the OpenWeatherMap API and displays the temperature, weather description, humidity, and wind speed.

## Features

- Search for the current weather by city name.
- Get real-time weather details including temperature, weather description, humidity, and wind speed.
- Responsive design for mobile and desktop views.
- Clean and user-friendly UI.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **OpenWeatherMap API**: To fetch weather data.
- **CSS**: For styling the app.
- **React Hooks**: For managing state and side effects.
- **React Router** (Optional): If you decide to extend the app in the future with multiple pages.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager): Comes with Node.js.

## Installation

Follow these steps to get the project up and running locally:

1. **Clone the repository**:

    ```bash
    git clone https://https://github.com/Luan2910/Weather-App
    ```

2. **Navigate to the project directory**:

    ```bash
    cd Weather-App
    ```

3. **Install dependencies**:

    Run the following command to install the necessary packages:

    ```bash
    npm install
    ```

4. **Get an OpenWeatherMap API key**:

    - Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) and generate an API key.
    - Once you have the API key, create a `.env` file in the root of your project and add the following line:

    ```
    VITE_APP_ID=your_api_key_here
    ```

5. **Run the development server**:

    Start the React development server by running:

    ```bash
    npm start
    ```

    This will start the app and open it in your default browser at `http://localhost:3000`.

## Usage

1. **Search for a city**: Enter the name of a city in the search input and press "Search" to view the current weather conditions.
2. **View the weather**: The app will display the temperature, weather description, humidity, and wind speed for the specified city.
3. **Error handling**: If the city is not found or there is an issue with the API request, an appropriate error message will be shown.

## Code Structure

- `public/index.html`: The root HTML file for the app.
- `src/`: Main source directory containing the app's components and logic.
  - `App.js`: The main React component that handles the weather logic.
  - `components/`: Contains all reusable components
  - `index.css`: CSS file for the app’s styling.
  - `index.js`: Entry point for the React app.
  - `assets/`: All the assets used in the project.
- `.env`: Configuration file for environment variables (such as your API key).

## API Integration

The app uses the **OpenWeatherMap API** to fetch the current weather data. The request is made to the following endpoint:

```javascript
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
```

### Response Structure:

The data returned by the API contains key information, including:
- `weather`: Weather description (e.g., "Clear sky").
- `main`: Temperature, humidity, and pressure.
- `wind`: Wind speed.
  
This data is extracted and displayed on the UI in a user-friendly manner.

## License

This project is open-source and available under the MIT License.

## Credits

- **OpenWeatherMap**: For providing the weather data API.
- **React**: For building the app’s interface.