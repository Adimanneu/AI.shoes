"use strict"

document.addEventListener('DOMContentLoaded', function () {

// the average of the reviews
  function calculateAverageRating(reviews) {
    const totalScores = reviews.reduce((sum, review) => sum + review.score, 0);
    const averageRating = totalScores / (reviews.length || 1); 
    return isNaN(averageRating) ? 0 : averageRating;
  }

  function renderPopup(shoe) {
    const imagePath = shoe.file_name;

    //Reviews
    const shoeID = shoe.id;
    const foundReview = REVIEWS.filter((obj) => obj.shoe_id === shoeID);

    // declare to calculate the average of the reviews
    const averageRating = calculateAverageRating(foundReview);
    
    const countryOfProduction = COUNTRIES.find(function (x) { return x.id === shoe.country_id; });
    const kindOfShoe = KINDS.find(function (x) { return x.id === shoe.kind_id; });

    const popup = document.createElement("div");
    popup.innerHTML = `
      <div id="popup">
        <div class="popupContainer">
          <div id="closeButton">X</div>
          <div class="content">
            <img src="media/skobilder/${imagePath}" alt="Shoes">
            <div>
              <h1>${shoe.name.toUpperCase()}</h1>
              <div class="price">${shoe.price} KR</div>
              <div class="productdetails">
                <div class="kindOfShoe">${kindOfShoe.name.toUpperCase()}</div>
                <div class="countryOfProduction">MADE IN ${countryOfProduction.name.toUpperCase()}</div>
              </div>
            </div>           
          </div>
        
          
          <div id="reviews">
            <div>
              <h2 id="reviewh1">REVIEWS</h2>
              <div id="stars">
                ${renderStarRatings(averageRating)} (${foundReview.length})
              </div>
            </div>
            <div id="comment">
              ${renderComments(foundReview)}
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(popup);

    const closeButton = popup.querySelector('#closeButton');
    closeButton.addEventListener('click', function() {
      popup.remove();
    });
  }

function renderComments(reviews) {
  return reviews.map((review) => `
    <div class="comment">
      <div class="review-info">
        <hp>
          <span class="reviewer-name">Anonym on</span>
          <span class="review-date">12/12/2023</span>
        </hp>
        <div class="stars">
          ${renderStarRatings(review.score)}
        </div>
      </div>
      <div class="review-content">
        <p>${review.rev}</p>
      </div>
    </div>
  `).join("");
}


function renderStarRatings(score) {
  const totalStars = 5;
  const filledStars = Math.round(score);

  return Array.from({ length: totalStars }, (_, index) => {
    const isFilled = index < filledStars;
    const starStyle = isFilled ? 'filled-star' : 'empty-star';
    return `<span class="star ${starStyle}">&#9733;</span>`;
  }).join("");
}

  function addClickEventToShoes() {
    const shoeElements = document.querySelectorAll('.shoe');

    shoeElements.forEach(function(shoeElement) {
      shoeElement.addEventListener('click', function() {
        const shoeId = shoeElement.id;
        const selectedShoe = SHOES.find(shoe => shoe.id === parseInt(shoeId, 10));

        if (selectedShoe) {
          renderPopup(selectedShoe);
        }
      });
    });
  }

  // addClickEventToShoes();

});