// Select the filter form and car grid
const priceFilter = document.getElementById('priceFilter');
const modelFilter = document.getElementById('modelFilter');
const mileageFilter = document.getElementById('mileageFilter');
const makeFilter = document.getElementById('makeFilter'); // New filter for Make
const applyFiltersButton = document.getElementById('applyFilters');
const carCards = document.querySelectorAll('.car-card');

// Add event listener to the filter button
applyFiltersButton.addEventListener('click', function () {
    // Get filter values
    const maxPrice = parseFloat(priceFilter.value);
    const model = modelFilter.value.toLowerCase();
    const maxMileage = parseFloat(mileageFilter.value);
    const make = makeFilter.value.toLowerCase(); // Get Make filter value

    carCards.forEach(card => {
        const price = parseFloat(card.getAttribute('data-price'));
        const cardModel = card.getAttribute('data-model').toLowerCase();
        const mileage = parseFloat(card.getAttribute('data-mileage'));
        const cardMake = card.getAttribute('data-make').toLowerCase(); // Get Make attribute

        // Check filters
        const matchesPrice = isNaN(maxPrice) || price <= maxPrice;
        const matchesModel = !model || cardModel.includes(model);
        const matchesMileage = isNaN(maxMileage) || mileage <= maxMileage;
        const matchesMake = !make || cardMake.includes(make); // Check Make filter

        // Show or hide the card based on filter matches
        if (matchesPrice && matchesModel && matchesMileage && matchesMake) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
