📸 React Photo Gallery App

A responsive photo gallery web application built using React, integrated with the Unsplash API to fetch and display high-quality images dynamically.

🚀 Features

Fetches real-time photos from Unsplash API

Clean and responsive gallery layout

Dynamic image loading

Fast and lightweight React setup

Easy to extend (search, categories, infinite scroll, etc.)

🛠️ Tech Stack

React (Frontend)

JavaScript (ES6+)

Unsplash API

CSS / Tailwind CSS (whichever you used)

Axios / Fetch API

📦 Installation & Setup

Clone the repository:

git clone https://github.com/your-username/react-gallery.git


Navigate to the project folder:

cd react-gallery


Install dependencies:

npm install


Create a .env file in the root directory and add your Unsplash API key:

REACT_APP_UNSPLASH_ACCESS_KEY=your_access_key_here


⚠️ Never hardcode your API key inside the source code.

Start the development server:

npm start


The app will run on:

http://localhost:3000

🔑 Unsplash API Usage

Photos are fetched using the Unsplash REST API

Make sure you have created an app on https://unsplash.com/developers

API limits apply based on your Unsplash account

Example API endpoint used:

https://api.unsplash.com/photos

📂 Project Structure (Basic)
src/
│── components/
│   ├── Gallery.jsx
│   ├── PhotoCard.jsx
│
│── App.js
│── index.js
│── styles.css

📌 Future Improvements

Search photos by keyword

Infinite scroll / pagination

Image modal preview

Download & like buttons

Better error and loading states

🧠 Learning Outcome

This project helped in understanding:

API integration in React

Handling async data

Component-based UI design

Environment variables in React

📜 License

This project is for learning and personal use.
Images are provided by Unsplash under their license.

