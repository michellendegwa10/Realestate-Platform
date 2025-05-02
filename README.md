# Real Estate Hub - Find Your Dream Property

## Project Overview

This project is a multi-page web application designed to simulate a basic real estate platform. It allows users to browse property listings, learn about agents, and even add new property listings through a simple form. The application demonstrates fundamental front-end web development skills, including semantic HTML structure, responsive CSS styling, and dynamic JavaScript functionality with local data persistence.

## Purpose

The primary goal of this project is to showcase the ability to build a structured and interactive website with user input and data management using core web technologies. It provides a foundation for understanding how data can be collected and displayed on a website without a backend database.

## Problem Solved

This project offers a simplified solution for managing and displaying property listings. Users can add new properties, and these listings are stored locally in their browser, allowing them to persist across sessions. This demonstrates a basic data management workflow on the client-side.

## Technologies Used

* **HTML5:** For structuring the web pages with semantic markup.
* **CSS3:** For styling the application and implementing a responsive layout.
* **JavaScript:** For handling form submissions, validating user input, and dynamically displaying property data retrieved from `localStorage`.

## Features

* **Semantic HTML Structure:** Utilizes semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) for better organization and accessibility.
* **Multi-Page Navigation:** Includes five distinct pages (Home, Properties, Agents, Add Property, Property Listings) with clear navigation.
* **Responsive Design:** Implements CSS media queries to ensure the layout adapts to different screen sizes (mobile, tablet, desktop).
* **Add Property Form:** Allows users to input details for new property listings (name, location, price, type, bedrooms, bathrooms, description).
* **Form Validation:** Basic JavaScript validation is implemented on the "Add Property" form to ensure required fields are filled.
* **Local Data Persistence:** Uses `localStorage` to store the property listings added by users, allowing the data to persist across browser sessions.
* **Dynamic Property Listings:** The "Property Listings" page dynamically displays the properties retrieved from `localStorage` using JavaScript.
* **Agent Information:** A dedicated "Agents" page provides basic information about real estate agents.
* **Property Search (Basic):** The "Properties" page includes a simple form to search by location and property type (currently client-side and not fully functional for filtering stored data without further JavaScript implementation).

## Known Bugs

* Currently, there is no functionality to edit or delete existing property listings.
* The search functionality on the "Properties" page is a static form and does not actively filter the locally stored data without additional JavaScript implementation.
* The "Featured Listings" section on the homepage is currently a placeholder and does not dynamically pull data.
* Visual styling is basic and could be further enhanced for a more polished user interface.

## How to Run

1.  Save all the provided HTML files (`index.html`, `properties.html`, `agents.html`, `add-property.html`, `property-listings.html`), the CSS file (`style.css`), and the JavaScript file (`script.js`) in the same directory.
2.  Open the `index.html` file (or any of the `.html` files) in your web browser.
3.  Navigate through the different pages using the links in the header.
4.  Use the "Add Property" page to enter new property details and click "Add Property". The data will be saved in your browser's `localStorage`.
5.  Go to the "Property Listings" page to view the properties you have added.

## Comments in Code

The JavaScript code (`script.js`) includes comments to explain the functionality of different sections. The HTML and CSS are generally well-structured for readability.

## Further Improvements

* Implement client-side filtering for the property search on the "Properties" page using JavaScript.
* Add functionality to edit and delete property listings.
* Enhance the visual design and user interface with more advanced CSS styling.
* Implement a more dynamic "Featured Listings" section on the homepage.
* Consider adding image uploads for properties (though this would require more complex handling beyond basic