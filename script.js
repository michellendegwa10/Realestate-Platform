document.addEventListener('DOMContentLoaded'), () => 
    // Function to save property data to local storage
    function saveProperty(propertyName, location, price, type, bedrooms, bathrooms, description) {
        let properties = localStorage.getItem('properties') ? JSON.parse(localStorage.getItem('properties')) : [];
        properties.push({ propertyName, location, price, type, bedrooms, bathrooms, description });
        localStorage.setItem('properties', JSON.stringify(properties));
    }