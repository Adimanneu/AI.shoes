function filter(shoes, min, max) {
    // Creates new variable that contains an empty array
    shoesCorrectPrice = [];
    // Goes through all shoes
    for (let shoe of shoes) {
        // Checks if current shoe's price is less than min-price and more than max-price
        if (shoe.price >= min && shoe.price <= max) {
            // If true adds current shoe to shoeCorrectPrice (array)
            shoesCorrectPrice.push(shoe);
        }
    }
    // Returns the new array with shoes within the price range
    return shoesCorrectPrice;
}