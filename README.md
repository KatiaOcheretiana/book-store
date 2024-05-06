# Simple Book Store Application

This is a simple book store application built using React.js and Redux. Users can browse through a list of books, add them to their cart, and order books. Along with fundamental functionalities, the app incorporates advanced features such as retrieving product data from Firebase, dynamic pricing, and currency selection to enhance user experience.

## Technologies Used

- React.js
- TypeScript
- Redux (toolkit, redux-persist)
- Firebase
- Material-UI
- React Router
- Styled-components
- Formik/Yup

## Features

- Displays a list of books stored in a JSON object from Firebase.
- Users can add books to their cart by clicking the "Buy/Add" button.
- Total price is displayed in the header near the basket icon.
- Dynamically update the total price when adding or removing items from the cart.
- Remove items from the cart if the quantity is reduced to zero.
- Persist cart items even after page reload using local storage.
- Store JSON in Firebase collection with ordered goods and user information.
- Implemented currency selector to allow users to change the currency.

![Preview]("./public/ImagesForReadme/Знімок екрана 2024-05-06 160049.png")
![Preview]("./public/ImagesForReadme/Знімок екрана 2024-05-06 160105.png")

## Get Started

To run the application locally, follow these steps:

Clone the repository: git clone https://github.com/KatiaOcheretiana/book-store
Install yarn: npm i yarn
Install dependencies: yarn
Start the development server: yarn start
Open your preferred web browser and navigate to http://localhost:3000
